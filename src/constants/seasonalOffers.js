import SEASONAL_OFFERS from './seasonalOffers.json';

// Month -> seasonal offer label shown in SEO title/description/keywords.
// Update this list if the business wants a different campaign name for a
// given month — everything downstream (all pages, via the <Seo> component)
// picks it up automatically, no per-page edits needed.

export const getCurrentSeasonalOffer = () => {
  const now = new Date();
  const { month, label } = SEASONAL_OFFERS[now.getMonth()];
  return { month, label, year: now.getFullYear() };
};

// Swaps {{SEASON}} and {{YEAR}} for the live campaign name and current year.
export const applySeasonalPlaceholders = (value) => {
  if (typeof value !== 'string') return value;
  const { label, year } = getCurrentSeasonalOffer();
  return value.replace(/\{\{SEASON\}\}/g, label).replace(/\{\{YEAR\}\}/g, year);
};

// Festive campaign window for the Homepage/Offers title+keywords overrides:
// October = Dussehra, November = Diwali, every other month = no override
// (the page falls back to its plain evergreen title). Update here if the
// business wants the festive window to cover different months.
export const getFestiveCampaign = () => {
  const month = new Date().getMonth(); // 0-indexed
  if (month === 9) return 'dussehra'; // October
  if (month === 10) return 'diwali'; // November
  return null;
};

export default SEASONAL_OFFERS;
