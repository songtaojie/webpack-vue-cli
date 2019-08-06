import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import components from './components/'
import  "./scss/site.scss";
Vue.config.productionTip = false
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase());
  Vue.component(`v${name}`, components[key]);
})

window.Vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')