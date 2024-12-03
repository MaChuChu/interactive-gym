import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production'
      ? '/interactive-gym'
      : '',
  },
  output: 'export',
};

export default nextConfig;