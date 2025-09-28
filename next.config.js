/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  
  // No base path needed for user/org GitHub Pages (start-source.github.io)
  basePath: '',
  assetPrefix: '',
  
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
  },
};

module.exports = nextConfig;
