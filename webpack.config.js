const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },

  module: {
    
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      
      {
        test: /\.(jpg|png|gif|woff|mp4|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          }
        ]
      },
      
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      
      title: "plugins",
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/plane_favicon.ico")
    })
  ]
};
