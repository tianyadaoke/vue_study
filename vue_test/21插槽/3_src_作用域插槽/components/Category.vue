<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games">我是默认的内容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["test1", "test2", "test3", "tesasaste4"],
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>