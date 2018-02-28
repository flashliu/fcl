// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import osui from '../packages/index'
import '../packages/lib/bootstrap/css/bootstrap.min.css'
Vue.use(osui)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  components: { App },
  template: '<App/>'
})
