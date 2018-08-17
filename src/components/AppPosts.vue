<template>
    <div  class="container">
        <ul class="list-group list-group-flush"
            v-for="(post, index) in posts" :key="index">
            <li class="list-group-item">
                {{ post.title }}
                <router-link 
                    :to="{ name: 'single-post', params: { id: post.id } }" 
                    >
                    <button class="btn btn-success">View post</button>
                </router-link>
                
            </li>
            
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
    name: 'AppPosts',
    computed: mapState([
        'posts'
    ]),
    mounted () {
    this.$store.dispatch('getPosts')
  },
    
}
</script>

<style>
 .list-group-item {
     font-size: 1.5rem;
     display: flex;
     justify-content: space-between
 }

</style>