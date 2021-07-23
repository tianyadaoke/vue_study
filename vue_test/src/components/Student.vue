<template>
  <div >
    <h2> 学生姓名：{{name}}</h2> <br>
    <h2> 学生性别：{{sex}}</h2><br>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
// 混入
export default {
  name:'Student',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
}
</script>
