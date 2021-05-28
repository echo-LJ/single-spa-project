// micro-app-main/src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import startQiankun from "./micro";


startQiankun();


Vue.config.productionTip = false
// 创建 Vue 实例
// 该实例将挂载/渲染在 id 为 main-app 的节点上
new Vue({
  router,
  render: h => h(App)
}).$mount('#main-app')
