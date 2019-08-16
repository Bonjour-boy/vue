<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar
        left-arrow
        @click-left="leftBtn"
      >
        <van-search
          width="250px"
          shape="round"
          slot="title"
          placeholder="请输入搜索关键词"
          v-model="value"
        />
        <van-icon
          name="weapp-nav"
          slot="right"
        />
      </van-nav-bar>
    </div>
    <!-- 下拉菜单 -->
    <van-dropdown-menu
      :class="{fixe:isFixe}"
      class="select"
    >
      <van-dropdown-item
        v-model="value1"
        :options="menu|handleMenu"
      />
      <van-dropdown-item
        v-model="value2"
        :options="menu|handleMenu"
      />
      <van-dropdown-item
        v-model="value3"
        :options="menu|handleMenu"
      />
      <van-dropdown-item
        v-model="value4"
        :options="menu|handleMenu"
      />
    </van-dropdown-menu>
    <!-- main -->

    <!-- 列表加载 -->
    <div class="lists">
      <van-list
        style="margin-bottom: 50px;"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getListOnLoad"
      >
        <!-- 商品列表-->
        <van-card
          v-for="(k,index) in restaurant"
          :key="index"
          @click="detail(index)"
          :desc="k.tag"
          :price="k.price"
          :title="k.name"
          :thumb="k.imagePath"
        >
          <div slot="tags">
            <van-tag
              plain
              type="danger"
            >{{k.commentCount}}人评价</van-tag>
            <van-tag
              plain
              type="danger"
            >好评率{{k.praiseRate}}</van-tag>
          </div>
          <div slot="bottom">
            <a :href="k.rank.link">{{k.rank.text}}</a>
          </div>
          <div
            slot="bottom"
            class="old"
          >
            <a :href="k.bargain.url">一手优品{{k.bargain.price}}</a>
            <a :href="k.secondHand.url">二手良品{{k.secondHand.price}}</a>
          </div>
        </van-card>
      </van-list>
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
      active: 0,
      value: '',
      value1: 0,
      value2: 2,
      value3: 3,
      value4: 4,
      menu: [],
      isFixe: false,
      //懒加载
      restaurant: [],
      // list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    async getListOnLoad() {
      let shopdata = await this.$axios(
        "https://www.easy-mock.com/mock/5d4d79b0cd19127d7f323cf6/example/shoplist"
      );
      // console.log(shopdata.data.data.product.list);
      this.restaurant = [...this.restaurant, ...shopdata.data.data.product.list];


      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.restaurant.length >= 40) {
        this.finished = true;
      }
    },
    detail(index) {
      // console.log(this.restaurant[index].id);
      // console.log(index);
      //把商品id传到详情页
      let godid = this.restaurant[index].id
      this.$router.push({
        path: '/detail/' + godid
      })
    },
    leftBtn() {
      this.$router.go(-1);
    }
  },
  async created() {
    // 获取下拉菜单
    let bar = await this.$axios(
      "https://www.easy-mock.com/mock/5d4d79b0cd19127d7f323cf6/example/nav"
    );
    // console.log(bar.data.inside_sort_filter);
    this.menu = bar.data.inside_sort_filter;
    //商品
    this.getListOnLoad();
    // let shopdata = await this.$axios(
    //     "https://www.easy-mock.com/mock/5d4d79b0cd19127d7f323cf6/example/shoplist"
    // );
    // // console.log(shopdata.data.data.product.list);
    // this.list = shopdata.data.data.product.list;

  },
  filters: {
    handleMenu(menu) {
      let newMenus = [];
      menu.map((item, index) => {
        //   往对象里面新增一个text属性值
        item.text = item.name;
        item.value = index;
        // 构造一个新的数组
        newMenus.push(item);
      })
      return newMenus;
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
  background: #ffffff;
}
.van-ellipsis {
  max-width: 80%;
}
.van-nav-bar {
  height: auto;
}
.van-tag {
  margin-bottom: 8px;
}
.van-card__price {
  font-size: 16px;
  font-weight: bold;
}
.van-card__bottom a {
  color: #333;
}
.select {
  margin-top: 54px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.lists {
  margin-top: 104px;
}
.old {
  margin-top: 5px;
}
.old a {
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  padding: 0 5px;
  margin-right: 5px;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  width: 100px;
  float: left;
}
.van-card__content .van-card__title {
  font-size: 14px;
  font-weight: bold;
}
</style>


