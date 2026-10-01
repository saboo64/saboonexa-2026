export const isSafariBrowser = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Safari can't play webm, so it gets a separate source with a matching mime type.
export const getVideoSource = (defaultSrc, safariSrc) => {
  const safari = isSafariBrowser();
  return {
    src: safari ? safariSrc : defaultSrc,
    type: safari ? 'video/quicktime' : 'video/mp4',
  };
};
