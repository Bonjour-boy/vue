<template>
    <div style="margin-left: 85px;">
        <van-image width="285" height="120" src="https://img2.yaya.cn/pic/category/201906031150490.jpg.webp" />
        <dl class="re">
            <dt>热门品牌</dt>
            <dd class="shop">
                <!--宫格 -->
                <van-grid :border="false" :column-num="4">
                    <van-grid-item v-for="(k,index) in main1" :key="index" @click="shopdetail" :icon="k.picture" :text="k.title" />
                </van-grid>
            </dd>
        </dl>
        <dl class="re">
            <dt>更多品牌</dt>
            <dd class="shop">
                <!--宫格 -->
                <van-grid :border="false" :column-num="4">
                    <van-grid-item v-for="(k,index) in main2" :key="index" :icon="k.picture" :text="k.title" />
                </van-grid>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //热门品牌
            main1: '',
            //更多品牌
            main2: '',

        }
    },
    methods: {
        shopdetail() {
            this.$router.push({
                name: 'list'
            })
        }
    },
    async created() {
        let shopdata = await this.$axios(
            "http://localhost:3000/shoplist"
        )

        this.main1 = shopdata.data[0].data[0].children[0].children;
        this.main2 = shopdata.data[0].data[0].children[1].children;
    }

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

