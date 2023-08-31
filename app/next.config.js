/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    async rewrites() {
     return [

       {
         source: "/api/:path*",
         destination: `${process.env.API_URL}/:path*`,
       },
     ];
    },
}

module.exports = nextConfig