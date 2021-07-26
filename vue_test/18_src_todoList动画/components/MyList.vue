<template>
  <div>
    <ul>
      <transition-group name="todo" appear="">
        <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj">
        </MyItem>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos"],
};
</script>

<style scoped>
.todo-enter-active {
  animation: atguigu 1s linear;
}
.todo-leave-active {
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>