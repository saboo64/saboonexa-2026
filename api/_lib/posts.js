const { db } = require('./firebaseAdmin');
const { cleanPostHtml } = require('./sanitize');

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function toPublicPost(doc, { includeBody }) {
  const data = doc.data();
  const post = {
    slug: doc.id,
    title: data.title || '',
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '',
    coverImageAlt: data.coverImageAlt || '',
    category: data.category || '',
    author: data.author || 'Popular Nexa',
    metaTitle: data.metaTitle || '',
    metaDescription: data.metaDescription || '',
    publishedAt: data.publishedAt || '',
    updatedAt: data.updatedAt || '',
  };
  if (includeBody) post.body = cleanPostHtml(data.body);
  return post;
}

// Sorted in memory so no composite Firestore index has to be created.
async function listPublishedPosts() {
  const snapshot = await db()
    .collection('posts')
    .where('status', '==', 'published')
    .get();
  return snapshot.docs
    .map((doc) => toPublicPost(doc, { includeBody: false }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

async function getPublishedPost(slug) {
  if (!SLUG_PATTERN.test(slug || '')) return null;
  const doc = await db().collection('posts').doc(slug).get();
  if (!doc.exists || doc.data().status !== 'published') return null;
  return toPublicPost(doc, { includeBody: true });
}

module.exports = { listPublishedPosts, getPublishedPost };
