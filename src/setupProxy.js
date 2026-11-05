// Used only by `npm start`, and never included in the built site. Runs the Vercel
// functions in api/ on the local dev server, using the values in .env.
const path = require('path');

const API_DIR = path.join(__dirname, '..', 'api');

module.exports = function setupLocalApi(app) {
  const mount = (route, file) => {
    app.all(route, (req, res) => require(path.join(API_DIR, file))(req, res));
  };
  mount('/api/posts', 'posts.js');
  mount('/api/imagekit-auth', 'imagekit-auth.js');
  mount('/api/offers', 'offers.js');
  mount('/api/publish-seo', 'publish-seo.js');
  mount('/api/blog-sitemap', 'blog-sitemap.js');
  mount('/blog-sitemap.xml', 'blog-sitemap.js');
};
