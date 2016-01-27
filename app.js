var Vue 　　　   = require('vue'); //引入vue
var VueRouter = require('vue-router'); //引入vue-router
var App 　　　   = require('./app.vue');// 引入根模块

Vue.use(VueRouter);//报错　Please install the Router with Vue.use() before creating an instance
var router = new VueRouter();

router.map({
  '/home':{
    component:App
  }
});

router.start(App,'#app');

