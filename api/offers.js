const { setShortCache } = require('./_lib/cache');
const { getLiveOffers } = require('./_lib/offers');

// GET /api/offers -> the car offers and banners that are live today.
module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const data = await getLiveOffers();
    setShortCache(res);
    return res.status(200).json(data);
  } catch (err) {
    console.error('api/offers failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({ error: 'Could not load offers' });
  }
};
