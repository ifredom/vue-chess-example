const path = require("path");
const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

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
  chainWebpack: (config) => {
    // 使用cdn文件，忽略打包。会导致调试工具无法开启
    // config.externals({
    //   "jquery": "$",
    //   "jquery": "jQuery",
    //   "chess": "chess",
    //   "Chessboard": "Chessboard",
    // });
    // 添加别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@com", resolve("src/components"));

    // 兼容老版本浏览器
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();

        // 处理所有svg图片
        config.module.rules.delete("svg"); // 重点:删除默认配置中处理svg,
        config.module
          .rule("svg-sprite-loader")
          .test(/\.svg$/)
          .include.add(resolve("src/icons")) // 处理svg目录
          .end()
          .use("svg-sprite-loader")
          .loader("svg-sprite-loader")
          .options({
            symbolId: "icon-[name]"
          });
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
  },
};
