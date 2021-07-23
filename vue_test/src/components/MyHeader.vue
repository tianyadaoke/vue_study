<template>
  <div>
    <input type="text" placeholder="请输入你的任务名称，按回车确认"@keyup.enter="add"> 
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name:'MyHeader',

  methods: {
    add(event){
      // console.log(event.target.value) 将用户的输入包装成一个todo对象
      const todoObj={id:nanoid(),title:event.target.value,done:false}
      console.log(todoObj)
    }
  },
}
</script>

<style>

</style>