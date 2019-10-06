import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';
import { routes } from './routes';
import axios from 'axios';

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
	routes,
	mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
