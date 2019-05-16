<template>
    <div class="mui-numbox" data-numbox-min="1">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
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
            // console.log(this.$refs.numbox.value);
            
         this.$emit('getcount',parseInt(this.$refs.numbox.value))  
        }
    },
    props:["max"],
    // 属性监听
    watch:{
        'max':function(newVal,oldVal){
            console.log(newVal);
            
            mui(".mui-numbox").numbox().setOption("max",newVal)
        }
    }
}
</script>
<style lang="less" scoped>

</style>
