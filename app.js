require('!style-loader!css-loader!ratchet-npm/dist/css/ratchet.css');// get ratchet
require('!style-loader!css-loader!font-awesome/css/font-awesome.css');// get font-awesome
require('!style-loader!css-loader!animate.css/animate.css');// get animate.css

import FastClick from 'fastclick';
FastClick.attach(document.body);// init fastclick

import Vue from 'vue'; // get vue
import App from './app.vue'; // get root module
import store from './store.js'; // get vuxe -> store

import VueRouter from 'vue-router'; //get vue-router
import VueResource from 'vue-resource';// get $http
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import infiniteScroll from  'vue-infinite-scroll';// get vue-infinite-scroll

Vue.use(VueRouter);
Vue.use(VueResource);
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
  { path: '/', component: require(viewPath + 'home.vue')},
  { path: '/lists', component: require(viewPath + 'lists.vue')},
  { path: '/option', component: require(viewPath + 'option.vue')},
  { path: '/detail', component: require(viewPath + 'detail.vue')}
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
