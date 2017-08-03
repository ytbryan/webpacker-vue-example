/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
// import App from './multiselect.vue'
// import vSelect from 'vue-select'
// import VueForm from 'vue-form'
import BootstrapVue from 'bootstrap-vue';
import Bootstrap from './bootstrap.vue'

Vue.use(BootstrapVue);



// import App from './app.vue'
// import App from './form.vue'
// import VueFormGenerator from "vue-form-generator";
// Vue.use(VueFormGenerator);

// Vue.component('v-select', vSelect)
// Vue.use(VueForm, {
// 	inputClasses: {
//   	valid: 'form-control-success',
//     invalid: 'form-control-danger'
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('hello'))
  const app = new Vue(App).$mount('hello')
  console.log(app)
})

// document.addEventListener('load', () => {
//   document.body.appendChild(document.createElement('hello'))
//   const app = new Vue(App).$mount('hello')
//   console.log(app)
// })
