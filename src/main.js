import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import './registerServiceWorker'
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VeeValidate from 'vee-validate'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(VeeValidate);


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
