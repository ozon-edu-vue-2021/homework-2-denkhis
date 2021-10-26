import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/styles/main.css'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedFilePath: ''
  },
  mutations: {
    setFilePath (state, payload) {
      state.selectedFilePath = payload
    }
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
