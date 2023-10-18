const path = require('path');
//Ensure html-webpack-plugin is pre-installed via npm.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const OBJLoader = require('three-obj-loader');
// const THREE = require('three');
// OBJLoader(THREE); 

module.exports = {
  devServer: { 
      // 服务器将从哪个目录去查找内容文件
      static: {
        directory: path.join(__dirname, 'dist'), // 设置静态文件目录
      },
      // 服务端口
      port: 8000 
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
    new CopyPlugin({
      patterns: [
        { from: "static", to: "static" },
      ],
    }),
  ],
  mode: 'development'
};