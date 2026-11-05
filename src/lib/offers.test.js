import { getOfferStatus, validateBanner, validateOffer } from './offers';

const TODAY = '2026-11-05';
const base = { active: true, startsAt: '', endsAt: '' };

describe('getOfferStatus', () => {
  test('is live with no dates', () => {
    expect(getOfferStatus(base, TODAY)).toBe('live');
  });
  test('is live on its first and last day', () => {
    expect(getOfferStatus({ ...base, startsAt: TODAY }, TODAY)).toBe('live');
    expect(getOfferStatus({ ...base, endsAt: TODAY }, TODAY)).toBe('live');
  });
  test('is scheduled before its start date', () => {
    expect(getOfferStatus({ ...base, startsAt: '2026-11-06' }, TODAY)).toBe('scheduled');
  });
  test('is expired after its end date', () => {
    expect(getOfferStatus({ ...base, endsAt: '2026-11-04' }, TODAY)).toBe('expired');
  });
  test('turning it off wins over its dates', () => {
    expect(getOfferStatus({ ...base, active: false }, TODAY)).toBe('hidden');
  });
});

const offer = {
  carName: 'Swift',
  amount: '80,000',
  image: 'https://ik.imagekit.io/x/swift.png',
  imageAlt: 'Red Swift',
  link: '/maruti-swift-car-on-road-price-in-hyderabad',
  startsAt: '',
  endsAt: '',
};

describe('validateOffer', () => {
  test('accepts a complete offer', () => {
    expect(validateOffer(offer)).toEqual([]);
  });
  test('rejects a non-numeric amount', () => {
    expect(validateOffer({ ...offer, amount: 'Rs 80k' })).toHaveLength(1);
  });
  test('requires an image and its description', () => {
    expect(validateOffer({ ...offer, image: '' })[0]).toMatch('car image');
    expect(validateOffer({ ...offer, imageAlt: ' ' })[0]).toMatch('description');
  });
  test('rejects an unsafe link', () => {
    expect(validateOffer({ ...offer, link: 'javascript:alert(1)' })[0]).toMatch('link');
  });
  test('rejects an end date before the start date', () => {
    expect(
      validateOffer({ ...offer, startsAt: '2026-11-10', endsAt: '2026-11-01' })[0]
    ).toMatch('end date');
  });
});

describe('validateBanner', () => {
  const banner = {
    desktopImage: 'https://ik.imagekit.io/x/d.webp',
    mobileImage: 'https://ik.imagekit.io/x/m.webp',
    alt: 'Festive offers',
    link: '',
    startsAt: '',
    endsAt: '',
  };
  test('accepts a banner with no link', () => {
    expect(validateBanner(banner)).toEqual([]);
  });
  test('requires both image sizes', () => {
    expect(validateBanner({ ...banner, mobileImage: '' })[0]).toMatch('mobile');
    expect(validateBanner({ ...banner, desktopImage: '' })[0]).toMatch('desktop');
  });
});
