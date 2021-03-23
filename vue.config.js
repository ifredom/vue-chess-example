const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const webpack = require("webpack");
module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  lintOnSave: false,
  devServer: {
    port: 8367,
    https: false,
    open: false, // 配置自动启动浏览器
    disableHostCheck: true,
  },
  pwa: {
    name: "ifredom PWA App",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/registerServiceWorker.js",
      // ...other Workbox options...
    },
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
          }),
        ],
      },
    },
  },
  chainWebpack: config => {
    // 使用cdn文件，忽略打包。会导致调试工具无法开启
    // config.externals({
    //   "jquery": "$",
    //   "jquery": "jQuery",
    //   "chess": "chess",
    //   "Chessboard": "Chessboard",
    // });
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
        "window.Chessboard": "Chessboard",
      }),
    ],
  },
};
