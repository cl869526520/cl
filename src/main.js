import Vue from "vue"

//导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
    // 每次进入先加载
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state: { //this.$store.state.***
        car: car //储存购物车中的数据
    },
    mutations: { //this.$store.commit('方法名称',"根据自己需要传递一个值")
        addToCar(state, goodsinfo) {

            var flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
            //当更新car后把car数组存储到本地的localstorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值
            state.car.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count = parseInt(goodsinfo.count)
                        return true
                    }
                })
                // 修改完数量之后,把最新的购物车数据,保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        removeFormCar(state, id) {
            state.car.some((item, i) => {
                    if (item.id == id) {
                        state.car.splice(i, 1)
                        return true;
                    }
                })
                // 修改完数量之后,把最新的购物车数据,保存到本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }

    },
    getters: { //this.$store.getters.***
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o;
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected

            })
            return o;
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0, //勾选的数量
                amount: 0 //勾选的总价
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o;
        }
    }
})


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
    router,
    store

})