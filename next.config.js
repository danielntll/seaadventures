/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/colors.scss";
      @import "./src/styles/variables/fonts.scss";
      @import "./src/styles/variables/animations.scss";
      @import "./src/styles/variables/borders.scss";
      @import "./src/styles/variables/gaps.scss";
      @import "./src/styles/variables/paddings.scss";
      @import "./src/styles/variables/margins.scss";
      @import "./src/styles/variables/heights.scss";
      @import "./src/styles/components/badge.scss";
      @import "./src/styles/components/button.scss";
      @import "./src/styles/components/container.scss";
    `,
  },
};

module.exports = nextConfig;
