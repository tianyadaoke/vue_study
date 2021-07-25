<template>
  <div>
    <MyHeader @addTodo="addTodo"/>
    <MyList :todos="todos" />
    <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
     updateTodo(id,title){
      this.todos.forEach(todo=>{
        if(todo.id==id){
          todo.title=title
        }
      })
    },
    deleteTodo(_,id){
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
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    this.pubId=pubsub.subscribe('deleteTodo',this.deleteTodo)
     this.$bus.$on('updateTodo',this.updateTodo)
  },
  beforeDestroy() {
    this.$bus.$off('checkTodo')
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pubId)
     this.$bus.$off('updateTodo')
  },
}
</script>

