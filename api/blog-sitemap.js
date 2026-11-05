const { setShortCache } = require('./_lib/cache');
const { listPublishedPosts } = require('./_lib/posts');
const { SITE_URL, escapeHtml } = require('./_lib/render');

// Served at /blog-sitemap.xml and listed in robots.txt, so published posts reach
// search engines without editing public/sitemap.xml.
module.exports = async function handler(req, res) {
  try {
    const posts = await listPublishedPosts();
    const urls = posts
      .map((post) => {
        const lastmod = (post.updatedAt || post.publishedAt).slice(0, 10);
        return `<url><loc>${escapeHtml(`${SITE_URL}/blog/${post.slug}`)}</loc>${lastmod ? `<lastmod>${escapeHtml(lastmod)}</lastmod>` : ''}</url>`;
      })
      .join('');
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    setShortCache(res, 3600);
    return res
      .status(200)
      .send(
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
      );
  } catch (err) {
    console.error('api/blog-sitemap failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).send('Sitemap temporarily unavailable');
  }
};
