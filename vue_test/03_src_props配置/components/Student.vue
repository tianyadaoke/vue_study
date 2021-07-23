<template>
  <div >
    <h1>{{msg}}</h1><br>
    <h2> 学生姓名：{{name}}</h2> <br>
    <h2> 学生性别：{{sex}}</h2><br>
    <h2> 学生年龄:{{myAge+1}}</h2><br>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      msg:'我是一个好学生',
      myAge:this.age
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // props:['name','sex','age'] 简单对象

  // 接收的同事对数据类型进行限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // }

  props:{
    name:{
      type: String,
      required: true
    },
    age:{
      type: Number,
      default: 99
    },
    sex:{
      type:String,
      required:true
    }
  }
}
</script>
