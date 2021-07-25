<template>
  <div>
    <ul>
     <MyItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" :todo="todoObj" >
    </MyItem>
    </ul>
  </div>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props:['todos']
};
</script>

<style>
</style>