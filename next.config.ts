import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/interactive-gym' : '',
  assetPrefix: isProd ? '/interactive-gym' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


export default nextConfig;
