/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gdnxdajkbiogrrpypgwp.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-images/**",
      },
    ],
  },
};

export default nextConfig;
