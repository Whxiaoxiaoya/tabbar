<template>
  <div class="NavBar">
      <div class="navbar-left"><slot name="left"></slot></div>
      <div class="navbar-center"><slot name="center"></slot></div>
      <div class="navbar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.NavBar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1)
}
.navbar-left,.navbar-right {
    width: 48px;
}
.navbar-center {
    flex: 1;
}
</style>
