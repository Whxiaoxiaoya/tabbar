<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
    <b-scroll class="content" ref="wrapper" @scroll="scroll">
      <home-swiper :bannerList="bannerList"></home-swiper>
      <recommend :recommend='recommend'></recommend>
      <tab-control :titles="TabControl" @tabActiveIndex="tabActiveIndex"></tab-control>
      <ul>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>ffff</li>
      </ul>
      <ul>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>dddd</li>
        <li>ffff</li>
      </ul>
    </b-scroll>
    <back-top @click.native="backTop" v-show="backtopShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/navbar.vue'
import {getHomeList} from 'network/home.js'
import HomeSwiper from './childComps/HomeSwiper'
import Recommend from './childComps/recommend'
import TabControl from 'components/content/tabcontrol.vue'
import BScroll from 'components/common/bscroll/BScroll.vue'
import BackTop from 'components/content/back-top.vue'
export default {
  components:{
    NavBar,
    HomeSwiper,
    Recommend,
    BScroll,
    BackTop,
    TabControl
  },
  data() {
    return {
      BScroll:'',
      bannerList:[],
      recommend:[],
      backtopShow:false,
      TabControl:['流行','新款','精选'],
      currnTabType:"pop"
    }
  },
  created() {
    getHomeList().then(res=> {
      console.log(res)
      let {banner,recommend,}=res.data
      this.bannerList=banner.list;
      this.recommend=recommend.list;
    })
  },
  methods:{
    tabActiveIndex(index) {
      switch(index) {
        case 0:
          this.currnTabType= 'pop'
          break
        case 1:
          this.currnTabType='new'
          break
        case 2:
          this.currnTabType='sell'
          break
      }
    },
    scroll(position) {
        this.backtopShow=(-position.y)>600
    },
    backTop() {
      this.$refs.wrapper.scrollTo(0,0)
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}
.home-nav {
  background-color: pink;
  color: #ffffff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
