<template>
    <div style="margin-left: 85px;">
        <van-image width="285" height="120" src="https://img2.yaya.cn/pic/category/201905230620130.jpg.webp" />
        <dl class="re" v-for="(k,index) in title" :key="index">
            <dt v-text="k"></dt>
            <dd class="shop">
                <!--宫格 -->
                <van-grid :border="false" :column-num="4">
                    <van-grid-item v-for="(k,index) in main[index]" :key="index" :icon="k.picture" :text="k.title" />
                </van-grid>
            </dd>
        </dl>

    </div>
</template>
<script>
export default {
    data() {
        return {
            title: [],
            main: [],
        }
    },
    async created() {
        let shopdata = this.$store.getters.getListData
        //保护壳
        this.title[0] = shopdata[8].children[0].title;
        this.main[0] = shopdata[8].children[0].children;
        this.title.push(this.title1);
        this.main.push(this.main1);
        //保护膜
        this.title[1] = shopdata[8].children[1].title;
        this.main[1] = shopdata[8].children[1].children;




    },
}
</script>

<style scoped>
.van-image {
  padding: 10px;
}
.van-image img {
  border-radius: 4px;
}
.re {
  margin: 15px 8px;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
}
.re dt {
  padding: 0 8px;
}
.shop {
  margin: 0;
}
.van-grid-item {
  height: 110px;
}
</style>

