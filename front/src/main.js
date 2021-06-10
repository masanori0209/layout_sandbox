import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import { GiphyFetch } from '@giphy/js-fetch-api'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  'Content-Type': 'application/json'
})
Vue.prototype.$gf = new GiphyFetch('your api key')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
