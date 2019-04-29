import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from "./components/tabbar/homeContainer.vue"
import MemberContainer from "./components/tabbar/memberContainer.vue"
import SearchContainer from "./components/tabbar/searchContainer.vue"
import ShopcarContainer from "./components/tabbar/shopcarContainer.vue"

var router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: SearchContainer },
        { path: "/search", component: ShopcarContainer }
    ],
    linkActiveClass: 'mui-active' //替换样式
})

export default router