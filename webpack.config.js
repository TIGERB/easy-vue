var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');// separate css
var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig      = module.exports = {};//　init object
var production        = process.env.NODE_ENV === 'production';// production environment

// input
webpackConfig.entry　 =　{
  app:[
    // main
    './src/app.js',
  ],
};

webpackConfig.output = {
  path: path.resolve(__dirname, 'dist'),
  publicPath: '/',
  filename: production? '[name].[hash].js': '[name].js'
};//　output

//loader
webpackConfig.module = {
    rules : [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
            publicPath: path.resolve(__dirname, 'dist')
        })
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
       },
       {
         test: /\.js$/,
         loader: 'babel-loader',
         exclude: /node_modules/
        },
        {
          test: /\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
         },
         {
           test: /\.(png|jpg|gif)$/,
           use: [
             {
               loader: 'file-loader'
             }
           ]
          },
  ]
};

webpackConfig.plugins = [
  // make index.html
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  // separate css file
  new ExtractTextPlugin({
    　filename: production? 'app.[hash].css': 'app.css',
    // 　disable: false,
    // 　allChunks: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new CopyWebpackPlugin([
    { from: 'src/mock/api.json', to: 'mock' },
    { context: 'src/images', from: '*', to: path.join(__dirname, 'dist', 'images') }
  ]),
];

if (!production) {
  webpackConfig.devServer = {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
  }
}
