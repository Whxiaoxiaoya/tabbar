<template>
<div class="recommend flex">
    <div class="recommend-item flex-1" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="recommend-text">{{item.title}}</div>
      </a>
    </div>
</div>
  
</template>

<script>
export default {
  props:{
    recommend:Array
  }
}
</script>

<style scoped>
.recommend {
   border-bottom: 10px solid #eee;
}
.recommend-item {
    padding: 15px 10px;
    font-size: 12px;
}
.recommend-item img{
   width: 100%;
}
.recommend-item .recommend-text {
    text-align: center;
    padding-top: 10px;
}
</style>