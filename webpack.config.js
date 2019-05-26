var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
// var extractTextPlugin = require('extract-text-webpack-plugin'); // separate css
var miniCssExtractPlugin = require('mini-css-extract-plugin')
var copyWebpackPlugin = require('copy-webpack-plugin');
var vueLoaderPlugin = require('vue-loader/lib/plugin')

var webpackConfig = module.exports = {}; // init object
var isProduction = process.env.NODE_ENV === 'production'; // production environment

// input
webpackConfig.entry = {
  app: './src/app.js', // main
};

// output
webpackConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: isProduction ? '[name].[hash].js' : '[name].js',
};

// loader
webpackConfig.module = {
  rules: [
    {
      test: /\.css$/,
      use: [
        miniCssExtractPlugin.loader,
        "css-loader"
      ],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
      loader: 'file-loader',
      options: { name: 'fonts/[name].[ext]' },
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader',
    },
  ]
};

webpackConfig.plugins = [
  // make index.html
  new htmlWebpackPlugin({
    template: './src/index.html'
  }),
  // separate css file
  new miniCssExtractPlugin({
    filename: isProduction ? 'app.[hash].css' : 'app.css',
    // disable: false,
    // allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new copyWebpackPlugin([
    { from: 'src/mock/api.json', to: 'mock' },
    { context: 'src/images', from: '*', to: path.join(__dirname, 'dist', 'images') }
  ]),
  new vueLoaderPlugin()
];

if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
  };
}
