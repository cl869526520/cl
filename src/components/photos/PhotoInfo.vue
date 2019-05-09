<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{photoinfo.add_time | dataF}}</span>
            <span>点击:{{photoinfo.click}}次</span>
        </p>

        <hr>
        <!-- 缩略图区域 -->
        <vue-preview :slides="list" @close="handleClose"></vue-preview>
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,
            photoinfo:[],
            list:[]
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
            this.$http.get("api/getimageInfo/"+this.id).then(result=>{
                
                if(result.data.status===0){
                    this.photoinfo =result.data.message[0];
                }
            })
        },
        getThumbs(){
             this.$http.get('/api/getthumimages/'+this.id).then(result=>{
                 
                if(result.data.status===0){
                    //循环每个图片数据,补全图片的宽和高
                    result.data.message.forEach(item=>{
                        item.w=600,
                        item.h=400
                        item.msrc=item.src
                    });
                    //把完整数据保存到list中
                     this.list =result.data.message
                    console.log(this.list);
                    
                }
             }) 
        },
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        // 注册评论子组件
        'cmt-box':comment
    }
}
</script>

<style lang="less" >
.photoinfo-container{
    padding: 3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .my-gallery{
        figure{
            display: inline-block;
            margin: 5px;
            img{
                width: 100px;
                height: 100px;
                box-shadow: 0 0 8px #999
            }
        }
        
    }

}

</style>
