/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.weatherapi.com",
      port: "",
    },
  ],
};

export default nextConfig;
