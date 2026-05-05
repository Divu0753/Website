import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

const repoName = "Website"

export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "export",
    basePath: isDev ? "" : `/${repoName}`,
    assetPrefix: isDev ? "" : `/${repoName}/`,
    trailingSlash: true,
    typescript: {
      ignoreBuildErrors: false,
    },
    images: {
      unoptimized: true,
    },
  }

  return nextConfig
}
