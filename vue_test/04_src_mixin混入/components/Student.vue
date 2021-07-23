<template>
  <div >
    <h2 @click="showName"> 学生姓名：{{name}}</h2> <br>
    <h2> 学生性别：{{sex}}</h2><br>
  </div>
</template>

<script>
// 混入
import {mixin} from '../mixin'
export default {
  name:'Student',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
  mixins:[mixin]
}
</script>
