var config = require("./webpack.config.js");
config.plugins = [new webpack.HotModuleReplacementPlugin()];
config.entry.app.unshift("webpack-dev-server/client?http://localhost:9999", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true
});
server.listen(9999);
