const { db, verifyAdmin } = require('./_lib/firebaseAdmin');

// Rebuilds the site on Vercel, which bakes the saved SEO changes into every page.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const uid = await verifyAdmin(req, 'seo');
  if (!uid) return res.status(401).json({ error: 'Not authorized' });

  const hook = process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) {
    return res.status(503).json({
      error: 'Publishing isn’t set up yet. Add VERCEL_DEPLOY_HOOK in Vercel.',
    });
  }

  try {
    const response = await fetch(hook, { method: 'POST' });
    if (!response.ok) throw new Error(`Deploy hook returned ${response.status}`);
    const publishedAt = new Date().toISOString();
    await db()
      .collection('seoMeta')
      .doc('status')
      .set({ publishedAt, publishedBy: uid }, { merge: true });
    return res.status(200).json({ publishedAt });
  } catch (err) {
    console.error('api/publish-seo failed:', err);
    return res.status(502).json({ error: 'Vercel didn’t accept the rebuild. Please try again.' });
  }
};
