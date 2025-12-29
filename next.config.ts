import type { NextConfig } from "next";

const repoName = "PersonalWebsite";

const nextConfig: NextConfig = {
  // Required for GitHub Pages (static hosting)
  output: "export",

  // Required because this is a project repo (not username.github.io)
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // Required to avoid Next/Image issues on GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
