<template>
  <div>
    <h2>Home组件内容</h2>
<<<<<<< HEAD:vue_test/src/pages/Home.vue
    <router-link  active-class="active" to="/home/news">News</router-link><br>
    <router-link  active-class="active" to="/home/message">Message</router-link><br>
    <router-view></router-view>
=======
    <router-link active-class="active" to="/home/news">News</router-link><br>
    <router-link active-class="active" to="/home/message">Message</router-link><br>

    <keep-alive include="News">
        <router-view></router-view>
    </keep-alive>

>>>>>>> b309573bb94a824f8a81233e5018ace94006aefd:vue_test/29_src_缓存路由组件keep-alive/pages/Home.vue
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.active{
  color: green;
} 
</style>