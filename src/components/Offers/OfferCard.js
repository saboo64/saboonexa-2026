import React from 'react';
import { Link } from 'react-router-dom';
import { imagekitUrl } from '../../lib/imagekit';
import { logoForCar } from '../../constants/defaultOffers';

const formatValidTill = (day) =>
  new Date(`${day}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

// Offer links can be pages on this site or full web addresses.
const OfferLink = ({ to, className, children }) => {
  if (to && to.startsWith('/')) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to || undefined} className={className}>
      {children}
    </a>
  );
};

// One offer. Shared by the public page and the dashboard's live preview, so staff
// see exactly what visitors will see.
const OfferCard = ({ offer, onGrab, imagePlaceholder }) => {
  const logo = logoForCar(offer.carName);
  return (
    <div className='relative flex flex-col overflow-hidden duration-500 border rounded shadow-lg hover:scale-95'>
      <p className='absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-[#ec1b23] top-3 -right-7 w-28 '>
        <span className='animate-pulse'>Offer</span>
      </p>

      <div className='flex-auto '>
        {offer.image ? (
          <OfferLink to={offer.link}>
            <img
              src={imagekitUrl(offer.image, 'w-700,f-auto')}
              alt={offer.imageAlt || offer.carName}
              className='mx-auto'
            />
          </OfferLink>
        ) : (
          imagePlaceholder
        )}
      </div>
      <div className='flex-auto bg-white'>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex items-center justify-between gap-3 px-5 pt-5 pb-2 border-t'>
            {logo ? (
              <img src={logo} alt={offer.carName} className='min-w-0' />
            ) : (
              <p className='text-lg font-semibold'>{offer.carName}</p>
            )}
            <div className='text-right'>
              Save up to
              <div className='text-xl font-semibold sm:text-2xl whitespace-nowrap'>
                <span className='text-lg'>₹</span> {offer.amount}*
              </div>
              {offer.note && <p className='text-xs'>{offer.note}</p>}
              {offer.endsAt && (
                <p className='text-xs text-gray-500'>
                  Valid till {formatValidTill(offer.endsAt)}
                </p>
              )}
            </div>
          </div>

          <div className='flex items-center justify-center gap-4 pb-2 mx-4 mb-6'>
            <OfferLink
              to={offer.link}
              className='w-full p-2 text-sm text-center uppercase border border-gray-800 rounded '
            >
              Explore
            </OfferLink>
            <button
              type='button'
              onClick={onGrab}
              aria-label={`Grab the offer on ${offer.carName}`}
              className='w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black'
            >
              Grab the offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
