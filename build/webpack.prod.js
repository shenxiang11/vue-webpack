const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const prodConfig = {
  devtool: 'cheap-module-source-map'
}

module.exports = merge(baseConfig, prodConfig)