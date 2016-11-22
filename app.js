var Vue　　　 = require('vue'); // get vue
var App　　　 = require('./app.vue'); // get root module
var store　　 = require('./store.js'); // get root module

var VueRouter = require('vue-router'); //get vue-router
var VueProgressBar = require('vue-progressbar'); // get vue-progressbar

Vue.use(VueRouter); //error:　Please install the Router with Vue.use() before creating an instance
var options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'left',
  inverse: false
};
Vue.use(VueProgressBar, options);

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
    // store,
}).$mount('#app');
