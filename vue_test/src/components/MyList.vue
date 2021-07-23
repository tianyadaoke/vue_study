<template>
  <div>
    <ul>
     <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  data() {
    return {
      todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'睡觉',done:true},
        {id:'003',title:'开车',done:false},
      ]
    }
  },
};
</script>

<style>
</style>