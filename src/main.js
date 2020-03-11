import Vue from 'vue'
import Vuex from 'vuex'
import store from "./store"
import router from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueParticles from 'vue-particles';

Vue.config.productionTip = false
Vue.use(VueParticles)
Vue.use(Vuex)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
