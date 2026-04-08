import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.d20radio.com',
      },
      {
        protocol: "https",
        hostname: "lumiere-a.akamaihd.net",
      },
      {
        protocol: "https",
        hostname: "static0.cbrimages.com",
      },
      {
        protocol: "https",
        hostname: "media.cnn.com",
      },
      {
        protocol: "https",
        hostname: "cache.undercovertourist.com",
      },
      {
        protocol: "https",
        hostname: "media.vanityfair.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "static0.srcdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
      },
      {
        protocol: "https",
        hostname: "www.escapistmagazine.com",
      },
      {
        protocol: "https",
        hostname: "www.andrewliptak.com",
      },
    ],
  },
};

export default nextConfig;
