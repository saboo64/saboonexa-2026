// Run after `npm run build` when pages are added or their tags change in code:
//   node scripts/extract-seo-defaults.js
// Opens each page of the built site in Chrome, reads the tags react-helmet sets, and
// saves them to src/constants/seoDefaults.json, which is the list of pages in the
// dashboard's SEO manager. The site has no prerendered files, so a browser is needed.
// Set CHROME_PATH if Chrome isn't in the usual Windows location.
const fs = require('fs');
const http = require('http');
const path = require('path');
const puppeteer = require('puppeteer-core');
const seasonal = require('../src/constants/seasonalOffers.json');

const root = path.join(__dirname, '..');
const buildDir = path.join(root, 'build');
const outFile = path.join(root, 'src', 'constants', 'seoDefaults.json');
const CHROME =
  process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Not pages for the public, or addresses that redirect elsewhere.
const EXCLUDED = ['/thank-you', '/dashboard', '/offers', '/e-', '/blog/:slug', '/admin/*'];

// The clock is frozen on a date with no festive campaign, so a page's saved text is
// its everyday text. {{SEASON}} and {{YEAR}} are put back, so they stay automatic.
const FROZEN_DATE = '2099-03-15T06:00:00Z';
const SEASON = seasonal[2].label;

function routesFromApp() {
  const app = fs
    .readFileSync(path.join(root, 'src', 'App.js'), 'utf8')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  const routes = [...app.matchAll(/path=['"]([^'"]+)['"]/g)].map((m) => m[1]);
  return [...new Set(routes)].filter((r) => r !== '*' && !EXCLUDED.includes(r));
}

const MIME = {
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
};

// Serves the built site, answering every unknown address with index.html.
function serveBuild() {
  const server = http.createServer((req, res) => {
    const clean = decodeURIComponent(req.url.split('?')[0]);
    if (clean.startsWith('/api/')) {
      res.writeHead(503);
      res.end();
      return;
    }
    let file = path.join(buildDir, clean);
    if (!file.startsWith(buildDir) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = path.join(buildDir, 'index.html');
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

const placeholders = (text) =>
  (text || '').split(SEASON).join('{{SEASON}}').split('2099').join('{{YEAR}}').trim();

(async () => {
  const server = await serveBuild();
  const { port } = server.address();
  const browser = await puppeteer.launch({ headless: true, executablePath: CHROME });
  const pages = {};
  try {
    for (const route of routesFromApp()) {
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on('request', (request) => {
        // Only this site: no analytics or chat counted during extraction.
        if (request.url().startsWith(`http://127.0.0.1:${port}`)) request.continue();
        else request.abort();
      });
      await page.evaluateOnNewDocument((iso) => {
        const RealDate = Date;
        const fixed = new RealDate(iso).getTime();
        // eslint-disable-next-line no-global-assign
        Date = class extends RealDate {
          constructor(...args) {
            super(...(args.length ? args : [fixed]));
          }
          static now() {
            return fixed;
          }
        };
      }, FROZEN_DATE);
      await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'load' });
      await page.waitForFunction(() => !document.getElementById('loadingImage'), { timeout: 30000 });
      await new Promise((resolve) => setTimeout(resolve, 400));
      const tags = await page.evaluate(() => {
        const content = (selector) => {
          const tag = document.querySelector(selector);
          return tag ? tag.getAttribute('content') || '' : '';
        };
        return {
          title: document.title,
          description: content('meta[name="description"]'),
          keywords: content('meta[name="keywords"]'),
          ogImage: content('meta[property="og:image"]'),
        };
      });
      pages[route] = {
        title: placeholders(tags.title),
        description: placeholders(tags.description),
        keywords: placeholders(tags.keywords),
        ogImage: tags.ogImage,
      };
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  const sorted = Object.fromEntries(
    Object.keys(pages).sort().map((key) => [key, pages[key]])
  );
  fs.writeFileSync(outFile, `${JSON.stringify(sorted, null, 2)}\n`);
  const missing = Object.keys(sorted).filter((key) => !sorted[key].description);
  console.log(`Saved ${Object.keys(sorted).length} pages. Missing a description: ${missing.join(', ') || 'none'}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
