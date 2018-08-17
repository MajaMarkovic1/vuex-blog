import Vue from 'vue'
import Router from 'vue-router'
import AppPosts from './components/AppPosts.vue'
import AppSinglePost from './components/AppSinglePost.vue'
import AddPost from './components/AddPost.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'posts',
    },
    {
      path: '/posts',
      component: AppPosts
    },
    {
      path: '/post/:id',
      component: AppSinglePost, 
      name: 'single-post'
    },
    {
      path: '/add',
      component: AddPost, 
      name: 'add-post'
    },
  ]
})
