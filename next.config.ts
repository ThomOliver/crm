import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },
      {
        source: "/recover-password",
        destination: "/auth/recoverPassword",
      },
      {
        source: "/register",
        destination: "/auth/register",
      },
      {
        source: "/dashboard",
        destination: "/protected/dashboard",
      },
      {
        source: "/:path*",
        destination: "/protected/:path*",
      },
    ];
  },
};

export default nextConfig;
