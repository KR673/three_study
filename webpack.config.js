//Ensure html-webpack-plugin is pre-installed via npm.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OBJLoader = require('three-obj-loader');
// const THREE = require('three');
// OBJLoader(THREE); 

module.exports = {
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
                outputPath: 'static'
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