const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/interactive-gym' : '',
  assetPrefix: '/interactive-gym',
  publicRuntimeConfig: {
    basePath: '/interactive-gym',
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
