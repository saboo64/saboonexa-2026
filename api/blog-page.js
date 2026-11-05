const { setShortCache } = require('./_lib/cache');
const { listPublishedPosts, getPublishedPost } = require('./_lib/posts');
const { loadShell } = require('./_lib/shell');
const { pageTags } = require('./_lib/seoTags');
const {
  SITE_URL,
  escapeHtml,
  imagekitUrl,
  renderPage,
} = require('./_lib/render');

const DEFAULT_IMAGE =
  'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg';
const PUBLISHER = { '@type': 'AutoDealer', name: 'Popular Nexa' };

function listPage(posts, override) {
  const canonical = `${SITE_URL}/blog`;
  const description =
    'Maruti Suzuki Nexa car guides, service tips, and news from Popular Nexa, Hyderabad.';
  const items = posts
    .map(
      (post) =>
        `<article><h2><a href="/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h2><p>${escapeHtml(post.excerpt)}</p></article>`
    )
    .join('');
  return {
    seo: {
      title: override.title || 'Maruti Nexa Blog | Popular Nexa Hyderabad',
      description: override.description || description,
      canonical,
      image: override.ogImage || DEFAULT_IMAGE,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Popular Nexa Blog',
        description,
        url: canonical,
        publisher: PUBLISHER,
      },
    },
    rootHtml: `<main><h1>Maruti Nexa Blog</h1>${items}</main>`,
  };
}

function postPage(post) {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const title = post.metaTitle || `${post.title} | Popular Nexa`;
  const description = post.metaDescription || post.excerpt;
  const image = post.coverImage || DEFAULT_IMAGE;
  const cover = post.coverImage
    ? `<img src="${escapeHtml(imagekitUrl(post.coverImage, 'w-1200,f-auto'))}" alt="${escapeHtml(post.coverImageAlt)}">`
    : '';
  return {
    seo: {
      title,
      description,
      canonical,
      image,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description,
        image,
        url: canonical,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: { '@type': 'Organization', name: post.author },
        publisher: PUBLISHER,
      },
    },
    rootHtml: `<main><article><h1>${escapeHtml(post.title)}</h1>${cover}${post.body}</article></main>`,
  };
}

const NOT_FOUND_SEO = {
  title: 'Page not found | Popular Nexa',
  description: 'This blog post could not be found.',
  canonical: `${SITE_URL}/blog`,
  image: DEFAULT_IMAGE,
  robots: 'noindex',
};

module.exports = async function handler(req, res) {
  const shell = await loadShell(req);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  try {
    const slug = req.query.slug ? String(req.query.slug) : null;
    if (slug) {
      const post = await getPublishedPost(slug);
      if (!post) {
        setShortCache(res, 30);
        return res.status(404).send(renderPage(shell, NOT_FOUND_SEO, ''));
      }
      const page = postPage(post);
      setShortCache(res);
      return res.status(200).send(renderPage(shell, page.seo, page.rootHtml));
    }
    const [posts, override] = await Promise.all([
      listPublishedPosts(),
      pageTags('/blog'),
    ]);
    const page = listPage(posts, override);
    setShortCache(res);
    return res.status(200).send(renderPage(shell, page.seo, page.rootHtml));
  } catch (err) {
    // 503 tells crawlers to come back later; visitors still get the app, which
    // shows its own error message.
    console.error('api/blog-page failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).send(shell);
  }
};
