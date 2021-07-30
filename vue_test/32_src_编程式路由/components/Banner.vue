<template>
  <div>
    <h2>Router Vue demo</h2>
    <p><button @click="back">后退</button></p>
    <p><button @click="forward">前进</button></p>
    <p><button @click="test">测试一下go</button></p>
  </div>
</template>

<script>
export default {
  name: "banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test(){
      // -2后退两步，+3往前3步
      this.$router.go(-2)
    }
  },
};
</script>

<style>
</style>