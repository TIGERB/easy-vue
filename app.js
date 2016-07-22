var Vue 　　　   = require('vue'); // get vue
var VueRouter    = require('vue-router'); //get vue-router
var App 　　　   = require('./app.vue');// get root module

Vue.use(VueRouter);//error:　Please install the Router with Vue.use() before creating an instance
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


