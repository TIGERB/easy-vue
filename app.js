var Vue　　　 = require('vue'); // get vue
var App　　　 = require('./app.vue'); // get root module
var store　　 = require('./store.js'); // get vuxe -> store

var VueRouter = require('vue-router'); //get vue-router
var VueProgressBar = require('vue-progressbar'); // get vue-progressbar
var infiniteScroll =  require('vue-infinite-scroll');// get vue-infinite-scroll

Vue.use(VueRouter);
var options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(infiniteScroll)

var viewPath = './src/views/'; //component src
var routes = [
  { path: '/', component: require(viewPath + 'pageone.vue')},
  { path: '/two', component: require(viewPath + 'pagetwo.vue')},
  { path: '/three', component: require(viewPath + 'pagethree.vue')}
];
var router = new VueRouter({
  routes: routes
});

//init
var app = new Vue({
    router: router,
    store: store,
    render: function (h) {
      return h(App);
    }
}).$mount('#app');
