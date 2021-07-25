<template>
  <div class="student">
    <h2> 学生姓名：{{name}}</h2> <br>
    <h2> 学生性别：{{sex}}</h2><br>
     <button @click="sendStudentName">把学生名给App</button>
      <button @click="unbind">解绑atguigu事件</button>
      <button @click="death">销毁当前的Student组件的实例</button>
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
  methods: {
    sendStudentName(){
      this.$emit('atguigu',this.name)
    },
    unbind(){
      this.$off('atguigu') //解绑一个自定义事件
      // this.$off(['atguigu1','atguigu2']) //解绑多个自定义事件
    },
    death(){
      this.$destroy()
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
