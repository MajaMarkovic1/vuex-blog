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
    computed: {
        post(id) {
            return this.$store.getters.post(this.$route.params.id)
        }
    }

    
}
</script>

<style>

</style>