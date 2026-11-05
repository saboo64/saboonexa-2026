// Offer dates are calendar days in India, whatever timezone the browser is in.
export const todayInIndia = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata' }).format(new Date());

export function getOfferStatus(item, today = todayInIndia()) {
  if (!item.active) return 'hidden';
  if (item.endsAt && item.endsAt < today) return 'expired';
  if (item.startsAt && item.startsAt > today) return 'scheduled';
  return 'live';
}

const LINK_PATTERN = /^(\/|https:\/\/)/;

function validateDates(item, problems) {
  if (item.startsAt && item.endsAt && item.endsAt < item.startsAt) {
    problems.push('The end date must be on or after the start date.');
  }
}

export function validateOffer(offer) {
  const problems = [];
  if (!offer.carName.trim()) problems.push('Add the car name.');
  if (!/^\d[\d,]*$/.test(offer.amount.trim())) {
    problems.push('Enter the offer amount using numbers only, like 1,95,000.');
  }
  if (!offer.image) problems.push('Upload a car image.');
  if (offer.image && !offer.imageAlt.trim()) {
    problems.push('Add a description for the car image.');
  }
  if (!LINK_PATTERN.test(offer.link.trim())) {
    problems.push('The View link must start with / or https://.');
  }
  validateDates(offer, problems);
  return problems;
}

export function validateBanner(banner) {
  const problems = [];
  if (!banner.desktopImage) problems.push('Upload a desktop banner.');
  if (!banner.mobileImage) problems.push('Upload a mobile banner.');
  if (!banner.alt.trim()) problems.push('Add a description for the banner.');
  if (banner.link.trim() && !LINK_PATTERN.test(banner.link.trim())) {
    problems.push('The link must start with / or https://.');
  }
  validateDates(banner, problems);
  return problems;
}
