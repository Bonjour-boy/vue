<template>
    <div>
        <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="leftBtn">
            <van-icon name="weapp-nav" slot="right" />
        </van-nav-bar>
        <van-tabs type="card" @click="test" title-inactive-color="#9c9c9c" title-active-color="#333" background="#fff">
            <van-tab title="短信验证码登录"></van-tab>
            <div class="line">|</div>
            <van-tab title="账号密码登录"></van-tab>
        </van-tabs>
        <!-- 账号密码输入框 -->
        <van-field left-icon="contact" v-model="username" required clearable :placeholder="ip?placeholder1[0]:placeholder1[1]" />
        <van-field left-icon="lock" v-model="password" type="password" :placeholder="ip?placeholder2[0]:placeholder2[1]" required>
            <van-button v-if="hide" slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
        <van-switch-cell v-model="checked" title="三个月内免登录" />

        <div class="btn">
            <van-button type="primary" @click="login">登录</van-button>
        </div>
        <p class="new">
            <a href="javascript:;" @click="logup" style="float:left;color:#333">新用户注册</a>

            <a href="" style="float:right;color:#333">忘记密码</a>
        </p>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
    data() {
        return {
            username: '',
            password: '',
            checked: '',
            placeholder1: ['手机号码', '用户名/手机号'],
            placeholder2: ['动态密码', '请输入密码'],
            ip: true,
            hide: true,
        }
    },
    methods: {
        test() {
            if (this.ip) {
                this.ip = false;
                this.hide = false;
            } else {
                this.ip = true;
                this.hide = true;
            }
        },

        login() {
            let da1 = Qs.stringify({
                username: this.username,
                password: this.password
            })
            this.$axios({
                url: 'http://localhost:3000/login',
                method: 'post',
                data: da1,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then((str) => {
                // console.log(str);
                if (str.data == 'Y') {
                    this.$toast('登录成功');
                } else {
                    this.$toast('登录失败');
                }
            })

        },
        logup() {
            // console.log(666);
            this.$router.push({
                name: "logup",
            })
        },
        leftBtn() {
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.van-tabs__wrap .van-tabs__nav--card .van-tab.van-tab--active {
  background: none;
  border-right: none;
}
.van-tabs__wrap .van-tabs__nav--card {
  border: none;
}
.van-tabs__wrap .van-tabs__nav--card .van-tab {
  border-right: none;
}
.van-tabs__wrap {
  position: relative;
  margin-bottom: 30px;
}
.line {
  position: absolute;
  left: 50%;
  top: 32px;
  font-size: 15px;
}
.van-ellipsis {
  font-size: 14px;
}
.van-cell .van-field__left-icon .van-icon {
  font-size: 20px;
}
.btn .van-button {
  height: 45px;
  margin: 20px;
  border-radius: 45px;
  margin-top: 40px;
  width: 335px;
}
.new {
  margin: 0 20px;
}
.van-field__button .van-button--small {
  height: 24px;
  line-height: 22px;
}
</style>

