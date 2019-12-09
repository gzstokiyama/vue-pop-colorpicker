var webpack = require('webpack')
var merge = require('webpack-merge')
var releaseConfig = require('./webpack.release.conf')

module.exports = merge(releaseConfig, {
  output: {
    filename: './dist/[name].min.js'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: false,
        warnings: false
      },
      sourceMap: false
    })
  ]
})
