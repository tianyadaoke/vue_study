<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://img0.baidu.com/it/u=30997815,4129215630&fm=26&fmt=auto&gp=0.jpg"
        alt=""
        slot="center"
      />
      <a href="http://www.google.es" slot="footer">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://www.google.es">单机游戏</a>
        <a href="http://www.google.es">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <img
        src="https://img0.baidu.com/it/u=30997815,4129215630&fm=26&fmt=auto&gp=0.jpg"
        alt=""
        slot="center"
      />
      <template  v-slot:footer>
        <div class="foot">
          <a href="http://www.google.es">经典</a>
          <a href="http://www.google.es">热门</a>
          <a href="http://www.google.es">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观影</h4>
      </template>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
