import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import plugins from './plugins'
Vue.config.productionTip = false
// Vue.use(plugins)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
})