var Vue  = require('vue'); // get vue
var Vuex = require('vuex'); // get vuex

Vue.use(Vuex);

var state = {
  cardData: [],
  isRefresh: false,
  test: 1
};

var getters = {
  getData: function (state) {
    return state.test;
  }
}

var mutations = {
  addData(state, data){
    state.cardData = state.cardData.concat(data);
  },
  clearData(state){
    state.cardData = [];
  }
};

var actions = {
  addData(context, data){
    context.commit('addData', data);
  },
  clearData(context){
    context.commit('clearData');
  }
};

var moduleCard = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default new Vuex.Store({
  modules: {
    moduleCard: moduleCard
  }
});
