/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,

    env: {
        BASE_URL: process.env.BASE_URL,
        OPEN_AI_KEY: process.env.OPEN_AI_KEY,
        WEBSOCKET_URL: process.env.WEBSOCKET_URL,
    },
}

module.exports = nextConfig
