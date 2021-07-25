<template>
  <div v-show="total">
    <label for="">
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>已完成{{ doneTotal }}</span
    >/全部{{ total }}
    <button @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo","clearAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    isAll:{
      get() {
        return this.doneTotal == this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    clearAll(){
      this.clearAllTodo()
    }
  },
  // methods: {
  //   checkAll(e) {
  //     this.checkAllTodo(e.target.checked);
  //   },
  // },
};
</script>

<style>
</style>