//Ensure html-webpack-plugin is pre-installed via npm.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
// const OBJLoader = require('three-obj-loader');
// const THREE = require('three');
// OBJLoader(THREE); 

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimise: true}
          }
        ]

      },
      {
        test: /\.(obj|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
                outputPath: './docs/static'
            }
          }
        ]
      },
      // {
      //   test: /\.obj$/,
      //   loader: 'three-obj-loader'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
  ],
  mode: 'development'
};