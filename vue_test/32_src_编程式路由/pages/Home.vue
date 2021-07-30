<template>
  <div>
    <h2>Home组件内容</h2>
    <router-link  active-class="active" to="/home/news">News</router-link><br>
    <router-link  active-class="active" to="/home/message">Message</router-link><br>
    <router-view></router-view>
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