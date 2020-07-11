import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateArticle from '../views/CreateArticle'
import ListArticle from '../views/ListArticle'
import EditArticle from '../views/EditArticle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'create-list',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create-articles',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-articles',
    component: EditArticle
  },
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router