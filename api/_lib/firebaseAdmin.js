const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

// FIREBASE_SERVICE_ACCOUNT holds the service-account JSON, base64-encoded so it
// survives being pasted into Vercel's environment variable form.
function app() {
  if (getApps().length) return getApps()[0];
  const encoded = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!encoded) throw new Error('FIREBASE_SERVICE_ACCOUNT is not set');
  const serviceAccount = JSON.parse(
    Buffer.from(encoded, 'base64').toString('utf8')
  );
  return initializeApp({ credential: cert(serviceAccount) });
}

const db = () => getFirestore(app());

// Returns the caller's uid only if they hold a valid Firebase ID token and have a
// document in `admins`. If `role` is given, that document must also allow it. A
// document with no `roles` field has full access, matching firestore.rules.
async function verifyAdmin(req, role) {
  const match = /^Bearer (.+)$/.exec(req.headers.authorization || '');
  if (!match) return null;
  try {
    const { uid } = await getAuth(app()).verifyIdToken(match[1]);
    const admin = await db().collection('admins').doc(uid).get();
    if (!admin.exists) return null;
    const { roles } = admin.data();
    if (role && Array.isArray(roles) && !roles.includes(role)) return null;
    return uid;
  } catch (err) {
    return null;
  }
}

module.exports = { db, verifyAdmin };
