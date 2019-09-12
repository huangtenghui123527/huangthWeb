<template>
    <div id="navOne">
		  <header class="clearfix">
              <button><i class="iconfont icon-table1"></i></button>
              <button><i class="iconfont icon-edit"></i></button>
              <button><i class="iconfont icon-home"></i></button>
              <button><i class="iconfont icon-delete"></i></button>
          </header>
          <children-item v-if="menuData.length" :childrenData="menuData" :open="isOpen"></children-item>
    </div>
</template>
<script>
import "./navOne.scss";
import childrenItem from "./childrenItem"
export default {
    // name:"navOne",
    components:{childrenItem},
    props:{
        menuData:{
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