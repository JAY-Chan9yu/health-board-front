<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    <button class='access_token' v-on:click='access_token' > 아이디 인증하기 </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'container',
  data () {
    return {
      posts: [],
      msg: 'This is Test!',
      code: this.$route.query.code
    }
  },
  created () {
    // Django 쪽에서 corsheader 미들웨어 사용하면 post일떄만 header에 관려정보 추가해야함
    axios.get('http://127.0.0.1:8000/users/inform/').then((response) => {
      this.posts = response.data
    })
      .catch((e) => {
        console.error(e)
      })
  },
  methods: {
    access_token: function () {
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
        }
      }
      axios.post('http://localhost:8000/github/', config, {
        params: {
          code: this.code
        }
      })
        .then(function (res) {
          // TODO: router 로 이동할 수 있도록 수정 해야함
          window.location.href = 'http://localhost:8081/'
        })
        .catch(function (err) {
          // TODO: 등록된 아이디인 경우 rs읽어서 상태 코드? 같은거 확인하기
          if (err.response.status === 400) {
            alert('이미 등록된 아이디 입니다.')
          }
        })
    }
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
