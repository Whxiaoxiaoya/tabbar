<template>
  <div class="tabbar-item" @click="itemClick()">
    <div v-if="!linkActive">
      <slot name="tabbar-img"></slot>
    </div>
    <div v-if="linkActive">
      <slot name="tabbar-img-active"></slot>
    </div>
    <div :style="linkActiveColor">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "/home"
    },
    textColor: {
      type: String,
      default: "green"
    }
  },
  computed: {
    linkActive() {
      return this.$route.path === this.link;
    },
    linkActiveColor() {
      return this.linkActive ? { color: this.textColor } : { color: "#ccc" };
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link);
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item img {
  width: 20px;
  height: 10px;
}
</style>
