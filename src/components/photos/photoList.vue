<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                    <a :class="['mui-control-item',item.id===0 ? 'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from "../../assets/mui-master/dist/js/mui.js"

export default {
    data(){
        return{
            cates:[],
            list:[]//图片列表的数组
        }
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    created(){
        this.getAllCategory();
        //默认进入页面 就请求所有数据
        this.getPhotoListByCateId(0);
    },
    methods:{
        getAllCategory(){
            this.$http.get("api/getimgcategory").then(result=>{
                // console.log(result);  
                if(result.data.status===0){
                    result.data.message.unshift({title:"全部",id:0});
                    this.cates =result.data.message
                }
            })
        },
        getPhotoListByCateId(cateId){
            this.$http.get("api/getimages/"+cateId).then(result=>{
                console.log(result);
                if(result.data.status===0){
                    this.list =result.data.message
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    *{
        touch-action: pan-y
    }
    
    .photo-list{
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li{
            background-color: #ccc;
            text-align: center;
            list-style: none;
            margin-bottom: 10px;
            box-shadow:  0 0 6px #999;
            position: relative;
            img{
                width: 100%;
                vertical-align: middle;
            }
            img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
            }
        }
    }
    .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 83px;
        .info-title{
            font-size:14px;
        }
        .info-body{
                font-size: 13px;
        }
    }
</style>
