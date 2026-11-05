import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import seoOverrides from '../../generated/seoOverrides.json';
import { applySeasonalPlaceholders } from '../../constants/seasonalOffers';

// Applies changes from the dashboard's SEO manager to any page, however its own tags
// are set. It must render after <Routes>, because the last react-helmet instance
// wins. In App.js it's keyed by path, so it stays last when moving between pages.
// The attributes match those in seo.js (twitter: tags use name=), so tags are
// replaced rather than duplicated.
const PageSeoOverride = () => {
  const { pathname } = useLocation();
  const override = seoOverrides[pathname.replace(/(.)\/$/, '$1')];
  if (!override) return null;
  const title = applySeasonalPlaceholders(override.title);
  const description = applySeasonalPlaceholders(override.description);
  const keywords = applySeasonalPlaceholders(override.keywords);
  const { ogImage } = override;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta name='title' content={title} />}
      {title && <meta property='og:title' content={title} />}
      {title && <meta property='og:image:alt' content={title} />}
      {title && <meta name='twitter:title' content={title} />}
      {title && <meta name='twitter:image:alt' content={title} />}
      {description && <meta name='description' content={description} />}
      {description && <meta property='og:description' content={description} />}
      {description && <meta name='twitter:description' content={description} />}
      {keywords && <meta name='keywords' content={keywords} />}
      {ogImage && <meta property='og:image' content={ogImage} />}
      {ogImage && <meta property='og:image:secure_url' content={ogImage} />}
      {ogImage && <meta name='twitter:image' content={ogImage} />}
    </Helmet>
  );
};

export default PageSeoOverride;
