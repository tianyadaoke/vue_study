<template>
  <div class="test">
    <h2> 学生姓名：{{name}}</h2> <br>
    <h2 class="atguigu"> 学生性别：{{sex}}</h2><br>
  </div>
</template>

<script>
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
<style lang="less" scoped>
  .test{
    background-color:orange;
    .atguigu{
      font-size: 40px;
    }
  }
</style>
