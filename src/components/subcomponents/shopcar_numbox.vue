<template>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../assets/mui-master/dist/js/mui.js"
import { log } from 'util';
export default {
    mounted(){
        mui(".mui-numbox").numbox();
        console.log(this.max);
        console.log(this.$refs.numbox);
        
    },
    methods:{
        countChanged(){
        //  数量改变了
            console.log(this.$refs.numbox.value);
            //每当数量值改变,则立即把最新的数量同步到 购物车的store中
            //覆盖之前的数量值
            this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})
        }
    },
    props:["initcount",'goodsid']
    
}
</script>
<style lang="less" scoped>

</style>
