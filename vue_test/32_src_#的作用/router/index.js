import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
const router= new VueRouter({
  // mode:'history',
  mode:'hash', //hash兼容性好
  routes:[
    {
      name:'about',
      path:'/about',
      component: About,
      meta:{title:"关于"}
    },
    {
      name:'home',
      path:'/home',
      component: Home,
      meta:{title:"主页"},
      children:[
        {
          name:'news',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'新闻'},
          beforeEnter:(to,from,next)=>{
            console.log('独享路由守卫')
          }
        },
        {
          name:'message',
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'消息'}
        }
      ]
    },
  ]
})
// 全局前置路由守卫，每次切换之前调用
router.beforeEach((to,from,next)=>{
  if(to.meta.isAuth){
    if(localStorage.getItem('school')=='atguigu'){
      next()
    }else{
      alert('学校不对无权查看')
    }
  } else{
    next()
  }
})
router.afterEach((to,from)=>{
  document.title=to.meta.title||'硅谷系统'
})
export default router