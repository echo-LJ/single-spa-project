<template>
  <div id="main-app">
      <!-- 主应用菜单，用于渲染菜单； -->
    <div class="main-menu">
        <div class="main-menu-item" v-for="item in menus" :key="item.key" @click="goto(item.path)">
            <span>
                {{item.title}}
            </span>
        </div>
      <!-- <router-link to="/">Home</router-link> -->
    </div>
    <section class="main-section">
         <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name" />

        <!-- 子应用渲染区，用于挂载子应用节点 -->
        <section v-show="!$route.name" id="frame"></section>
    </section>
  </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            menus: [
                // 菜单列表
                // {
                //     key: 唯一 Key 值
                //     title: 菜单标题
                //     path: 菜单对应的路径
                // },
                {
                    key: "Home",
                    title: "主页",
                    path: "/",
                }
            ]
        }
    },
    methods: {
        goto(path) {
            this.$router.push(path)
        }
    }
}
</script>
<style >
* {
    margin: 0;
    padding: 0;
}
html, body,#main-app {
    height: 100%;
    width: 100%;
}
</style>
<style scoped>

#main-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  height: 100%;
}
.main-section{
    flex-grow: 1;
    height: 100%;
}

.main-menu {
  width: 50px;
  background: rgba(0,18,45,.86);
}
.main-menu-item{
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: white;
    cursor: pointer;
}
</style>
