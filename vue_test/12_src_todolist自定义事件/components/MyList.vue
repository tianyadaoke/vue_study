<template>
  <div>
    <ul>
     <MyItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" :todo="todoObj" 
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo">
    </MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props:['todos','checkTodo','deleteTodo']
};
</script>

<style>
</style>