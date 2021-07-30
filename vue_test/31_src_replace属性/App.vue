<template>
  <div>
    <Banner />
    <hr />
    <router-link replace to="/home" active-class="active">Home</router-link> <br />
    <router-link replace to="/about" active-class="active">About</router-link> <br />
    <hr />
    <router-view />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
