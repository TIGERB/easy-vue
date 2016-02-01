
var webpack          = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig    = module.exports = {};//　init object

// input
webpackConfig.entry　 =　{
  app:[
    './app.js',

    './bower_components/ratchet/dist/css/ratchet.css',
    './bower_components/font-awesome/css/font-awesome.css',
    // './bower_components/fastclick/lib/fastclick.js'
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
      test: /\.(eot(|\?v=4.5.0)|woff(|\?v=4.5.0)|woff2(|\?v=4.5.0)|ttf(|\?v=4.5.0)|svg(|\?v=4.5.0))$/, 
      loader: 'file'
    },
    { 
      test: /\.json/, 
      loader: 'json'
    },
  ]
};





