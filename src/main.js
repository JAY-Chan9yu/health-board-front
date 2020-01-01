// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import NotFound from './components/NotFound.vue'
import Main from './components/Main.vue'
import GithubLogin from './components/logins/github/GithubLogin.vue'
// vue-good-table
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css' // import the styles
// vue modal
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueGoodTablePlugin) // vue 전용 테이블 라이브러리
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: Main },
    { path: '/githublogin', name: 'githublogin', component: GithubLogin }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
