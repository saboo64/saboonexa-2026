import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Offers from './Offers';
import { defaultOffers } from '../../constants/defaultOffers';

jest.mock('../../components/Header/Header', () => () => <div>header</div>);
jest.mock('../../components/utils/OffersPopup', () => () => null);
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div>{children}</div>,
  SwiperSlide: ({ children }) => <div>{children}</div>,
}));
jest.mock('swiper', () => ({ Autoplay: {}, Navigation: {} }));
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });

const respondWith = (ok, body) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok, status: ok ? 200 : 500, json: () => Promise.resolve(body) })
  );
};

const renderPage = () =>
  render(
    <MemoryRouter>
      <Offers />
    </MemoryRouter>
  );

const offer = {
  id: 'a',
  carName: 'Test Car',
  amount: '12,345',
  note: 'Exchange only',
  image: 'https://example.com/a.webp',
  imageAlt: 'Test car',
  link: '/about',
  endsAt: '2099-01-31',
};

describe('Offers page', () => {
  beforeEach(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterEach(() => jest.restoreAllMocks());

  it('shows no prices if the offers API fails', async () => {
    respondWith(false, {});
    const { container } = renderPage();
    await screen.findByText('We couldn’t load today’s offers.');
    expect(screen.getByRole('link', { name: 'Contact us' })).toBeInTheDocument();
    expect(container.textContent).not.toContain('₹');
    defaultOffers.forEach(({ amount }) => {
      expect(container.textContent).not.toContain(amount);
    });
  });

  it('uses the built-in offers and banner before anything is set up', async () => {
    respondWith(true, { offers: null, banners: null });
    renderPage();
    await screen.findAllByText(`${defaultOffers[0].amount}*`, { exact: false });
    expect(screen.getAllByRole('img', { name: /Popular Nexa, Hyderabad/ }).length).toBe(2);
  });

  it('shows dashboard offers, not the built-in ones', async () => {
    respondWith(true, {
      offers: [offer],
      banners: [{ id: 'b', alt: 'New banner', desktopImage: 'd.webp', mobileImage: 'm.webp', link: '' }],
    });
    const { container } = renderPage();
    await screen.findByText('Exchange only');
    expect(container.textContent).toContain('12,345');
    expect(screen.getByText(/Valid till/)).toBeInTheDocument();
    expect(screen.getAllByAltText('New banner')).toHaveLength(2);
    expect(container.textContent).not.toContain(defaultOffers[0].amount);
  });

  it('shows a contact message when no offers are live', async () => {
    respondWith(true, { offers: [], banners: [] });
    renderPage();
    await waitFor(() =>
      expect(screen.getByText('New offers are coming soon.')).toBeInTheDocument()
    );
  });
});
