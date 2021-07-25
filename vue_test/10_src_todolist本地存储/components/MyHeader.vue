<template>
  <div>
    <input type="text" placeholder="请输入你的任务名称，按回车确认" v-model="title" @keyup.enter="add"> 
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'MyHeader',
  data() {
    return {
      title:''
    }
  },
  methods: {
    add(){
      if(!this.title.trim()) return
      // console.log(event.target.value) 将用户的输入包装成一个todo对象
      const todoObj={id:nanoid(),title:this.title,done:false}
      //console.log(todoObj)
      this.addTodo(todoObj)
      this.title=''
    }
  },
  props:['addTodo']
}
</script>

<style>

</style>