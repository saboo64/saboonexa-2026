const { setShortCache } = require('./_lib/cache');
const { getLiveOffers } = require('./_lib/offers');
const { loadShell } = require('./_lib/shell');
const { pageTags } = require('./_lib/seoTags');
const { SITE_URL, escapeHtml, renderPage } = require('./_lib/render');

const PATH = '/nexa-car-offers-in-hyderabad';
const DEFAULT_IMAGE =
  'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg';

// Sends the live offers and SEO tags in the HTML, so crawlers can read them.
// If nothing has been set up in the dashboard yet, no prices are listed here.
module.exports = async function handler(req, res) {
  const shell = await loadShell(req);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  try {
    const [{ offers }, tags] = await Promise.all([
      getLiveOffers(),
      pageTags(PATH),
    ]);
    const items = (offers || [])
      .map((offer) => {
        const note = offer.note ? ` ${escapeHtml(offer.note)}.` : '';
        return `<li><a href="${escapeHtml(offer.link)}">${escapeHtml(offer.carName)}</a>: save up to ₹${escapeHtml(offer.amount)}.${note}</li>`;
      })
      .join('');
    setShortCache(res);
    return res.status(200).send(
      renderPage(
        shell,
        {
          title: tags.title,
          description: tags.description,
          canonical: `${SITE_URL}${PATH}`,
          image: tags.ogImage || DEFAULT_IMAGE,
        },
        `<main><h1>Maruti Nexa Car Offers in Hyderabad</h1><ul>${items}</ul></main>`
      )
    );
  } catch (err) {
    console.error('api/offers-page failed:', err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).send(shell);
  }
};
