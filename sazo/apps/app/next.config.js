module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["ui-avatars.com", "annabel.imgix.net"]
    },
    transpilePackages: ["@sazo/ui", "@sazo/core", "@sazo/types"],
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
        BACKEND_API_SECRET: process.env.BACKEND_API_SECRET
    }
};
