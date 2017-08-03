// Note: You must restart bin/webpack-dev-server for changes to take effect

/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */


const webpack = require('webpack')
// const path = require('path')
const { basename, dirname, join, relative, resolve } = require('path')
const { sync } = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const extname = require('path-complete-extname')
const { env, settings, output, loadersDir } = require('./configuration.js')

const extensionGlob = `**/*{${settings.extensions.join(',')}}*`
const entryPath = join(settings.source_path, settings.source_entry_path)
const packPaths = sync(join(entryPath, extensionGlob))

var PrerenderSpaPlugin = require('prerender-spa-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

// console.log(path.join(__dirname, 'dist'))
// console.log(join(output.path, 'dist'))
module.exports = {
  entry: packPaths.reduce(
    (map, entry) => {
      const localMap = map
      const namespace = relative(join(entryPath), dirname(entry))
      localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry)
      return localMap
    }, {}
  ),

  output: {
    filename: '[name].js',
    path: output.path,
    publicPath: output.publicPath
  },

  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'app/javascript/packs'
    }]),
    new PrerenderSpaPlugin(
      // path.join(__dirname, 'dist'),
      join(output.path, 'dist'),
      // 'app/javascript/packs/static',
      [ '/', '/products/1', '/products/2', '/products/3']
    ),
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin(env.NODE_ENV === 'production' ? '[name]-[hash].css' : '[name].css'),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true
    })
  ],

  resolve: {
    extensions: settings.extensions,
    modules: [
      resolve(settings.source_path),
      'node_modules'
    ]
  },

  resolveLoader: {
    modules: ['node_modules']
  }
}
