<template>
  <div id="app">
    <router-view></router-view>
    <tabbar-use></tabbar-use>
  </div>
</template>

<script>
import TabbarUse from "components/content/tabbar-use/tabbar-use";
export default {
  name: "app",
  components: {
    TabbarUse
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
