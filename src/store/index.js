import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather_code: '',
    loading: false,
  },
  mutations: {
    setWeatherCode(state, weather_code) {
      state.weather_code = weather_code
    },
    loading(state, bool) {
      state.loading = bool ? true : false
    }
  },
  actions: {
    async setWeatherCode(context, weather_code) {
      await context.commit('setWeatherCode', weather_code)
    },
  },
  modules: {
  }
})
