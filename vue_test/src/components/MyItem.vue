<template>
     <li>
        <label>
          <input type="checkbox" :checked="todo.done" />
          <span>{{todo.title}}</span>
        </label>
        <button style="display: none">删除</button>
      </li>
</template>

<script>
export default {
  name:'MyItem',
  props:['todo'],
  mounted() {
    console.log(this.todo)
  },
}
</script>

<style>

</style>