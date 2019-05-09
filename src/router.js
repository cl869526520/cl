import VueRouter from 'vue-router'

//导入路由组件
import HomeContainer from "./components/tabbar/homeContainer.vue"
import MemberContainer from "./components/tabbar/memberContainer.vue"
import SearchContainer from "./components/tabbar/searchContainer.vue"
import ShopcarContainer from "./components/tabbar/shopcarContainer.vue"
import NewsList from "./components/news/NewsList.vue"
import NewsInfo from "./components/news/NewsInfo.vue"
import PhotoList from "./components/photos/photoList.vue"
import PhotoInfo from "./components/photos/PhotoInfo.vue"
var router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: SearchContainer },
        { path: "/search", component: ShopcarContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo }
    ],
    linkActiveClass: 'mui-active' //替换样式
})

export default router