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
import GoodsList from "./components/goods/GoodsList.vue"
import GoodsInfo from "./components/goods/GoodsInfo.vue"
import GoodsDesc from "./components/goods/GoodsDesc.vue"
import GoodsComment from "./components/goods/GoodsComment.vue"
var router = new VueRouter({
    routes: [
        { path: "/", redirect: '/home' },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoinfo/:id', component: PhotoInfo },
        {
            path: '/home/goodslist',
            component: GoodsList,
            beforeEnter: ((to, from, next) => {
                // ...
                console.log(to);
                console.log(from);
                next();
            })

        },
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }

    ],
    linkActiveClass: 'mui-active' //替换样式
})

router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    next();
})


export default router