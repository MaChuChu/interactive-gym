const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/interactive-gym' : '',
  assetPrefix: '/interactive-gym',
  publicRuntimeConfig: {
    basePath: '/interactive-gym',
  },
  env: {
    NEXT_PUBLIC_SCULPT_GLB: process.env.NODE_ENV === 'production'
      ? '/interactive-gym/Sculpt.glb'
      : '/Sculpt.glb',
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
