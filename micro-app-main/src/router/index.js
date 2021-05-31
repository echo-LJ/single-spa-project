import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// micro-app-main/src/router/index.js
// 解决多次点击导航（多次push同一个路由），报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    /**
     * path: 路径为 / 时触发该路由规则
     * name: 路由的 name 为 Home
     * component: 触发路由时加载 `Home` 组件
     */
    path: '/',
    name: 'Home',
    component: Home
  },
]
/**
 * 注册路由实例
 * 即将开始监听 location 变化，触发路由规则
 */
const router = new VueRouter({
    mode: "history",
  routes
})

export default router
