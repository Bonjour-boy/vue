<template>
    <div>
        <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="leftBtn">
            <van-icon name="weapp-nav" slot="right" />
        </van-nav-bar>
        <div class="flex">
            <van-field left-icon="contact" @blur="blur_user" :error-message="res" v-model="username" required clearable placeholder="手机号码" />
            <van-field left-icon="lock" v-model="password" type="password" required clearable placeholder="请输入密码" />
            <van-field left-icon="replay" v-model="yanzhen" placeholder="图像验证码" required>
            </van-field>
            <img class="random" src="../../assets/v1.jpg" alt="">
        </div>
        <van-field left-icon="phone-circle-o" v-model="phone" placeholder="手机验证码" required>
            <van-button slot="button" size="small" type="primary">发送</van-button>
        </van-field>
        <div class="btn">
            <van-button type="primary" @click="sign">注册</van-button>
        </div>

    </div>
</template>
<script>
import Qs from 'qs'
export default {
    data() {
        return {
            username: '',
            password: '',
            yanzhen: '',
            phone: '',
            res: ''
        }
    },
    methods: {
        blur_user() {
            this.res = ''
            let da1 = Qs.stringify({
                username: this.username,
            })

            this.$axios({
                url: 'http://localhost:3000/logup',
                method: 'post',
                data: da1,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then((str) => {
                // console.log(str.data);
                if (str.data == 'N') {
                    this.res = '该用户已被注册'
                }
            })
        },
        sign() {
            this.res = ''
            let da2 = Qs.stringify({
                username: this.username,
                password: this.password,
            })
            this.$axios({
                url: 'http://localhost:3000/logup',
                method: 'post',
                data: da2,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }).then((str) => {
                // console.log(str.data);
                if (str.data == 'Y') {
                    this.$toast('注册成功');
                } else {
                    this.$toast('注册失败');
                }
            })
        },
        leftBtn() {
            this.$router.go(-1);
        }
    }

}
</script>

<style>
html body {
  background: #fff;
}
.flex {
  margin-top: 30px;
  position: relative;
}
.random {
  width: 72px;
  height: 24px;
  float: right;
  margin-right: 15px;
  margin-top: -35px;
  position: relative;
}
.van-field__button .van-button {
  color: #333;
  background: #fff;
  border: none;
  border-left: 1px solid #ccc;
}
</style>


