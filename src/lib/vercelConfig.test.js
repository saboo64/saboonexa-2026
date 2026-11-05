/** @jest-environment node */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', '..');
const { redirects, rewrites, headers } = JSON.parse(
  fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')
);
const app = fs
  .readFileSync(path.join(root, 'src', 'App.js'), 'utf8')
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
const routes = [...app.matchAll(/path=['"]([^'"]+)['"]/g)]
  .map((match) => match[1])
  .filter((route) => route !== '*');
const withoutSlash = (url) => (url === '/' ? url : url.replace(/\/$/, ''));

describe('vercel.json redirects', () => {
  const sources = redirects.map((redirect) => redirect.source);
  const bySource = new Map(redirects.map((r) => [r.source, r.destination]));

  it('has no duplicates', () => {
    expect(new Set(sources).size).toBe(sources.length);
  });

  it('has no sources Vercel would treat as patterns', () => {
    sources.forEach((source) => {
      expect(source.startsWith('/')).toBe(true);
      expect(source).not.toMatch(/[?&*()+:]/);
    });
  });

  it('has no chains or loops', () => {
    redirects.forEach(({ source, destination }) => {
      expect(withoutSlash(source)).not.toBe(withoutSlash(destination));
      expect(bySource.has(destination)).toBe(false);
    });
  });

  it('never captures a live page, except /offers which has one main address', () => {
    const live = routes.filter((route) => route !== '/offers');
    sources.forEach((source) => {
      expect(live).not.toContain(withoutSlash(source));
    });
  });

  it('never overrides a real file', () => {
    const files = fs.readdirSync(path.join(root, 'public')).map((f) => `/${f}`);
    sources.forEach((source) => expect(files).not.toContain(source));
  });

  it('only sends visitors to pages that exist', () => {
    redirects
      .filter(({ destination }) => destination.startsWith('/'))
      .forEach(({ destination }) => {
        if (destination !== '/') expect(routes).toContain(destination);
      });
  });

  it('sends both old offers addresses to the main one', () => {
    expect(bySource.get('/offers')).toBe('/nexa-car-offers-in-hyderabad');
    expect(bySource.get('/offers.php')).toBe('/nexa-car-offers-in-hyderabad');
  });
});

describe('vercel.json routing', () => {
  it('sends server-built pages to their functions before the catch-all', () => {
    expect(rewrites[rewrites.length - 1].destination).toBe('/index.html');
    expect(rewrites.map((r) => r.source)).toEqual(
      expect.arrayContaining(['/blog', '/blog/:slug', '/blog-sitemap.xml'])
    );
  });

  it('leaves /api/ out of the catch-all', () => {
    const catchAll = new RegExp(`^${rewrites[rewrites.length - 1].source}$`);
    expect(catchAll.test('/api/posts')).toBe(false);
    expect(catchAll.test('/about')).toBe(true);
  });

  it('marks the dashboard noindex', () => {
    const sourcesWithNoindex = headers
      .filter((h) => h.headers.some((x) => x.key === 'X-Robots-Tag'))
      .map((h) => h.source);
    expect(sourcesWithNoindex).toEqual(['/admin', '/admin/:path*']);
  });
});
