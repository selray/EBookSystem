import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/global.css'
import request from "@/utls/request";
import VueParticles from 'vue-particles'


Vue.config.productionTip = false
Vue.use(ElementUI, {size: "mini"});
Vue.use(VueParticles)
Vue.prototype.request = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
