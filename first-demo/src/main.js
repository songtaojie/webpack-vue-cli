import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import components from './components/'
import './scss/root.scss'
Vue.config.productionTip = false
Object.keys(components).forEach((key)=>{
  var name =key.replace(/(\w)/,(v)=>v.toUpperCase());
  Vue.component(`v${name}`,components[key]);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
