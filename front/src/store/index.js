import Vue from 'vue'
import Vuex from 'vuex'
import aiAnalysisLog from "./aiAnalysisLog"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    aiAnalysisLog
  }
})

export default store