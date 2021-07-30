<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前求和乘以十倍后是：{{ bigSum }}</h3>
    <h3>我在{{ school }}学习{{ subject }}</h3>
    <h3 style="color:red">Person组件的总人数是{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    ...mapState('countOptions',['sum', 'subject', 'school']),
    ...mapState('personOptions',['personList']),
    ...mapGetters('countOptions',['bigSum'])
  },
  methods: {
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    // decrement() {
    //   this.$store.commit("REDUCE", this.n);
    // },
    ...mapMutations('countOptions',{increment:'ADD',decrement:'REDUCE'}),
    // ...mapMutations(['ADD','REDUCE']),

    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },
    ...mapActions('countOptions',{incrementOdd:'addOdd',incrementWait:'addWait'}),
    // ...mapActions(['addOdd','addWait'])
  }
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>