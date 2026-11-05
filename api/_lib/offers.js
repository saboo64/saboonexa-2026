const { db } = require('./firebaseAdmin');

// Offer dates are calendar days in India, whatever timezone the server runs in.
const todayInIndia = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

function isLive(item, today) {
  if (!item.active) return false;
  if (item.startsAt && item.startsAt > today) return false;
  if (item.endsAt && item.endsAt < today) return false;
  return true;
}

async function liveItems(collection, fields, today) {
  const snapshot = await db().collection(collection).get();
  // null means nothing has been set up yet, so the page uses its built-in defaults.
  // An empty list means staff have items, but none are live today.
  if (snapshot.empty) return null;
  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .filter((item) => isLive(item, today))
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .map((item) => {
      const output = { id: item.id };
      fields.forEach((field) => {
        output[field] = item[field] || '';
      });
      return output;
    });
}

async function getLiveOffers() {
  const today = todayInIndia();
  const [offers, banners] = await Promise.all([
    liveItems('offers', ['carName', 'amount', 'note', 'image', 'imageAlt', 'link', 'endsAt'], today),
    liveItems('offerBanners', ['alt', 'desktopImage', 'mobileImage', 'link'], today),
  ]);
  return { offers, banners };
}

module.exports = { getLiveOffers, isLive, todayInIndia };
