// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '@/common/stylus/index.styl'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import $ from 'jquery'
import BootstrapVue from 'bootstrap-vue'
import Distpicker from 'v-distpicker'
import Vuex from 'vuex'
import 'babel-polyfill'

// window.Promise = Promise
window.jquery = $
window.$ = $
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.component('v-distpicker', Distpicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
