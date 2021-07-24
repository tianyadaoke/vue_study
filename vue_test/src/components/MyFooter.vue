<template>
  <div v-show="total">
    <label for="">
      <input type="checkbox" :checked="isAll" @change="checkAll">
    </label>
    <span>已完成{{doneTotal}}</span>/全部{{total}}
    <button>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos','checkAllTodo'],
  computed:{
    total(){
      return this.todos.length
    },
    doneTotal(){
      return this.todos.reduce((pre,current)=> pre+(current.done?1:0),0)
    },
    isAll(){
      return this.doneTotal==this.total&&this.total>0
    }
  },
  methods: {
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    }
  },
}
</script>

<style>

</style>