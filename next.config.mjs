/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Custom domain deployment serves from root, so keep asset paths root-relative.
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
