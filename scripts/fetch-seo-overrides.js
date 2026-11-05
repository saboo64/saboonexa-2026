// Runs before `npm start`, `npm run build`, and `npm test`. Saves the SEO changes made
// in the dashboard to src/generated/seoOverrides.json, which PageSeoOverride reads. It never
// fails the build: if Firestore can't be reached, pages use their original tags.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outFile = path.join(root, 'src', 'generated', 'seoOverrides.json');
const FIELDS = ['title', 'description', 'keywords', 'ogImage'];

function loadLocalEnv() {
  const file = path.join(root, '.env');
  if (process.env.FIREBASE_SERVICE_ACCOUNT || !fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (line.startsWith('FIREBASE_SERVICE_ACCOUNT=')) {
      process.env.FIREBASE_SERVICE_ACCOUNT = line.slice('FIREBASE_SERVICE_ACCOUNT='.length);
    }
  }
}

function write(overrides) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, `${JSON.stringify(overrides, null, 2)}\n`);
}

async function fetchOverrides() {
  const { db } = require('../api/_lib/firebaseAdmin');
  const snapshot = await db().collection('seoPages').get();
  const overrides = {};
  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    const tags = {};
    FIELDS.forEach((field) => {
      if (data[field]) tags[field] = data[field];
    });
    overrides[decodeURIComponent(doc.id)] = tags;
  });
  return overrides;
}

(async () => {
  loadLocalEnv();
  // Written first, so the import in PageSeoOverride always resolves.
  if (!fs.existsSync(outFile)) write({});
  if (!process.env.FIREBASE_SERVICE_ACCOUNT || process.env.NODE_ENV === 'test') return;
  const overrides = await Promise.race([
    fetchOverrides(),
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timed out')), 20000);
    }),
  ]);
  write(overrides);
  console.log(`SEO: ${Object.keys(overrides).length} page(s) with dashboard changes.`);
})()
  .catch((err) => {
    console.warn(`SEO: couldn't load dashboard changes (${err.message}). Using saved tags.`);
  })
  .finally(() => process.exit(0));
