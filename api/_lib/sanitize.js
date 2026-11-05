const sanitizeHtml = require('sanitize-html');
const { imagekitUrl } = require('./render');

const IMAGE_SIZES = ['small', 'medium', 'large', 'full'];

// Every post passes through this before a visitor sees it, whatever was saved in
// Firestore. Only the formatting the editor can produce is allowed through.
function cleanPostHtml(html) {
  return sanitizeHtml(html || '', {
    allowedTags: [
      'p', 'h2', 'h3', 'strong', 'em', 'u', 's', 'code', 'pre', 'ul', 'ol', 'li',
      'blockquote', 'hr', 'br', 'a', 'img',
    ],
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'data-size', 'loading'],
      p: ['style'],
      h2: ['style'],
      h3: ['style'],
    },
    allowedStyles: {
      '*': { 'text-align': [/^(left|right|center|justify)$/] },
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    allowedSchemesByTag: { img: ['https'] },
    allowProtocolRelative: false,
    transformTags: {
      // The post title is the page's only h1.
      h1: 'h2',
      a: (tagName, attribs) => {
        const external = /^https?:/i.test(attribs.href || '');
        return {
          tagName,
          attribs: external
            ? { ...attribs, target: '_blank', rel: 'noopener noreferrer' }
            : { href: attribs.href },
        };
      },
      img: (tagName, attribs) => ({
        tagName,
        attribs: {
          src: imagekitUrl(attribs.src, 'w-1200,f-auto'),
          alt: attribs.alt || '',
          'data-size': IMAGE_SIZES.includes(attribs['data-size'])
            ? attribs['data-size']
            : 'full',
          loading: 'lazy',
        },
      }),
    },
  });
}

module.exports = { cleanPostHtml };
