<template>
    <div>
        <div class="head">
            <!-- 搜索框 -->
            <van-search v-model="value" placeholder="Mate 20X 5G版" show-action shape="round" @search="onSearch" background="none">
                <div slot="label">广州市</div>
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
            <!-- 头部nav -->
            <!-- <van-tabs v-model="active" animated background="none" line-height="0" :border="bool">
                <van-tab v-for="index in 4" :key="index" :title="topTitle[index-1]">
                </van-tab>
            </van-tabs> -->
        </div>
        <!-- 首页 -->
        <keep-alive>
            <Recommend></Recommend>
        </keep-alive>
        <!-- 底部选项 -->
        <van-tabbar v-model="active">
            <van-tabbar-item @click="tab1" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item @click="tab2" icon="descending">分类</van-tabbar-item>
            <van-tabbar-item @click="tab3" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item @click="tab4" icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
    

<script>
import 'vant/lib/icon/local.css';
import Recommend from "./Tabs/Recommend"
export default {
    data() {
        return {
            value: '',
            active: 0,
            bool: false,
            // topTitle: ['推荐', '以旧换新', '手机快修', '头条'],
            //底部
            footdata: '',
        }
    },
    components: {
        Recommend
    },
    methods: {
        onSearch() {

        },
        tab1() {
            this.$router.push({
                name: "home"
            })
        },
        tab2() {
            this.$router.push({
                name: "shoplist",
            })
        },
        tab3() {
            this.$router.push({
                name: "cart",
            })
        },
        tab4() {
            this.$router.push({
                name: "mine",
            })
        },


    },

}
</script>

<style>
.head {
  background: url(../../assets/head.png);
}
.van-search__content {
  background: #fff;
}
.van-ellipsis {
  font-size: 15px;
}
</style>



