module.exports = {
    reactStrictMode: true,
    transpilePackages: ["ui"],
    images: {
        domains: ["ui-avatars.com", "annabel.imgix.net"]
    },
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        BACKEND_API_SECRET: process.env.BACKEND_API_SECRET
    }
};
