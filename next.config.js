/** @type {import('next').NextConfig} */

const withOptimizedImages = require('next-optimized-images');

const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/studio/:path*'
      : '/studio/index.html',
};

// module.exports = {
//   reactStrictMode: true,
//   rewrites: () => [STUDIO_REWRITE],
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
// };

module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  removeOriginalExtension: false,
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3,
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
  // your config for other plugins or the general next.js here...
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io'],
  },
});
