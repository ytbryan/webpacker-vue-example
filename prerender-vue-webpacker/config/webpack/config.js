var path = require('path')
var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/app/javascript/packs/main.js'
    ]
  },
  output: {
    path: '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/public/packs/dist',
    // path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/app/javascript/packs/static',
    }]),
    new PrerenderSpaPlugin(
    '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/public/packs/dist',
      [ '/', '/products/1', '/products/2', '/products/3']
    )
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}


// var Path = require('path')
// var CopyWebpackPlugin = require('copy-webpack-plugin')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')

// // console.log(Path.join(__dirname, 'dist'))
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: {
//           loaders: {
//           }
//           // other vue-loader options go here
//         }
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]?[hash]'
//         }
//       }
//     ]
//   },
//   entry: {
//     app: [
//       'babel-polyfill',
//       '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/app/javascript/packs/vue_snipcart.js'
//     ]
//   },
//   output: {
//     path: '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/public/packs',
//     filename: '[name].js'
//   },
//   plugins: [
//     new CopyWebpackPlugin([{
//       from: '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/app/javascript/packs/static',
//       to: '.'
//     }]),
//     new PrerenderSpaPlugin(
//     '/Users/ytbryan/Desktop/webpacker-vue-examples/prerender-vue-webpacker/app/javascript/packs/',
//       [ '/', '/products/1', '/products/2', '/products/3']
//     )
//   ]
// }


// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }