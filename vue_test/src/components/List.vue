<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.login" v-show="info.users.length">
      <a :href="user.html_url" target="_blank">
      <img :src="user.avatar_url" style="width:100px">
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
     <h1 v-show="info.isFirst">欢迎使用</h1>
     <h1 v-show="info.isLoading">加载中</h1>
     <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name:'List',
  data() {
    return {
      info:{
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg:''
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData',(dataObj)=>{
      this.info={...this.info,...dataObj}
    })
  },
}
</script>

<style>
.card{
  float: left;
  width: 33.3333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card>img{
  margin-bottom: 0.75rem;
  border-radius: 100px;
}
.card-text{
  font-size: 85%;
}
</style>