<template>
    <button class='button' v-on:click='buttonClick' >
        <img class='image' :src='require("../assets/" + service + ".png")' />
        {{'Login with ' + service }}
    </button>
</template>

<script>
/* eslint-disable no-console */
import axios from 'axios'

export default {
  props: [ 'service', 'index' ],
  methods: {
    buttonClick: function () {
      var config = {
        headers: {
          // baeckend 쪽에서 corsheader 미들웨어 사용해서 GET은 아래 내용 넣지 않아도 됨
          // 'Access-Control-Allow-Origin': '*'
          // 'Access-Control-Allow-Credentials': 'true'
          // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
          // 'Access-Control-Allow-Headers': 'Accept, Content-Type, Authorization, Content-Length, X-Requested-With'
        }
      }
      axios.get('http://localhost:8000/users/' + this.service + '/', config)
        .then(function (res) {
          window.location.href = res.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
    .button {
        width: 400px; height: 50px; font-weight: bold;
        font-size: 30px; background: #6D7E85;
        color: white; border-radius: 10px; margin-top: 10px;
        display: flex; align-items: center; justify-content: center;
    }
    .button:hover {
        cursor: pointer;
    }
    .image {
        width: 40px; height: auto;
    }
</style>
