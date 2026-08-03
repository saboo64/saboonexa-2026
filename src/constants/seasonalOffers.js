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

export default SEASONAL_OFFERS;
