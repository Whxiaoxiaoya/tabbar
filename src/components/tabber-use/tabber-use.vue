<template>
  <Tabber>
    <TabberItem link="/home" textColor="red">
      <img slot="tabber-img" src="../../assets/img/logo.png" alt>
      <img slot="tabber-img-active" src="../../assets/img/1.svg" alt>
      <div slot="tabber-text">首页</div>
    </TabberItem>
    <TabberItem link="/cartgrate">
      <img slot="tabber-img" src="../../assets/img/logo.png" alt>
      <img slot="tabber-img-active" src="../../assets/img/2.svg" alt>
      <div slot="tabber-text">分类</div>
    </TabberItem>
    <TabberItem link="/cart">
      <img slot="tabber-img" src="../../assets/img/logo.png" alt>
      <img slot="tabber-img-active" src="../../assets/img/3.svg" alt>
      <div slot="tabber-text">购物车</div>
    </TabberItem>
    <TabberItem link="/my">
      <img slot="tabber-img" src="../../assets/img/logo.png" alt>
      <img slot="tabber-img-active" src="../../assets/img/4.svg" alt>
      <div slot="tabber-text">我的</div>
    </TabberItem>
  </Tabber>
</template>

<script>
import Tabber from "../tabber/tabber.vue";
import TabberItem from "../tabber-item/tabber-item.vue";
export default {
  components: {
    Tabber,
    TabberItem
  },
  methods: {}
};
</script>

<style>
</style>
