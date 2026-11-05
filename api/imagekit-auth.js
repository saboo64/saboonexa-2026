const crypto = require('crypto');
const { verifyAdmin } = require('./_lib/firebaseAdmin');

// Signs a browser upload to ImageKit. Only logged-in admins can get a signature,
// and the private key never leaves this function.
module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY } = process.env;
  if (!IMAGEKIT_PRIVATE_KEY || !IMAGEKIT_PUBLIC_KEY) {
    console.error('ImageKit keys are not configured');
    return res.status(500).json({ error: 'Image uploads are not configured' });
  }

  const uid = await verifyAdmin(req);
  if (!uid) return res.status(401).json({ error: 'Not authorized' });

  const token = crypto.randomUUID();
  const expire = Math.floor(Date.now() / 1000) + 30 * 60;
  const signature = crypto
    .createHmac('sha1', IMAGEKIT_PRIVATE_KEY)
    .update(token + expire)
    .digest('hex');

  return res
    .status(200)
    .json({ token, expire, signature, publicKey: IMAGEKIT_PUBLIC_KEY });
};
