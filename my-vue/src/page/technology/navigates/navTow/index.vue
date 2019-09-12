<template>
    <div id="navTow">
		  <header class="clearfix">
              <button><i class="iconfont icon-table1"></i></button>
              <button><i class="iconfont icon-edit"></i></button>
              <button><i class="iconfont icon-home"></i></button>
              <button><i class="iconfont icon-delete"></i></button>
          </header>
          <children-item v-if="menuDataTow.length" :childrenData="menuDataTow" :open="isOpen"></children-item>
    </div>
</template>
<script>
import childrenItem from "./childrenItem"
export default {
    name:"NavTow",
    components:{childrenItem},
    props:{
        menuDataTow:{
            type:Array,
        }
    },
    data(){
        return{
            msg:'message',
            isOpen:true
        }
    },
    created(){ 
    }
}
</script> 
<style lang="scss" scoped>
    @import "./navTow.scss";
</style>