const withNextIntl = require('next-intl/plugin')();

// Static export for GitHub Pages: no middleware, so / redirects in src/app/page.tsx
module.exports = withNextIntl({
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
});
