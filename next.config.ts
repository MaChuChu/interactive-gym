
const nextConfig = {
  env: {
    NEXT_PUBLIC_SCULPT_GLB: process.env.NODE_ENV === 'production'
      ? '/interactive-gym/sculpt.glb' // production path
      : '/sculpt.glb', // local development path
  },
};

export default nextConfig;
