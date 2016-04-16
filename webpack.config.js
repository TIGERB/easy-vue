
var webpack          = require('webpack');
var wecpackConfig    = module.exports = {};//　init object

// input
wecpackConfig.entry　 =　{
  app:[
    './app.js',

    './bower_components/ratchet/dist/css/ratchet.css',
    './bower_components/font-awesome/css/font-awesome.css',
  ],
};

wecpackConfig.output = {
  path:'./dist', 
  filename: '[name].js'
};//　output

//doc loader
wecpackConfig.module = {
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
  ]
};

// webpackConfig.plugins = [
//   new webpack.ProvidePlugin({
//     'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
//   })
// ];


