<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
    </label>
    <button @click="handleDelete(todo.id)">删除</button>
     <button v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from  'pubsub-js'
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id) {
      if(confirm('确定删除吗')){
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish('deleteTodo',id)
      }
    },
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
      } else{
         this.$set(todo,'isEdit',true)
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(todo,e){
      todo.isEdit=false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    }
  },
};
</script>

<style>
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
  float: right;
}
li button {
  display: none;
}
</style>