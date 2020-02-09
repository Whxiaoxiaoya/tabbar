<template>
  <div id="tabber">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#tabber {
  width: 100%;
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  box-shadow: 0 3px 10px rgba(231, 47, 47, 0.8);
}
</style>
