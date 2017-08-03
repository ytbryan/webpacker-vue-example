import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import VueConfig from 'vue-config';

sync(store, router)

const configs = {
  baseUrl: 'https://vue-snipcart.netlify.com/'
};

Vue.use(VueConfig, configs);

const root = new Vue({
  store,
  router,
  render: h => h(App)
})

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  root.$mount('hello');
  console.log(app)
})

