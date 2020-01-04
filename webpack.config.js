const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/index.js",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/epy.css"
    }),
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }])
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              }
            }
          },
          "css-loader",
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
