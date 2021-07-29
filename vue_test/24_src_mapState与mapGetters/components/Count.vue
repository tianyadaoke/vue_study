<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和乘以十倍后是：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
   
    // subject() {
    //   return this.$store.state.subject;
    // },
    ...mapState( ['sum', 'subject', 'school']),
    // ...mapState({ sum: "sum", subject: "subject", school: "school" }),
    
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("REDUCE", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
  mounted() {
    const x = mapState({ sum: "sum", subject: "subject", school: "school" });
    console.log(x);
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>