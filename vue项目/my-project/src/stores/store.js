import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: '',
    listdata: '',
  },
  mutations: {
    setData(state, shopdata) {
      state.data = shopdata
    },
    setListData(state, sidedata) {
      state.listdata = sidedata
    }
  },
  actions: {
    setData(context, shopdata) {
      context.commit("setData", shopdata);
    },
    setListData(context, sidedata) {
      context.commit("setListData", sidedata);
    }

  },
  getters: {
    getData(state) {
      return state.data
    },
    getListData(state) {
      return state.listdata
    }
  }
})