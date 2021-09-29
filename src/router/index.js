import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('../pages/Login.vue')
const Home = () => import('../pages/Home.vue')
const PartA = () => import('../pages/PartA.vue')
const PartB = () => import('../pages/PartB.vue')
const Plan = () => import('../pages/Plan.vue')

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    meta:{
      title:'login'
    },
    component:Login
  },
  {
    path:'/home',
    name:'Home',
    meta:{
      title:'home'
    },
    component:Home,
    children:[
      {
        path:'partA',
        name:'PartA',
        meta:{
          title:'partA'
        },
        component:PartA,
      },
      {
        path:'plan',
        name:'Plan',
        meta:{
          title:'plan'
        },
        component:Plan,
      },
      {
        path:'partB',
        name:'PartB',
        meta:{
          title:'partB'
        },
        component:PartB,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }else {
    document.title = "home"
  }
  next()
})

export default router