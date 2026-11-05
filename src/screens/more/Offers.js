import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import OffersPopup from '../../components/utils/OffersPopup';
import OfferCard from '../../components/Offers/OfferCard';
import { defaultOffers } from '../../constants/defaultOffers';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import Seo from '../../components/SEO/seo';
import { getOffersSeo } from '../../constants/seo';

// The built-in banners. Webpack changes these filenames with every build, so they
// can't be saved in the database. They show until staff upload a banner.
const DEFAULT_BANNER = {
  id: 'built-in',
  alt: 'Maruti Suzuki Nexa offers at Popular Nexa, Hyderabad',
  desktopImage: require('../../assets/others/Website_Maruti_Suzuki_Nexa_October_Dasara_Offers_Festival_Special_Offers_Dussehra__Popular_RKS_Popular_Vehicle_Services.webp'),
  mobileImage: require('../../assets/others/WM_Maruti_Suzuki_Nexa_October_Dasara_Offers_Festival_Special_Offers_Dussehra__Popular_RKS_Popular_Vehicle_Services.webp'),
  link: '',
};

const BannerLink = ({ link, children }) => {
  if (!link) return children;
  return link.startsWith('/') ? (
    <Link to={link}>{children}</Link>
  ) : (
    <a href={link}>{children}</a>
  );
};

function Offers() {
  const [status, setStatus] = useState('loading');
  const [offers, setOffers] = useState([]);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    let active = true;
    fetch('/api/offers')
      .then((response) => {
        if (!response.ok) throw new Error(`status ${response.status}`);
        return response.json();
      })
      .then((data) => {
        if (!active) return;
        // null means nothing has been set up in the dashboard yet.
        setOffers(data.offers || defaultOffers);
        setBanners(data.banners || [DEFAULT_BANNER]);
        setStatus('ready');
      })
      .catch((err) => {
        // Old prices are never shown as a fallback, as they could be out of date.
        console.error('Could not load offers:', err);
        if (active) setStatus('error');
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <Seo
        {...getOffersSeo()}
        url='https://saboonexa.in/nexa-car-offers-in-hyderabad'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg'
      />

      <Header />
      <div className='pb-[67px] bg-black sm:pb-[120px] lg:pb-[140px]'></div>
      {banners.length > 0 && <Banners banners={banners} />}

      {status === 'loading' && (
        <p className='py-20 text-center text-gray-500'>Loading offers…</p>
      )}

      {(status === 'error' || (status === 'ready' && offers.length === 0)) && (
        <div className='px-5 py-16 text-center'>
          <p className='mb-3 text-xl font-semibold'>
            {status === 'error'
              ? 'We couldn’t load today’s offers.'
              : 'New offers are coming soon.'}
          </p>
          <p className='mb-6 text-gray-600'>
            Contact us for the latest offers on your Maruti Suzuki Nexa car.
          </p>
          <Link
            to='/contact-us'
            className='px-6 py-2 text-sm text-white uppercase bg-black border border-black rounded hover:bg-white hover:text-black'
          >
            Contact us
          </Link>
        </div>
      )}

      {status === 'ready' && offers.length > 0 && (
        <>
          <div className='py-10 space-y-3 text-center'>
            <p className='font-bold lg:text-3xl sm:text-xl'>
              SAVE WITH POPULAR NEXA OFFERS IN HYDERABAD INDIA
            </p>
            <p>
              Hurry and take advantage of these exciting offers, available for a
              limited time.
            </p>
          </div>
          <OfferProducts offers={offers} />
        </>
      )}
    </>
  );
}

const Banners = ({ banners }) => (
  <section className='bg-black'>
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      loop={banners.length > 1}
      speed={1000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      centeredSlides={true}
      navigation={banners.length > 1}
      modules={[Navigation, Autoplay]}
      className='select-none mySwiper2 '
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <BannerLink link={banner.link}>
            {/* Wrapped, because the site's Swiper CSS overrides `hidden` on images. */}
            <div className='hidden w-full sm:block'>
              <img src={banner.desktopImage} alt={banner.alt} className='w-full' />
            </div>
            <div className='w-full sm:hidden'>
              <img src={banner.mobileImage} alt={banner.alt} className='w-full' />
            </div>
          </BannerLink>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

const OfferProducts = ({ offers }) => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState('');

  return (
    <div className='container grid gap-4 px-5 pb-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id || offer.carName}
          offer={offer}
          onGrab={() => {
            setOpen(true);
            setModel(offer.carName);
          }}
        />
      ))}
      <OffersPopup
        open={open}
        setOpen={setOpen}
        model={model}
        title={'Grab the offer on '}
      />
    </div>
  );
};

export default Offers;
