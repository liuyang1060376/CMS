import Vue from 'vue'
import Vuex from 'vuex'
import { reqSlider } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // slider列表
    sliderList: []
  },
  mutations: {
    setSlider (state, data) {
      state.sliderList = data
    }
  },
  actions: {
    async getSlider (context) {
      const result = await reqSlider()
      console.log(result.data)
      context.commit('setSlider', result.data)
    }
  },
  modules: {
  }
})
