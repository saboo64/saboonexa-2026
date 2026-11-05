// Turns the app's HTML shell into a page with real SEO tags and readable content,
// so crawlers and link previews see the post without running any JavaScript.

const SITE_URL = (
  process.env.SITE_URL || 'https://www.saboonexa.in'
).replace(/\/$/, '');

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// JSON inside a <script> tag must not be able to close that tag.
function jsonForScript(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

// A custom image domain only counts as ImageKit if it's set as the URL endpoint.
function isImagekitHost(hostname) {
  if (hostname === 'ik.imagekit.io') return true;
  try {
    return hostname === new URL(process.env.IMAGEKIT_URL_ENDPOINT).hostname;
  } catch (err) {
    return false;
  }
}

function imagekitUrl(url, transform) {
  if (!url || /[?&]tr=/.test(url)) return url;
  try {
    if (!isImagekitHost(new URL(url).hostname)) return url;
  } catch (err) {
    return url;
  }
  return `${url}${url.includes('?') ? '&' : '?'}tr=${transform}`;
}

// Tags carry data-react-helmet so react-helmet replaces them once the app loads
// instead of adding duplicates.
function seoTags({ title, description, canonical, image, type, robots, jsonLd }) {
  const tag = (attr, key, content) =>
    `<meta ${attr}="${key}" content="${escapeHtml(content)}" data-react-helmet="true">`;
  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    tag('name', 'title', title),
    tag('name', 'description', description),
    tag('name', 'robots', robots || 'index, follow'),
    tag('property', 'og:type', type || 'website'),
    tag('property', 'og:url', canonical),
    tag('property', 'og:title', title),
    tag('property', 'og:description', description),
    tag('property', 'og:image', image),
    tag('name', 'twitter:card', 'summary_large_image'),
    tag('name', 'twitter:title', title),
    tag('name', 'twitter:description', description),
    tag('name', 'twitter:image', image),
    `<link rel="canonical" href="${escapeHtml(canonical)}" data-react-helmet="true">`,
  ];
  if (jsonLd) {
    tags.push(
      `<script type="application/ld+json" data-react-helmet="true">${jsonForScript(jsonLd)}</script>`
    );
  }
  return tags.join('');
}

function renderPage(shell, seo, rootHtml) {
  const cleaned = shell
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(
      /<meta\b[^>]*\b(?:name|property)=["']?(?:title|description|keywords|robots|googlebot|og:[^"'\s>]*|twitter:[^"'\s>]*)["']?[^>]*>/gi,
      ''
    )
    .replace(/<link\b[^>]*\brel=["']?canonical["']?[^>]*>/gi, '');
  // Function replacers: post text may contain `$&`, which a string replacement
  // would treat as a pattern.
  return cleaned
    .replace('</head>', () => `${seoTags(seo)}</head>`)
    .replace(
      // The shell's root holds a loading image, which the real content replaces.
      /<div id=["']?root["']?>\s*(?:<div id=["']?loadingImage["']?>[\s\S]*?<\/div>\s*)?<\/div>/,
      () => `<div id="root">${rootHtml}</div>`
    );
}

const FALLBACK_SHELL =
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body><div id="root"></div></body></html>';

module.exports = {
  SITE_URL,
  FALLBACK_SHELL,
  escapeHtml,
  imagekitUrl,
  renderPage,
};
