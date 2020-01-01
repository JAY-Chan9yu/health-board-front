<template>
  <div>
    <div>
      <h1> 눈뜨고 코백하기(코딩 백일동안 하기) </h1>
      <h2> Continuous Commit rank</h2>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :line-numbers="true"
        :search-options="{
          enabled: true
        }">
      </vue-good-table>
    </div>
    <div>
      <button class='button' v-on:click='previousBtn' >
        previous
      </button>
      <button class='button' v-on:click='nextBtn' >
        next
      </button>
    </div>
    <div style="float: left; margin-top: 20px">
      <button class='button' v-on:click='enrollmentIDBtn' >
        아이디 등록
      </button>
      <button class='button' v-on:click='oauthBtn' >
        인증하기
      </button>
    </div>
    <!-- 모달 관련-->
    <div>
      <modal name="enrollment-id">
        hello, world!
        <div class='body'>
          <li class='li' v-for='(service, index) in services' :key=index>
              <login-button :index=index :service=service />
          </li>
      </div>
      </modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import LoginButton from './LoginButton.vue'
import GitgubLogin from './logins/github/GithubLogin'

export default {
  components: { LoginButton },
  name: 'Detail',
  methods: {
    enrollmentIDBtn: function () {
      this.$modal.show('enrollment-id')
    },
    nextBtn: function () {
      axios.get(this.next).then((response) => {
        this.rows = response.data.results
        this.next = response.data.next
        this.previous = response.data.previous
      })
    },
    previousBtn: function () {
      axios.get(this.previous).then((response) => {
        this.rows = response.data.results
        this.next = response.data.next
        this.previous = response.data.previous
      })
    },
    oauthBtn: function () {
      this.$modal.show(GitgubLogin, {
        modal: this.$modal
      }, {
        name: 'dynamic-modal',
        width: '330px',
        height: '130px',
        draggable: true
      })
    }
  },
  data () {
    return {
      // todo: CODE 값이 있을 때, 인증버튼 나타나도록 수정
      code: this.$route.query.code,
      next: '',
      previous: '',
      msg: 'This is detail page!!',
      services: ['github', 'facebook', 'google'],
      // TODO: 이것도 따로 static 처럼 같이 관린 할 수 있는지?
      columns: [
        {
          label: 'Name',
          field: 'address'
        },
        {
          label: 'Continuous Commit',
          field: 'continuous_commit',
          type: 'number'
        },
        {
          label: 'Max Continuous Commit',
          field: 'max_continuous_commit',
          type: 'number'
        },
        {
          label: 'Total Commit',
          field: 'total_commit',
          type: 'number'
        },
        {
          label: 'Last Commit',
          field: 'last_commit',
          type: 'date',
          dateInputFormat: 'yyyy-mm-dd',
          dateOutputFormat: 'yyyy-mm-dd'
        }
      ],
      rows: [
      ]
    }
  },
  created () {
    // Django 쪽에서 corsheader 미들웨어 사용하면 post일떄만 header에 관려정보 추가해야함
    axios.get('http://127.0.0.1:8000/github/commit/').then((response) => {
      this.rows = response.data.results
      this.next = response.data.next
      this.previous = response.data.previous
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
  .body {
      list-style: none; width: 400px;
      margin: 0 !important;
      position: relative;
      left: calc(50% - 200px); right: calc(50% - 200px);
  }
  .li {
      width: 400px; margin: 0;
  }
</style>
