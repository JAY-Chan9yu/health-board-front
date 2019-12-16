// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import NotFound from './components/NotFound.vue'
import Main from './components/Main.vue'
// import GithubLogin from './components/logins/github/GithubLogin.vue';

// import User from './components/logins/User.vue';

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'main', component: Main }
    // { path: '/githublogin', name: 'githublogin', component: GithubLogin },
    // { path: '/user', name: 'user', component: User},
    // { path: '*', component: NotFound }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
