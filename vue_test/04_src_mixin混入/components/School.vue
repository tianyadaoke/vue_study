<template>
  <div >
    <h2 @click="showName"> 学校名称：{{name}}</h2> <br>
    <h2> 学校地址：{{address}}</h2><br>
  </div>
</template>

<script>
// 混入
import {mixin} from '../mixin'
export default {
  name:'Student',
  data() {
    return {
      name:'尚硅谷',
      address:'北京'
    }
  },
  mixins:[mixin]
}
</script>
