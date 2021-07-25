<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "checkTodo","deleteTodo"],
  methods: {
    handleCheck(id) {
      // 通知app将对应的todo对象done值取反
      this.checkTodo(id);
    },
    handleDelete(id) {
      if(confirm('确定删除吗')){
        this.deleteTodo(id)
      }
    },
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