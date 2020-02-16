<template>
  <div class="tab-control">
     <div v-for="(item,index) in titles" class="tab-control-item" :key="index" @click="tabClick(index)">
         <span :class="{active:tabActiveIndex===index}">{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
           tabActiveIndex:0,
        }
    },
    methods:{
        tabClick(index) {
            this.tabActiveIndex=index
            this.$emit('tabActiveIndex',index)
        }
    }

}
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
}
.tab-control-item {
    flex: 1;
    text-align: center;
}
.tab-control-item span {
    padding: 5px 3px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>