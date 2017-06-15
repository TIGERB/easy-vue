import Vue from 'vue'; // get vue
import Vuex from 'vuex'; // get vuex
import VueResource from 'vue-resource';// get $http

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
  cardData: [],
  isloadingComplete: false,
  busy: false,
  isShow: false,
};

const getters = {};

const mutations = {
  updateLoadingState(state, data) {
    state.isloadingComplete = data;
  },
  updateBusyState(state, data) {
    state.busy = data;
  },
  addData(state, data) {
    state.cardData = state.cardData.concat(data);
  },
  refreshData(state, data) {
    state.cardData = data;
  },
  isShowAlert(state, data) {
    state.isShow = data;
  },
};

const actions = {
  getData(context, object) {
    const {progress, isRefresh} = object;
    progress.$Progress.start();
    context.commit('updateLoadingState', false);
    context.commit('updateBusyState', true);

    /**
     * use vue-resource
     */
    Vue.http.get('/mock/api.json').then((response) => {
      const json = response.data;
      context.commit('updateLoadingState', true);
      context.commit('updateBusyState', false);
      if (isRefresh === true) {
        context.commit('refreshData', json);
      } else {
        context.commit('addData', json);
      }
      progress.$Progress.finish();
    }, () => {
      context.commit('updateBusyState', false);
      progress.$Progress.fail();
    });
}

};

const store = new Vuex.Store({
 state,
 getters,
 mutations,
 actions,
});

export default store;
