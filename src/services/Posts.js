import axios from 'axios'

export default class Posts {
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll(){
        return axios.get('posts')
    }

    add(post){
        return axios.post(`/posts`, post)
    }

}

export const posts = new Posts()