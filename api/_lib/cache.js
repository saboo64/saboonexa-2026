// Vercel's CDN keeps a short-lived copy, which keeps pages fast and Firestore reads low.
// Browsers must check every time. Without this they can show an old copy for minutes
// after a change, such as a price that has since been updated.
function setShortCache(res, seconds = 60) {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.setHeader(
    'CDN-Cache-Control',
    `public, s-maxage=${seconds}, stale-while-revalidate=600`
  );
}

module.exports = { setShortCache };
