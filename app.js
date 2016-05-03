var Vue 　　　   = require('vue'); // get vue
var VueRouter    = require('vue-router'); //get vue-router
var App 　　　   = require('./app.vue');// get root module

Vue.use(VueRouter);//error:　Please install the Router with Vue.use() before creating an instance
var router   	 = new VueRouter();//init
var viewPath 	 = './src/views/';//component src

router.map({
  '/home':{
    name:'home',
    component:require(viewPath+'home.vue')
  },
  '/login':{
    name:'login',
    component:require(viewPath+'home.vue')
  }
});

router.start(App,'#app');


