<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多吐槽120字)"  v-model="msg" maxlength="120">
            
        </textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="item.comtent">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}} &nbsp;&nbsp; 发表时间{{item.add_time | dataF}}
                </div>
                <div class="cmt-body">
                        {{item.content ===''? '此用户很懒':item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,//默认展示第一页数据,
            comments:[],
            msg:''
        }
    },
    created(){
        this.getComments()
    },

    methods:{
        getComments(){
            this.$http.get("api/getcomments/"+this.id+"?pageindex="+this.pageIndex).then(result=>{
                console.log(result);
                if(result.data.status === 0){
                    // this.comments = result.data.message;
                    // 数组方法：concat拼接数组数据
                    this.comments =this.comments.concat(result.data.message)
                }else{
                    Toast('获取评论失败')
                }
            })
        },
        getmore(){
            this.pageIndex++;
            this.getComments();
        },
        postComment(){
            if(this.msg.trim().length===0){
                 return Toast("评论内容不能为空")
            }
            // 发表评论 1请求的url地址 2提交的数据对象{content ：this.msg} 3定义提交表单中数据的格式 
            this.$http.post("api/postcomment/"+ this.$route.params.id,{content:this.msg.trim()}).then(result=>{
                console.log(result);
                if(result.data.status===0){
                // 拼接处一个评论对象
                    var cmt ={
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()   
                    };
                    this.comments.unshift(cmt)
                    this.msg=""; 
                }
            })
        }
        
    },
    // 获取自定义属性
    props:["id"]
}
</script>

<style lang="less" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 30px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
