const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/sanctum/:path*",
        destination: "http://nginx/sanctum/:path*",
      },
      {
        source: "/login",
        destination: "http://nginx/login",
      },
      {
        source: "/logout",
        destination: "http://nginx/logout",
      },
      {
        source: "/api/:path*",
        destination: "http://nginx/api/:path*",
      },
    ]
  },
}

module.exports = nextConfig
