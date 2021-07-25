<template>
  <div class="school">
    <h2> 学校名称：{{name}}</h2> <br>
    <h2> 学校地址：{{address}}</h2><br>
  </div>
</template>

<script>

export default {
  name:'School',
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  mounted() {
    this.$bus.$on('hello',data=>console.log('我是school组件，我收到了数据',data))
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  },
}
</script>
<style scoped>
  .school{
    background-color:skyblue;
    padding: 5px;
  }
</style>>

