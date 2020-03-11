import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import Layout from './layout';

const store = new Vuex.Store({
  modules: {
    Layout
  }
});

export default store;
