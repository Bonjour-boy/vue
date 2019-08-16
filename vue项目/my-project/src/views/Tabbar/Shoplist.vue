<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <van-nav-bar left-arrow @click-left="leftBtn">
                <van-search width="250px" shape="round" slot="title" placeholder="请输入搜索关键词" v-model="value" />
                <van-icon name="weapp-nav" slot="right" />
            </van-nav-bar>
        </div>
        <div class="main">
            <!-- 侧边栏 -->
            <van-sidebar v-model="activeKey" style="float:left">
                <van-sidebar-item @click="test" v-for="(k,index) in sidedata" :key="index" :title="k.title" />
            </van-sidebar>
            <!-- main内容 -->
            <Tab1 v-if="select==0" />
            <Tab2 v-if="select==1" />
            <Tab3 v-if="select==2" />
            <Tab4 v-if="select==3" />
            <Tab5 v-if="select==4" />
            <Tab6 v-if="select==5" />
            <Tab7 v-if="select==6" />
            <Tab8 v-if="select==7" />
            <Tab9 v-if="select==8" />
        </div>
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
import Tab1 from './Tabs/Tab1'
import Tab2 from './Tabs/Tab2'
import Tab3 from './Tabs/Tab3'
import Tab4 from './Tabs/Tab4'
import Tab5 from './Tabs/Tab5'
import Tab6 from './Tabs/Tab6'
import Tab7 from './Tabs/Tab7'
import Tab8 from './Tabs/Tab8'
import Tab9 from './Tabs/Tab9'
export default {
    components: {
        Tab1,
        Tab2,
        Tab3,
        Tab4,
        Tab5,
        Tab6,
        Tab7,
        Tab8,
        Tab9,

    },
    data() {
        return {
            value: '',
            active: 1,
            activeKey: '',
            sidedata: '',
            select: 0
        }
    },
    async created() {
        let shopdata = await this.$axios(
            "http://localhost:3000/shoplist"
        )
        this.sidedata = shopdata.data[0].data;
        this.$store.dispatch('setListData', this.sidedata);

    },
    methods: {
        test(index) {
            // 
            this.select = index;
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
        leftBtn() {
            this.$router.go(-1);
        }
    }

}
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.main {
  margin-top: 50px;
}
.van-nav-bar .van-nav-bar__title {
  max-width: 85%;
}
.van-nav-bar__title .van-search {
  padding: 5px 12px;
}
.van-sidebar {
  width: 90px;
}
.van-sidebar .van-sidebar-item {
  padding: 12px;
}
.van-sidebar .van-sidebar-item--select {
  border-color: #4fbaa1;
}
</style>   


