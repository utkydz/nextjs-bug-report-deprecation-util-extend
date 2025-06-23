import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/api/get-postman-echo",
      destination: "https://postman-echo.com/get",
    },
  ],
};

export default nextConfig;
