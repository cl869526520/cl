<template>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="itme in newslist" :key="itme.id">
            <router-link :to="'/home/newsinfo/'+itme.id">
                <img class="mui-media-object mui-pull-left" :src="itme.img_url">
                <div class="mui-media-body">
                    <h1>{{itme.title }}</h1>
                    <p class="mui-ellipsis">
                        <span>发表时间:{{itme.add_time | dataF}}</span>
                        <span>点击:{{itme.click}}次</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>

</template>
<script>
import{Toast}  from 'mint-ui'
export default {
    data() {
        return {
            newslist:[]
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            this.$http.get("/api/getnewslist").then(result => {
                
                
                if(result.data.status === 0){
                    this.newslist=result.data.message;
                }else{
                    Toast('加载轮列表失败')
                }
                // console.log(this.newslist);
            })
        }
    },
}
</script>
<style lang="less" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color: yellowgreen;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
