<template>
  <tabbar>
    <tabbar-item link="/home" textColor="red">
      <img slot="tabbar-img" src="~assets/img/logo.png" alt>
      <img slot="tabbar-img-active" src="~assets/img/1.svg" alt>
      <div slot="tabbar-text">首页</div>
    </tabbar-item>
    <tabbar-item link="/cartgrate">
      <img slot="tabbar-img" src="~assets/img/logo.png" alt>
      <img slot="tabbar-img-active" src="~assets/img/2.svg" alt>
      <div slot="tabbar-text">分类</div>
    </tabbar-item>
    <tabbar-item link="/cart">
      <img slot="tabbar-img" src="~assets/img/logo.png" alt>
      <img slot="tabbar-img-active" src="~assets/img/3.svg" alt>
      <div slot="tabbar-text">购物车</div>
    </tabbar-item>
    <tabbar-item link="/my">
      <img slot="tabbar-img" src="~assets/img/logo.png" alt>
      <img slot="tabbar-img-active" src="~assets/img/4.svg" alt>
      <div slot="tabbar-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar.vue";
import TabbarItem from "components/common/tabbar/tabbar-item.vue";
export default {
  components: {
    tabbar,
    TabbarItem
  },
  methods: {}
};
</script>

<style>
</style>
