import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SITE_NAME = 'Popular Nexa';
const DEFAULT_TITLE =
  'Popular Nexa - Premium Maruti Suzuki Car Dealership in Hyderabad';
const DEFAULT_DESCRIPTION =
  'Discover the latest Maruti Suzuki Nexa models at Popular Nexa, your trusted car dealership in Hyderabad. Explore our range of premium vehicles, enjoy exceptional service, and find exclusive offers.';
const DEFAULT_KEYWORDS =
  'Popular Nexa, Nexa cars, Maruti Suzuki Nexa, Nexa dealership Hyderabad, premium cars Hyderabad';
const DEFAULT_URL = 'https://saboonexa.in/';
const DEFAULT_IMAGE =
  'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg';

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  author = 'Popular Nexa',
  url = DEFAULT_URL,
  canonical,
  image = DEFAULT_IMAGE,
  imageAlt,
  imageWidth = '1200',
  imageHeight = '630',
  noindex = false,
  robots,
}) => {
  const resolvedCanonical = canonical || url;
  const resolvedRobots =
    robots ||
    (noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name='author' content={author} />
      <meta name='robots' content={resolvedRobots} />
      <link rel='canonical' href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:locale' content='en_IN' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:width' content={imageWidth} />
      <meta property='og:image:height' content={imageHeight} />
      <meta property='og:image:alt' content={imageAlt || title} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@saboonexa' />
      <meta name='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={imageAlt || title} />
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  url: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  author: PropTypes.string,
  noindex: PropTypes.bool,
  robots: PropTypes.string,
};

export default Seo;
