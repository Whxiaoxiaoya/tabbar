<template>
    <swiper>
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <a :href="item.link">
           <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
    props:{
       bannerList:Array
    },
    components:{
        Swiper,
        SwiperItem
    },
}
</script>

<style>

</style>