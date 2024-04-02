import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const twitterStore = defineStore('twitter', () => {

  const user = ref(null)
  const tweets = ref([])
  const url = "http://back:7410/tweets"

  axios.get(url+"tweets")
    .then( response => {
      console.log(response.data)
      tweets.value = response.data
    })



  return { tweets }
})
