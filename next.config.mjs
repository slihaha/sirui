/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['assets.aceternity.com'],
    },
    webpack: (config, { isServer }) => {
        // Apply the SVGR loader to SVG files
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
