
var webpack          = require('webpack');
var wecpackConfig    = module.exports = {};//　init object

// input
wecpackConfig.entry　 =　{
  app:[
    './app.js',

    './bower_components/ratchet/dist/css/ratchet.css',
    './bower_components/font-awesome/css/font-awesome.css'
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
      test: /\.(eot(|\?v=4.5.0)|woff(|\?v=4.5.0)|woff2(|\?v=4.5.0)|ttf(|\?v=4.5.0)|svg(|\?v=4.5.0))$/, 
      loader: 'file'
    },
  ]
}; 


