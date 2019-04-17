const path = require('path');
var webpack = require("webpack") //引入webpack插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: { // 检测代码变化并自动重新编译并自动刷新浏览器
    contentBase: path.resolve(__dirname, 'dist') // 设置静态资源的根目录
},
  module: {
    rules: [
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:"css-loader"
        })
      },
      {
        test: /\.scss$/,
        use:ExtractTextPlugin.extract({
            fallback:"style-loader",
            use:[{
                loader:"css-loader"
            },{
                loader:"sass-loader"
            }]
        })
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/index.css")
]
};