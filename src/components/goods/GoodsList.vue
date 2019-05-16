<template>
    <div class="goods-list" >
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖</span>
                    <span>剩{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div> 
        <mt-button  type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            pageindex:1,//默认显示第一页
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex="+this.pageindex).then(result=>{
                console.log(result);
                if(result.data.status===0){
                    this.goodslist =this.goodslist.concat(result.data.message)
                }
            })
        },
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id){
            // console.log(this);
            // 第一种
            this.$router.push('/home/goodsinfo/'+id)
            //传递对象方法
            // this.$router.push({path:'/home/goodsinfo/'+id})
            //传递命名路由
            // this.$router.push({name:"goodsinfo",params:{id}})
        }
    }
}
</script>
<style lang="less" scoped>
.goods-list{
    display: flex;
    flex-wrap:wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 280px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left:10px; 
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;    
            }
        }
    }
}
</style>
