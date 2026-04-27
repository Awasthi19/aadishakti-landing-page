import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // If deploying to username.github.io/repo-name (not root domain), uncomment:
  // basePath: "/your-repo-name",
  // assetPrefix: "/your-repo-name/",
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
};

export default nextConfig;
