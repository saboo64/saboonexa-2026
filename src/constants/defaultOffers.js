import { offer_products } from './index';

// Shown until the first offers are saved in the dashboard, and copied there by its
// "Import current offers" button. After that, the dashboard is the source of truth.
export const defaultOffers = offer_products.map((item) => ({
  carName: item.name.trim(),
  amount: item.price,
  note: item.desc || '',
  image: item.img,
  link: item.explore,
}));

const normalize = (name) => (name || '').toLowerCase().replace(/[^a-z0-9]/g, '');

// A logo is a design detail, not a price, so it can stay in the code. A new car
// with no logo here shows its name instead.
export const logoForCar = (carName) => {
  const match = offer_products.find(
    (item) => normalize(item.name) === normalize(carName)
  );
  return match ? match.logo : '';
};
