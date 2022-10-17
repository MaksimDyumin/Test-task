import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    units: []
  },
  getters: {
    units(state) {
      return state.units
    }
  },
  mutations: {
    SET_UNITS(state, units) {
      state.units = units
    }
  },
  actions: {
    async getUnits({commit}) {
      await axios.get('http://localhost:3000/units').then(res => {
        commit('SET_UNITS', res.data)
      })
    }
  },
  modules: {
  }
})
