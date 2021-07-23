// 引入Vue
import Vue from 'vue'
// 引入App管理其他组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建实例对象vm
new Vue({
  el:'#app',
  render: h => h(App)
  // render: h => h('h1','你好啊')
  // render(){
  //   console.log('render')
  //   return null
  // }
  // template:`<App></App>`,
  // components:{App}
})
// .$mount('#app')
