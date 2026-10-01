// Month -> seasonal offer label shown in SEO title/description/keywords.
// Update this list if the business wants a different campaign name for a
// given month — everything downstream (all pages, via the <Seo> component)
// picks it up automatically, no per-page edits needed.
const SEASONAL_OFFERS = [
  { month: 'January', label: 'New Year & Republic Day' },
  { month: 'February', label: 'Winter' },
  { month: 'March', label: 'Financial Year-End' },
  { month: 'April', label: 'New Financial Year' },
  { month: 'May', label: 'Summer' },
  { month: 'June', label: 'Monsoon' },
  { month: 'July', label: 'Monsoon' },
  { month: 'August', label: 'Independence Day & Monsoon' },
  { month: 'September', label: 'Monsoon' },
  { month: 'October', label: 'Dussehra & Navratri' },
  { month: 'November', label: 'Diwali' },
  { month: 'December', label: 'Year-End' },
];

export const getCurrentSeasonalOffer = () => {
  const now = new Date();
  const { month, label } = SEASONAL_OFFERS[now.getMonth()];
  return { month, label, year: now.getFullYear() };
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
