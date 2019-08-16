<template>
  <div class="main">
    <!-- swiper轮播 -->
    <van-swipe :autoplay="30000" class="vanswiper">
      <van-swipe-item v-for="(k, index) in swiperImages" :key="index">
        <img class="swiperImg" v-lazy="k.imagePath" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <van-grid :column-num="5" :square="square" :border="border">
      <van-grid-item v-for="(k,index) in serverData" :key="index" :icon="k.imagePath" />
    </van-grid>
    <!--特惠图片 -->
    <a><img class="teImg" v-for="(k,index) in teImg" :key="index" v-lazy="k.imagePath"></a>
    <!-- 丫丫头条 -->
    <div class="newSwiper">
      <img class="toutiao" src="../../../assets/toutiao.png" alt="">
      <van-swipe style="height: 20px;" :vertical="vertical" :autoplay="3000">
        <van-swipe-item class="shen" v-for="(k,index) in toudata" :key="index" v-text="k.title"></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品图片 -->
    <div class="flex">
      <a><img class="godImg1" v-for="(k,index) in godImg1" :key="index" v-lazy="k.imagePath"></a>
      <a><img class="godImg2" v-for="(k,index) in godImg2" :key="index" v-lazy="k.imagePath"></a>
      <a><img class="godImg1" v-for="(k,index) in godImg3" :key="index" v-lazy="k.imagePath"></a>
      <a><img class="godImg1" v-for="(k,index) in godImg4" :key="index" v-lazy="k.imagePath"></a>
      <a><img class="godImg3" v-for="(k,index) in godImg5" :key="index" v-lazy="k.imagePath"></a>
    </div>
    <!-- 商品列表-->
    <div class="hide">
      <ul class="list">
        <li v-for="(k,index) in oneData" :key="index">
          <a href=""> <img class="listImg" :src="k.imagePath" alt=""></a>
          <p class="fo font-13" v-text="k.title"></p>
          <p class="fo font-12" v-text="k.sellingPoint"></p>
          <p class="fo price" v-text="'￥'+k.price"></p>
        </li>
        <li>查看全部</li>
      </ul>
    </div>
    <!-- 手机精品 -->
    <a><img class="godImg3" v-for="(k,index) in boutique" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in boutique1" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in boutique2" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in boutique3" :key="index" v-lazy="k.imagePath"></a>
    <!-- 乐享生活 -->
    <a><img class="godImg3" v-for="(k,index) in lift" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in lift1" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in lift2" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in lift3" :key="index" v-lazy="k.imagePath"></a>
    <!-- 趣购频道 -->
    <a><img class="godImg3" v-for="(k,index) in like" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg2" v-for="(k,index) in myLike1" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in myLike" :key="index" v-lazy="k.imagePath"></a>
    <a><img class="godImg1" v-for="(k,index) in like2" :key="index" v-lazy="k.imagePath"></a>
    <!-- 猜你喜欢 -->
    <a><img class="godImg3" v-for="(k,index) in godlists" :key="index" v-lazy="k.imagePath"></a>
    <ul class="likelist">
      <li v-for="(k,index) in mainGodLists" :key="index">
        <a href=""> <img class="likeImg" :src="k.imagePath" alt=""></a>
        <p class="all font-13-color" v-text="k.title"></p>
        <p class="all font-14" v-text="k.sellingPoint"></p>
        <p class="all prices" v-text="'￥'+k.price"></p>
      </li>
    </ul>
    <p class="foot-list">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //轮播图
      swiperImages: '',
      //服务图标
      serverData: '',
      border: false,
      square: true,
      //特惠图片
      teImg: '',
      //头条数据
      toudata: '',
      vertical: true,
      //商品图片
      godImg: '',
      godImg3: '',
      godImg4: '',
      godImg5: '',
      //实惠精品数据
      listData: '',
      //手机精品数据
      boutique: '',
      boutique1: '',
      boutique2: '',
      boutique3: '',
      //乐享生活
      lift: '',
      lift1: '',
      lift2: '',
      lift3: '',
      //趣购频道
      like: '',
      like1: '',
      like2: '',
      like3: '',
      //猜你喜欢
      godlists: '',
      mainGodList1: '',
      mainGodList2: '',
    }
  },
  async created() {
    let maindata = await this.$axios(
      "http://localhost:3000/maindata"
    )
    //轮播图
    this.swiperImages = maindata.data[1].data.container.floor[0].content
    //从仓库获取服务数据
    this.serverData = maindata.data[1].data.container.floor[1].content
    //从仓库获取服务特惠图片
    this.teImg = maindata.data[1].data.container.floor[2].content
    //从仓库获取头条数据
    this.toudata = maindata.data[1].data.container.floor[3].content
    //从仓库获取商品图片
    this.godImg = maindata.data[1].data.container.floor[4].content
    this.godImg3 = maindata.data[1].data.container.floor[5].content
    this.godImg4 = maindata.data[1].data.container.floor[6].content
    this.godImg5 = maindata.data[1].data.container.floor[7].content

    //从仓库获取实惠精品数据
    this.listData = maindata.data[2].data.list
    //从仓库获取手机精品数据
    this.boutique = maindata.data[1].data.container.floor[9].content
    this.boutique1 = maindata.data[1].data.container.floor[10].content
    this.boutique2 = maindata.data[1].data.container.floor[11].content
    this.boutique3 = maindata.data[1].data.container.floor[12].content
    //从仓库获取乐享生活数据
    this.lift = maindata.data[1].data.container.floor[13].content
    this.lift1 = maindata.data[1].data.container.floor[14].content
    this.lift2 = maindata.data[1].data.container.floor[15].content
    this.lift3 = maindata.data[1].data.container.floor[16].content
    //从仓库获取趣购频道数据
    this.like = maindata.data[1].data.container.floor[17].content
    this.like1 = maindata.data[1].data.container.floor[18].content
    this.like2 = maindata.data[1].data.container.floor[19].content
    //猜你喜欢
    this.godlists = maindata.data[1].data.container.floor[20].content
    this.mainGodList1 = maindata.data[1].data.container.floor[21].content
    this.mainGodList2 = maindata.data[1].data.container.floor[22].content
  },
  computed: {
    godImg1() {
      return this.godImg.slice(0, 1)
    },
    godImg2() {
      return this.godImg.slice(1)
    },
    oneData() {
      return this.listData.slice(0, 6)
    },
    myLike1() {
      return this.like1.slice(0, 2)
    },
    myLike() {
      return this.like1.slice(2)
    },
    mainGodLists() {
      return this.mainGodList1.concat(this.mainGodList2)
    }

  }

}

</script>
<style>
.vanswiper {
  background: linear-gradient(#fcb72e, #fcb72e 70%, #fff 0, #fff);
}
.van-swipe .van-swipe__indicators {
  bottom: 2rem;
}
.swiperImg {
  width: 100%;
  height: 190px;
  border-radius: 20px;
  padding: 1rem;
  box-sizing: border-box;
}
.van-grid {
  width: 100%;
}
.van-grid-item .van-grid-item__content .van-grid-item__icon {
  font-size: 75px;
}
.teImg {
  width: 50%;
}
.newSwiper {
  margin: 1rem;
  background: #fff;
}
.toutiao {
  height: 1rem;
  float: left;
  margin: 0 15px;
}
.shen {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
}
.flex {
  font-size: 0;
}
.godImg1 {
  width: 50%;
}
.godImg2 {
  width: 25%;
}
.godImg3 {
  width: 100%;
}
.hide {
  width: 100%;
  overflow-x: scroll;
}
.list {
  padding: 1rem;
  float: left;
  /* width: 1040px; */
  width: 1072px;
}

.list li {
  width: 140px;
  margin-right: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #e1e1e1;
  border-radius: 3px;
  float: left;
}
.list li:last-child {
  margin-right: 0;
  text-align: center;
  line-height: 193px;
  color: #9c9c9c;
  font-size: 14px;
}
.listImg {
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  text-align: center;
}
.all,
.fo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 3px;
  margin-bottom: 0;
}
.font-13 {
  font-size: 13px;
}
.font-12 {
  font-size: 12px;
  color: #9c9c9c;
}
.price {
  color: #fb4e44;
  font-size: 14px;
}
.likelist {
  padding: 0 14px;
  float: left;
  margin-bottom: 10px;
}
.likelist li {
  float: left;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
  border-radius: 3px;
}
.likelist li:nth-child(2n-1) {
  margin-right: 7px;
}
.likeImg {
  margin: 10px;
  width: 150px;
}
.font-13-color {
  font-size: 13px;
  color: #87acd8;
  background: #ebf6fe;
  width: 170px;
  padding: 3px 0px 5px 15px;
}
.font-14 {
  font-size: 14px;
  width: 170px;
  padding: 3px 0px 5px 15px;
  box-sizing: border-box;
}
.prices {
  padding: 0px 15px;
  color: #fb4e44;
  font-size: 14px;
  margin-bottom: 10px;
}
.foot-list {
  padding: 10px;
  text-align: center;
  color: #6b6b6b;
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 50px;
}
</style>




