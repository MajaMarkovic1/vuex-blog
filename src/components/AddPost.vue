<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label>Title</label>
            <input name="title" id="title" type="text" v-model="newPost.title">
            <button type="submit">Submit</button>
        </form>
    </div>

</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'AddPost',
    data(){
        return {
            newPost: {}
        }
    },
    mounted () {
    this.$store.dispatch('addPost')
  },
    
}
</script>