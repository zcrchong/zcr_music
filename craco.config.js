const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
    },
  },
};
