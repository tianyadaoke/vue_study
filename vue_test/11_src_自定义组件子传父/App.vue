<template>
  <div class="app">
    <h1>{{msg}}, 学生姓名是：{{studentName}}</h1>
    <!-- 通过父组件给子组件绑定自定义事件，子给父传递数据，使用v-on -->
    <Student @atguigu="getStudentName"/>

    <!-- 通过父组件给子组件绑定自定义事件，子给父传递数据,使用ref -->
    <!-- <Student ref="student"/>   -->


    <hr>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>
  </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'
export default {
  name: 'App',
  components:{Student,School},
  data() {
    return {
      msg:'你好啊',
      studentName:''
    }
  },
  methods: {
    getSchoolName(name){
      console.log('app收到了学校名'+name)
    },
    getStudentName(name){
      console.log('app收到了学生名',name)
      this.studentName=name
    }
  },
  // mounted() {
  //   // setTimeout(() => {
  //   //   this.$refs.student.$on('atguigu',this.getStudentName)
  //   // }, 3000);

  //   //  this.$refs.student.$on('atguigu',this.getStudentName)

  //     this.$refs.student.$once('atguigu',this.getStudentName)
    
  // },
}
</script>

<style scoped>
.app{
  background-color: gray;
  padding: 5px;
}
</style>
