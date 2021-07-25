<template>
  <div class="student">
    <h2> 学生姓名：{{name}}</h2> <br>
    <h2> 学生性别：{{sex}}</h2><br>
    <button @click="sendSchoolName">把学生姓名给school组件</button> <br>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name:'Student',
  data() {
    return {
      name:'张三',
      sex:'男'
    }
  },
  methods: {
    sendSchoolName(){
      //this.$bus.$emit('hello',666)
      pubsub.publish('hello',666)
    }
  },
}
</script>
<style lang="less" scoped>
  .student{
    background-color:orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>
