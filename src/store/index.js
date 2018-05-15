import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'
import initialLoad from './modules/initialLoad'
import live from './modules/live'


Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    initialLoad,
    live,
  }
})
