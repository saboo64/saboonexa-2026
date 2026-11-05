/** @jest-environment node */
const fs = require('fs');
const path = require('path');
const { renderPage } = require('../../api/_lib/render');
const { cleanPostHtml } = require('../../api/_lib/sanitize');

const seo = {
  title: 'A "quoted" title',
  description: 'About <cars>',
  canonical: 'https://www.saboonexa.in/blog/x',
  image: 'https://example.com/a.jpg',
};

// The same shape as the built public/index.html, including its loading image.
const shell = fs
  .readFileSync(path.join(__dirname, '..', '..', 'public', 'index.html'), 'utf8')
  .replace('%PUBLIC_URL%', '');

describe('renderPage', () => {
  const html = renderPage(shell, seo, '<main>Real content $& here</main>');

  it('replaces the loading image with the real content', () => {
    expect(html).toContain('<div id="root"><main>Real content $& here</main></div>');
    expect(html).not.toContain('id="loadingImage">');
  });

  it('keeps the rest of the shell, including its scripts', () => {
    expect(html).toContain('loadChat360Bot');
    expect(html).toContain('googletagmanager');
  });

  it('has exactly one title and escapes the tags', () => {
    expect(html.match(/<title>/g)).toHaveLength(1);
    expect(html).toContain('<title>A &quot;quoted&quot; title</title>');
    expect(html).toContain('content="About &lt;cars&gt;"');
  });

  it('uses the same twitter tag attributes as seo.js, to avoid duplicates', () => {
    expect(html).toContain('name="twitter:title"');
    expect(html).not.toContain('property="twitter:title"');
  });
});

describe('cleanPostHtml', () => {
  it('removes scripts and event handlers', () => {
    const clean = cleanPostHtml(
      '<p onclick="x()">Hi</p><script>alert(1)</script><img src="javascript:alert(1)">'
    );
    expect(clean).not.toMatch(/script|onclick|javascript/);
  });

  it('keeps editor formatting and allowed image sizes', () => {
    const clean = cleanPostHtml(
      '<h2 style="text-align:center">T</h2><img src="https://ik.imagekit.io/a/b.jpg" alt="d" data-size="medium">'
    );
    expect(clean).toContain('text-align:center');
    expect(clean).toContain('data-size="medium"');
    expect(clean).toContain('alt="d"');
  });

  it('opens outside links safely', () => {
    expect(cleanPostHtml('<a href="https://example.com">x</a>')).toContain(
      'rel="noopener noreferrer"'
    );
  });
});
