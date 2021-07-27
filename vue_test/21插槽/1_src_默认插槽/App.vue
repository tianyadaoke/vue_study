<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img0.baidu.com/it/u=30997815,4129215630&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
    </Category>
    <Category title="游戏">
      <li v-for="(item, index) in games" :key="index">{{ item }}</li>
    </Category>
    <Category title="电影">
      <img
        src="https://img0.baidu.com/it/u=30997815,4129215630&fm=26&fmt=auto&gp=0.jpg"
        alt=""
      />
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["test1", "test2", "test3", "teste4"],
      games: ["test1", "test2", "test3", "tesasaste4"],
      films: ["test1", "test2", "test3", "88884"],
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
</style>
