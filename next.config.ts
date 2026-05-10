import type { NextConfig } from "next";

const nextConfig = {
  allowedDevOrigins: [
    '127.0.0.1',      // existing dev host
    '192.168.100.13', // new origin added
  ],
};

module.exports = nextConfig;
