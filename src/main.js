import Vue from "vue"

//导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'

import "./assets/mui-master/dist/css/mui.css"

import "./assets/mui-master/dist/css/icons-extra.css"

import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

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