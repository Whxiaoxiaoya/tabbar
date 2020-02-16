<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
   props:{
       click:{
           type:Boolean,
           default() {
               return true
           }
       },
       probeType:{
           type:Number,
           default() {
               return 3
           }
       },
       pullUpLoad:{
           type:Boolean,
           default() {
               return true
           }
       }
   },
   data() {
       return {
          BScroll:''
       }
   },
   mounted() {
    // 1.创建实例：
    this.BScroll=new BScroll(this.$refs.wrapper,{
        click:this.click,
        probeType:this.probeType,//实时监测滚动
        pullUpLoad:this.pullUpLoad //可以进行上拉加载
    })

    // 2.监听滚动的位置：
    this.BScroll.on('scroll',position=> {
        this.$emit('scroll',position)
    })

    // 3.监听上拉事件：
    this.BScroll.on('pullingUp',()=> {
        console.log('上拉加载');
    })
   },
   methods:{
     scrollTo(x,y,time=500) {
         this.BScroll.scrollTo(x,y,time)
     }
   }
}
</script>

<style>

</style>