<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的求和为{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个王姓的人</button>
    <button @click="addPersonServer">添加一个服务器获取的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name:'Person',
  data() {
    return {
      name:''
    }
  },
  methods: {
    add(){
      const personObj = {id:nanoid(),name:this.name}
      this.name=''
      this.$store.commit('personOptions/ADD_PERSON',personObj)
    },
    addWang(){
      const personObj = {id:nanoid(),name:this.name}
      this.name=''
      this.$store.dispatch('personOptions/addPersonWang',personObj)
    },
    addPersonServer(){
      this.$store.dispatch('personOptions/addPersonServer')
    }
  },
  computed:{
    personList(){
      return this.$store.state.personOptions.personList
    },
    sum(){
      return this.$store.state.countOptions.sum
    },
    firstPersonName(){
      return this.$store.getters['personOptions/firstPersonName']
    }
    // ...mapState('personOptions',['personList']),
    // ...mapState('countOptions',['sum']),
  }
}
</script>

<style>

</style>