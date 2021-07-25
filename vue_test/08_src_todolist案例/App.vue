<template>
  <div>
    <MyHeader :addTodo="addTodo"/>
    <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
    <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components:{MyHeader,MyList,MyFooter},
    data() {
    return {
      todos:[
        {id:'001',title:'吃饭',done:true},
        {id:'002',title:'睡觉',done:true},
        {id:'003',title:'开车',done:false},
      ]
    }
  },
  methods: {
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(id){
      this.todos.forEach(todo=>{
        if(todo.id==id){
          todo.done=!todo.done
        }
      })
    },
    deleteTodo(id){
      this.todos=this.todos.filter(todo=>todo.id!=id)
    },
    checkAllTodo(done){
      this.todos.forEach(todo=>{
          todo.done=done
      })
    },
    clearAllTodo(){
      this.todos = this.todos.filter(todo=> !todo.done)
    }
  },
}
</script>

