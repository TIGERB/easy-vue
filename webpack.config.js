var webpack           = require('webpack');
var webpackDevServer  = require('webpack-dev-server');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig     = module.exports = {};//　init object

// input
webpackConfig.entry　 =　{
  app:[
    // vender
    './bower_components/ratchet/dist/css/ratchet.css',
    './bower_components/font-awesome/css/font-awesome.css',

    // main
    './app.js',
  ],
};

webpackConfig.output = {
  path:'./dist',
  publicPath:'./',
  filename: '[name].[hash].js'
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

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: 'easy-vue',
    filename: 'index.html',
    template: './index.template.html'
  })
];





