<template>
  <div id="app">
    <router-view></router-view>
    <TabberUse></TabberUse>
  </div>
</template>

<script>
import TabberUse from "./components/tabber-use/tabber-use";
export default {
  name: "app",
  components: {
    TabberUse
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
