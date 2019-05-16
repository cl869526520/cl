<template>
    <div>
        <mt-swipe  :auto="4000">
            <!-- 谁使用谁传递轮播图list -->
            <!-- 此时轮播图list是父组件给自组件传值 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:["lunbotuList","isfull"]
}
</script>
<style lang="less" scoped>
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            text-align: center;
            img{
                height: 100%;
            }
        }
    }
    .full{
        width: 100%;
    }
</style>
