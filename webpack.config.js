const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: { 
      // 服务器将从哪个目录去查找内容文件
      static: {
        directory: path.join(__dirname, 'dist'), // 设置静态文件目录
      },
      // 服务端口
      port: 8000 
  }, 
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
    new CopyPlugin({
      patterns: [
        { from: "static", to: "static" },
      ],
    }),
  ],
  mode: 'development'
};