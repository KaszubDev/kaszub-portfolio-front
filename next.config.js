const {
    withHydrationOverlay,
  } = require("@builder.io/react-hydration-overlay/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    }
}

module.exports = withHydrationOverlay({
    appRootSelector: "main",
})(nextConfig)