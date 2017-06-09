import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';
import Lists from '../views/lists.vue';
import Option from '../views/option.vue';
import Detail from '../views/detail.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/lists', component: Lists },
  { path: '/option', component: Option },
  { path: '/detail', component: Detail },
];

const router = new VueRouter({routes});

export default router;
