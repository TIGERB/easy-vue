var Vue 　　　   = require('vue'); //引入vue
var VueRouter = require('vue-router'); //引入vue-router
var App 　　　   = require('./app.vue');// 引入根模块

Vue.use(VueRouter);//报错　Please install the Router with Vue.use() before creating an instance
var router        = new VueRouter();//初始化
var componentPath = './src/components/';//组件路径

router.map({
  '/home':{
    name:'home',
    component:require(componentPath+'bar.vue')
  },
  '/login':{
    name:'login',
    component:require(componentPath+'card.vue')
  }
});

router.start(App,'#app');


