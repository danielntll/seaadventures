/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/variables/colors.scss";
      @import "./src/styles/variables/fonts.scss";
      @import "./src/styles/variables/animations.scss";
      @import "./src/styles/components/badge.scss";
      @import "./src/styles/components/button.scss";
      @import "./src/styles/components/container.scss";
      @import "./src/styles/components/borders.scss";
      @import "./src/styles/components/gaps.scss";
      @import "./src/styles/components/paddings.scss";
      @import "./src/styles/components/margins.scss";
    `,
  },
};

module.exports = nextConfig;
