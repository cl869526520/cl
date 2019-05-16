<template>
    <div class="goodsdesc-container">
       <h3>{{info.title}}</h3>
       <hr>

       <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            info:{}
        }
    },
    created(){
        this.getGoodsDesc()
    },
    methods:{
        getGoodsDesc(){
            console.log(this.id);
            
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                this.info=result.data.message[0]
            })
        }
    }
}
</script>
<style lang="less">
    .goodsdesc-container{
        padding: 4px;
        h3{
            font-size: 16px;
            color:#226aff;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
