// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import '../static/js/theme'

// Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: {
    theme: 'teal',
    appName: '砖家说',
    logoUrl: 'http://www.uugai.com//logo/ziti/20170226/148811425089902.png',
    requestUrl: {
      login: 'http://127.0.0.1:3000/home/index/login'
    }
  }
})
