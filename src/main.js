import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueRouter from 'vue-router'
import store from './store'
import Home from './components/Home.vue'
import MainPage from './components/MainPage.vue'
Vue.use(Antd)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/mainpage', component: MainPage }
  ]
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
