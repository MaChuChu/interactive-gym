
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/interactive-gym' : '',
  assetPrefix: isProd ? '/interactive-gym/' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/interactive-gym' : '',
  },
};
