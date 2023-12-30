/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.freepik.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "localhost",
                port: "",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
