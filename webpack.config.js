const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "production",
  entry: {
    background: "./background.js",
    popup: "./popup.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new Dotenv()
  ]
};
