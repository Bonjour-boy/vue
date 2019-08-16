<template>
    <div class="mine">
        <!-- 头部 -->
        <div class="header">
            <van-nav-bar left-arrow @click-left="leftBtn">
                <span slot="right" style="margin-right:5px;">设置</span>
                <van-icon :size="17" color="#000" slot="right" name="setting" />
            </van-nav-bar>
        </div>
        <!-- 内容 -->
        <div class="maincart">
            <van-card class="user" thumb="https://img2.yaya.cn/images/usericon.png.webp">
                <div slot="title" class="sign">
                    <a href="" class="login">登录</a>|
                    <a href="" class="logup">注册</a>
                </div>
                <ul slot="footer" class="me">
                    <li>
                        <span>0</span>
                        <p>账户余额</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>优惠卷</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>积分</p>
                    </li>
                    <li>
                        <span>0</span>
                        <p>丫币</p>
                    </li>

                </ul>
            </van-card>
        </div>
        <!-- 底部选项 -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="descending">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 1,
        }
    },
    methods: {
        leftBtn() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.header .van-nav-bar {
  background: none;
}
.header {
  height: 95px;
  background: url(../../assets/head.png);
  background-size: 100% 100%;
}
.user {
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  margin: 15px;
  margin-top: -40px;
}
.sign {
  margin-top: 30px;
}
.login,
.logup {
  padding: 5px;
  font-size: 14px;
  color: #333;
}
.me {
  display: flex;
}
.me li {
  flex: 1;
  text-align: center;
}
</style>
<style>
.mine .van-card__thumb .van-image img {
  border-radius: 50%;
  width: 76px;
  height: 76px;
}
</style>



