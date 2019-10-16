// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import tool from '@/assets/js/tool';
import iView from 'iview';

import 'iview/dist/styles/iview.css'

import  "@/assets/js/directive"
import "@/assets/css/rest.css"
import "@/assets/font/iconfont.css"
import '@/mock'; // mock数据

import './icons' // iconSvg

Vue.use(iView)
Vue.config.productionTip = false;
Vue.prototype.$t=tool;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    eventHub:new Vue()
  }
})
