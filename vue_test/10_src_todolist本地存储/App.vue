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
      todos:JSON.parse(localStorage.getItem('todos'))||[]
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
  watch:{
    todos:{
      deep:true,
      handler(val){
        localStorage.setItem('todos',JSON.stringify(val))
      }
    }
  }
}
</script>

