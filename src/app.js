require('!style-loader!css-loader!ratchet-npm/dist/css/ratchet.css');// get ratchet
require('!style-loader!css-loader!font-awesome/css/font-awesome.css');// get font-awesome
require('!style-loader!css-loader!animate.css/animate.css');// get animate.css

import FastClick from 'fastclick';
FastClick.attach(document.body);// init fastclick

import Vue from 'vue'; // get vue
import App from './app.vue'; // get root module
import store from './store.js'; // get vuxe -> store
import router from './router';

import VueResource from 'vue-resource';// get $http
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import infiniteScroll from  'vue-infinite-scroll';// get vue-infinite-scroll

Vue.use(VueResource);
const options = {
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
Vue.use(infiniteScroll);

//init
const app = new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app');
