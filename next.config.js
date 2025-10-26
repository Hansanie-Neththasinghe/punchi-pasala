/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'punchi-pasala';

module.exports = {
  reactStrictMode: true,
  output: 'export',                 // next build will create ./out
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}` : '',
};
