const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  mode: "production",
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    ]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "css/epy.css"
    // }),
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
    new MiniCssExtractPlugin({
      filename: "css/epy.css",
      chunkFilename: "css/[id].min.css"
    })
    // new CopyWebpackPlugin([{ from: "epy.css", to: "css/epy.css" }])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: (resourcePath, context) => {
          //       return path.relative(path.dirname(resourcePath), context) + "/";
          //     }
          //   }
          // },
          MiniCssExtractPlugin.loader,
          "css-loader?url=false",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          outputPath: "/assets/icons"
        }
      }
    ]
  }
};
