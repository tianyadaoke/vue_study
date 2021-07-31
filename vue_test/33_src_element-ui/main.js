import Vue from 'vue'
import App from './App.vue'

// 按需引入
import {Button,Row,DatePicker} from 'element-ui'
Vue.component(Button.name, Button);
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)
// 全局引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),

})