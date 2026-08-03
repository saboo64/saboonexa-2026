import { Helmet } from 'react-helmet';

const SITE_URL = 'https://saboonexa.in';

/**
 * BreadcrumbList JSON-LD. `items` is an ordered array of
 * { name, path } where `path` is site-relative (e.g. "/about").
 * The current/last item does not need a path.
 */
export const BreadcrumbSchema = ({ items = [] }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(data)}</script>
    </Helmet>
  );
};

/**
 * Car / Vehicle structured data (schema.org Car, a Product/Vehicle
 * subtype). Only include fields backed by real data — no fabricated
 * ratings or reviews.
 */
export const VehicleSchema = ({
  name,
  description,
  image,
  url,
  priceINR,
  fuelType,
  seatingCapacity,
  vehicleTransmission,
  vehicleEngine,
  modelDate,
  brochureUrl,
}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Car',
    name,
    description,
    image: Array.isArray(image) ? image : [image],
    url,
    brand: {
      '@type': 'Brand',
      name: 'Maruti Suzuki',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Maruti Suzuki India Limited',
    },
    ...(fuelType ? { fuelType } : {}),
    ...(seatingCapacity ? { seatingCapacity } : {}),
    ...(vehicleTransmission ? { vehicleTransmission } : {}),
    ...(vehicleEngine
      ? { vehicleEngine: { '@type': 'EngineSpecification', name: vehicleEngine } }
      : {}),
    ...(modelDate ? { modelDate } : {}),
    ...(brochureUrl ? { hasBrochure: brochureUrl } : {}),
    ...(priceINR
      ? {
          offers: {
            '@type': 'Offer',
            url,
            priceCurrency: 'INR',
            price: String(priceINR).replace(/[^0-9.]/g, ''),
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
              '@type': 'AutoDealer',
              name: 'Popular Nexa',
              url: SITE_URL,
            },
          },
        }
      : {}),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(data)}</script>
    </Helmet>
  );
};

/**
 * Generic FAQPage schema. `faqs` is [{ question, answer }].
 */
export const FaqSchema = ({ faqs = [] }) => {
  if (!faqs.length) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type='application/ld+json'>{JSON.stringify(data)}</script>
    </Helmet>
  );
};
