/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true, // Speeds up CSS rendering
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production", // Removes console logs in production
    },
    images: {
        formats: ["image/avif", "image/webp"], // Serve optimized images
        minimumCacheTTL: 31536000, // Cache images for 1 year
    },
    async headers() {
        return [
            {
                source: "/_next/static/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable", // Cache static assets for 1 year
                    },
                ],
            },
            {
                source: "/_next/image",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=86400, stale-while-revalidate", // Cache dynamic images for 1 day
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
