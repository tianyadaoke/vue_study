export default {
  install(Vue){
    // console.log('plugins install',Vue)
    // 全局过滤器
    Vue.filter('mySlice',function(value){
      return value.slice(0,4)
    })
    // 自定义指令
    Vue.directive(
      'fbind', {
        bind(element, binding) {
         element.value=binding.value
        },
        inserted(element, binding){
          element.focus()
        },
        update(element, binding){
          element.value=binding.value
          element.focus()
        }
      }
    )
    // 定义混入
    Vue.mixin({
      data(){
        return{
          x:100,
          y:200
        }
      }
    })
    // 给Vue原型上添加方法
    Vue.prototype.hello=()=>{console.log('你好啊')}
  }
}
