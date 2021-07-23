<template>
  <div >
    <h2 > 学校名称：{{name | mySlice}}</h2> <br>
    <h2> 学校地址：{{address}}</h2><br>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script>
// 混入

export default {
  name:'Student',
  data() {
    return {
      name:'尚硅谷atguigu',
      address:'北京'
    }
  },
  methods: {
    test(){
      this.hello()
    }
  },
}
</script>
