import Vue from "vue"

//导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//导入缩略图插件
import VuePreview from 'vue-preview'

Vue.use(VuePreview)


import moment from 'moment'

//定义全局过滤器
Vue.filter("dataF", function(dataS, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataS).format(pattern)
})

import router from './router.js'

import "./assets/mui-master/dist/css/mui.css"

import "./assets/mui-master/dist/css/icons-extra.css"

import { Header, Swipe, SwipeItem, Button } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import axios from "axios";
axios.defaults.baseURL = "http://www.liulongbin.top:3005";
Vue.prototype.$http = axios;

//导入组件
import app from "./App.vue"

var vm = new Vue({
    el: "#app",
    data: {
        msg: 123
    },
    render: function(c) {
        return c(app)
    },
    router

})