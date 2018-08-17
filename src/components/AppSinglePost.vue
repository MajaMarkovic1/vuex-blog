<template>
    <div  class="container">
        <div><strong>Title:</strong><br> {{ post.title }}</div>
        <div><strong>Text:</strong><br> {{ post.text }}</div>
        
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'AppSinglePost',
  
   methods: mapActions({
       post: 'getPost'
   })
 
    
}
</script>

<style>

</style>