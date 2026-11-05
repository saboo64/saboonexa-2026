const { db } = require('./firebaseAdmin');
const seoDefaults = require('../../src/constants/seoDefaults.json');
const seasonal = require('../../src/constants/seasonalOffers.json');

// Same as applySeasonalPlaceholders in src/constants/seasonalOffers.js, using India's date.
function fillSeasonal(value) {
  if (typeof value !== 'string') return value;
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(new Date());
  const year = parts.find((part) => part.type === 'year').value;
  const month = Number(parts.find((part) => part.type === 'month').value);
  return value
    .replace(/\{\{SEASON\}\}/g, seasonal[month - 1].label)
    .replace(/\{\{YEAR\}\}/g, year);
}

// A page's tags: its saved dashboard changes on top of its original tags.
// Dashboard changes for these server-built pages go live without a rebuild.
async function pageTags(path) {
  const doc = await db().collection('seoPages').doc(encodeURIComponent(path)).get();
  const saved = doc.exists ? doc.data() : {};
  const tags = { ...seoDefaults[path] };
  ['title', 'description', 'keywords', 'ogImage'].forEach((field) => {
    if (saved[field]) tags[field] = saved[field];
  });
  return {
    ...tags,
    title: fillSeasonal(tags.title),
    description: fillSeasonal(tags.description),
  };
}

module.exports = { fillSeasonal, pageTags };
