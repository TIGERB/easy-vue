
var webpack          = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig    = module.exports = {};//　init object

// input
webpackConfig.entry　 =　{
  app:[
    './app.js',

    './bower_components/ratchet/dist/css/ratchet.css',
    './bower_components/font-awesome/css/font-awesome.css',
  ],
};

webpackConfig.output = {
  path:'./dist',
  publicPath:'./dist/',
  filename: '[name].js'
};//　output

//doc loader
webpackConfig.module = {
  loaders : [
    { 
      test: /\.css$/, 
      loader: 'style!css'
    },
    { 
      test: /\.vue$/, 
      loader: 'vue'
    },
    { test: /\.js$/, 
      loader: 'babel'
    },
    { 
      test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/, 
      loader: 'file'
    },
    { 
      test: /\.json/, 
      loader: 'json'
    },
  ]
};

// webpackConfig.plugins = [
//   new webpack.ProvidePlugin({
//     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
//   })
// ];





