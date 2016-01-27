
$wecpackConfig        = module.exports = {};//　初始化对象
$wecpackConfig.entry　 =　'./app.js';// 入口
$wecpackConfig.output = {path:'./dist', filename: 'bundle.js'};//　输出
$wecpackConfig.module = { //
  loaders : [
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.vue$/, loader: 'vue' },
    { test: /\.js$/, loader: 'babel' },
  ]
}; 
