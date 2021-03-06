import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

import { posts } from './services/Posts'

export default new Vuex.Store({
  state: {
    posts: [],
    
  },

  getters: {
    post: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  },

  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    ADD_POST (state, post){
      state.posts.push(post)
    }
  },

  actions: {
    getPosts ({ commit }) {
      posts
      .getAll()
      .then(r => r.data)
      .then(posts => {
      commit('SET_POSTS', posts)
      })
    },

    addPost({ commit }){
      posts
      .add(post)
      .then(r => r.data)
      .then(posts => {
      commit('ADD_POST', post)})
      this.$router.push('/posts')}
  }
   
    
  
})
