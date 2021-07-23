<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的dom元素</button>
    <School></School>
  </div>
</template>

<script>
import School from './components/School'
export default {
  name: 'App',
  components:{School},
  data() {
    return {
      msg:'欢迎您北京'
    }
  },
  methods: {
    showDom(){
      console.log(this.$refs.title)
    }
  },
}
</script>

<style>

</style>