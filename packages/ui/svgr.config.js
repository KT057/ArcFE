module.exports = {
  typescript: true,
  jsxRuntime: "automatic",
  template: require("./svgr/templates/template.tsx"),
  indexTemplate: require("./svgr/templates/index-template.tsx"),
  dimensions: false,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      }
    ]
  }
};
