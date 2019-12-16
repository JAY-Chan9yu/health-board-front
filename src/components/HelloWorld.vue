<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      posts: [],
      msg: 'This is Test'
    }
  },
  created () {
    var config = {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Content-Type': 'application/json'
      // }
    }
    axios.get('http://127.0.0.1:8000/users/inform/', config).then((response) => {
      this.posts = response.data
    })
      .catch((e) => {
        console.error(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
