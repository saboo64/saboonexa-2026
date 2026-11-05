const { setShortCache } = require('./_lib/cache');
const { listPublishedPosts, getPublishedPost } = require('./_lib/posts');

// GET /api/posts            -> published posts, without their body text
// GET /api/posts?slug=abc   -> one published post
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    if (req.query.slug) {
      const post = await getPublishedPost(String(req.query.slug));
      if (!post) {
        setShortCache(res, 30);
        return res.status(404).json({ error: 'Post not found' });
      }
      setShortCache(res);
      return res.status(200).json({ post });
    }
    const posts = await listPublishedPosts();
    setShortCache(res);
    return res.status(200).json({ posts });
  } catch (err) {
    console.error('api/posts failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({ error: 'Could not load posts' });
  }
};
