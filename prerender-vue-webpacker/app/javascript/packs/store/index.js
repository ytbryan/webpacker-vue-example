import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import { state } from './state.js'
import { getters } from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters
})