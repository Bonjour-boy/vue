<template>
  <div class="shopcart">
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar left-arrow @click-left="leftBtn">
        <h3 slot="title">购物车</h3>
        <span slot="right">编辑</span>
      </van-nav-bar>
      <div class="header_1">
        <h2>购物车</h2>
        <p>共9件商品</p>
      </div>
    </div>
    <!-- 内容 -->
    <div class="maincart">
      <van-checkbox class="checktop" v-model="checkedTop" checked-color="#fcb72e"> </van-checkbox>
      <van-card class="cart" price="2.00" title="
                华为 nova 4 （VCE-AL00）全网通高配版 贝母白 8GB+128GB " thumb="https://img2.yaya.cn/pic/product/440x440/20181217153611696.jpg">
        <div slot="num">
          <van-stepper v-model="value" />
        </div>
        <div slot="bottom" class="old">
          <a href="">
            <van-icon class="icon1" name="checked" />
            <b class="serve">选服务</b>
            <van-icon class="icon2" name="arrow" />
          </a>
        </div>
      </van-card>
    </div>
    <!-- 底部 -->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#fcb72e">全选</van-checkbox>
      <span slot="tip">
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </span>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedTop: '',
      checked: '',
      value: 1
    }
  },
  methods: {
    onSubmit() {

    },
    leftBtn() {
      this.$router.go(-1);
    }
  }
}
</script>


<style>
.checktop .van-checkbox__icon {
  position: absolute;
  left: 25px;
  z-index: 100;
  top: 60px;
}
.shopcart .van-checkbox .van-icon {
  border-color: #666;
}
</style>
<style scoped>
h3 {
  margin: 0;
}
.header .van-nav-bar {
  background: none;
}
.header {
  background: url(../../assets/head.png);
  background-size: 100% 100%;
}
.header_1 {
  padding: 10px;
}
.header_1 h2 {
  margin-bottom: 0;
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
}
.header_1 p {
  margin-top: 0;
}
.cart {
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  margin: 5px;
}
.maincart {
  margin-top: -40px;
  padding: 10px;
}
.van-card__thumb {
  width: 70px;
  height: 70px;
}
.van-card__header {
  margin-left: 10px;
  padding: 10px;
}
.van-card__title {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
}
.van-card__price {
  font-size: 15px;
}
.maincart {
  position: relative;
}
.old {
  position: absolute;
  top: 76px;
  left: -70px;
  /* text-align: center; */
}
.old a {
  display: block;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  height: 22px;
  font-size: 10px;
  margin-right: 5px;
  width: 78px;
  line-height: 20px;
}
.icon1,
.icon2,
.serve {
  vertical-align: middle;
}
.icon1 {
  margin: 0 5px;
}
.serve {
  color: #333;
  margin-left: 3px;
}
.icon2 {
  color: #333;
}
.van-submit-bar__bar {
  margin-left: 10px;
}
</style>

