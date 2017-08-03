/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import 'babel-polyfill'
import Vue from 'vue'
import Counter from './counter.vue' // frontend counter
import store from './store' // store with vuex

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))

  const app = new Vue({
    store,
    render: h => h(Counter)
  }).$mount('app')

  console.log(app)
})
