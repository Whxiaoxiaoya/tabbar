<template>
  <div class="tabber-item" @click="itemClick()">
    <div v-if="!linkActive">
      <slot name="tabber-img"></slot>
    </div>
    <div v-if="linkActive">
      <slot name="tabber-img-active"></slot>
    </div>
    <div :style="linkActiveColor">
      <slot name="tabber-text"></slot>
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
.tabber-item {
  flex: 1;
  text-align: center;
}
.tabber-item img {
  width: 20px;
  height: 10px;
}
</style>
