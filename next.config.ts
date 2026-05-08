import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Required for static export
    },
    compress: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: false,
};

export default nextConfig;
