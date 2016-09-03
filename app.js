var Vue 　　　       = require('vue'); // get vue
var App 　　　       = require('./app.vue');// get root module

var VueRouter       = require('vue-router'); //get vue-router
var VueProgressBar  = require('vue-progressbar');// get vue-progressbar

Vue.use(VueRouter);//error:　Please install the Router with Vue.use() before creating an instance
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
});// can use progressbar

var router   	 = new VueRouter({
    // history: true, //this config is to del anchor point like "#!"
    // saveScrollPosition: true
});//init
var viewPath 	 = './src/views/';//component src

router.map({
  '/':{
    name:'',
    component:require(viewPath+'pageone.vue')
  },
  '/two':{
    name:'two',
    component:require(viewPath+'pagetwo.vue')
  },
  '/three':{
    name:'three',
    component:require(viewPath+'pagethree.vue')
  }
});

router.start(App,'#app');
