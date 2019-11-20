// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import '@progress/kendo-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@progress/kendo-theme-default/dist/all.css'
import VueRouter from 'vue-router'
import Routes from './routes'
import Styling from './css/styling.css'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(Styling)
Vue.use(VueCurrencyFilter, {
  thousandsSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router: router
})
