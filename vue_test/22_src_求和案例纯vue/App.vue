<template>
  <div>
    <Count/>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: { Count },
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
