const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    hotOnly: true,
    open: true,
    port: 9191
  }
}

module.exports = merge(baseConfig, devConfig)