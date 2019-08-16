<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar
        left-arrow
        @click-left="leftBtn"
      >
        <van-tabs
          v-model="active"
          slot="title"
        >
          <van-tab title="商品"></van-tab>
          <van-tab title="评论"></van-tab>
          <van-tab title="详情"></van-tab>
        </van-tabs>
        <van-icon
          name="weapp-nav"
          slot="right"
        />
      </van-nav-bar>
    </div>
    <!-- 内容 -->
    <div class="main">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-media title="1/10">
          <img :src="detaildata.imagePath">
        </mu-card-media>
        <mu-card-title
          :title="detaildata.name"
          :sub-title="detaildata.profile"
        >

        </mu-card-title>
        <mu-card-text
          class="price"
          v-text="`￥${detaildata.price}`"
        ></mu-card-text>
        <mu-card-actions>

          <span>
            <mu-icon
              value="offline_pin"
              :size="14"
            ></mu-icon>
            价格走势
          </span>
          <span>
            <mu-icon
              value="offline_pin"
              :size="14"
            ></mu-icon>降价通知
          </span>
          <span>
            <mu-icon
              value="offline_pin"
              :size="14"
            ></mu-icon>机型对比
          </span>
          <span>
            <mu-icon
              value="offline_pin"
              :size="14"
            ></mu-icon>开箱展示
          </span>
        </mu-card-actions>
      </mu-card>
      <div class="one">规格</div>
      <div class="over">
        <ul class="spec">
          <li
            v-for="(k,index) in params"
            :key="index"
          >
            <van-icon
              :name="k.imgPath"
              :size="24"
            />
            <p v-text="k.key"></p>
            <p v-text="k.value"></p>
          </li>

        </ul>
      </div>

    </div>

    <!-- 底部 -->
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-icon
        icon="star-o"
        text="收藏"
      />
      <van-goods-action-icon
        info="5"
        icon="cart-o"
        text="购物车"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button
        @click="shopping"
        type="danger"
        text="立即购买"
      />
    </van-goods-action>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      params: '',
      detaildata: '',
    }
  },
  methods: {
    shopping() {
      this.$router.push({
        name: 'cart'
      })
    },
    leftBtn() {
      this.$router.go(-1);
    }
  },
  async created() {
    //获取url上的参数(商品ID)
    // console.log(this.$route.params.id);
    let godid = this.$route.params.id
    let shopdata = await this.$axios('http://localhost:3000/detail', {
      params: {
        'godid': godid
      }
    });
    // console.log(shopdata.data);
    this.detaildata = shopdata.data[0]

    let paramsdata = await this.$axios(
      "https://www.easy-mock.com/mock/5d4d79b0cd19127d7f323cf6/example/params"
    )
    // console.log(paramsdata.data.data.params);
    this.params = paramsdata.data.data.params

  },

}
</script>
<style scoped>
.van-nav-bar__title {
  height: 50px;
}
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: #ffffff;
}
.main {
  margin-bottom: 50px;
  margin-top: 54px;
}
.mu-card-title-container .mu-card-title {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}
.mu-card-title-container .mu-card-sub-title {
  color: #fb4e44;
  font-size: 12px;
}
.mu-card-title-container {
  padding: 16px 16px 0;
}
.price {
  font-size: 22px;
  font-weight: bold;
  color: #fb4e44;
  padding: 0 16px;
}
.mu-card-media .mu-card-media-title .mu-card-title {
  font-size: 15px;
  color: #fff;
  float: right;
  line-height: 35px;
  margin-right: 10px;
}
.mu-card-actions {
  padding: 0 16px;
}
.mu-card-actions span {
  padding: 0 8px;
}
.mu-card-media-title {
  padding: 0;
}
.over {
  width: 309px;
  margin-left: 48px;
  overflow-y: auto;
}
.spec {
  width: 1300px;
}
.spec li {
  float: left;
  text-align: center;
  padding: 10px;
}
.spec li p {
  margin: 0;
  font-size: 13px;
  width: 75px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.one {
  text-align: center;
  width: 48px;
  line-height: 90px;
  background: #fff;
  float: left;
}
</style>


