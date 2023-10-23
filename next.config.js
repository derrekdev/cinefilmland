/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "image.tmdb.org",
  //       port: "",
  //       pathname: "/**/**",
  //     },
  //   ],
  // },

  env: {
    API_URL: process.env.API_URL,
    API_VERSION: process.env.API_VERSION,
    API_TOKEN: process.env.API_TOKEN,
  },
};

module.exports = nextConfig;
