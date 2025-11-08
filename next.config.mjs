/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["ty-public-id8nxt.s3.amazonaws.com", "core.travelyolo.id8nxt.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ty-public-id8nxt.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'core.travelyolo.id8nxt.com',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: '@dhiwise/component-tagger/nextLoader',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
