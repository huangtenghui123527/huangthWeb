<template>
  <div class="childrenItem">
    <ul>
      <li v-for="(item,key) of childrenData" :key="key" style="height:32px" >
        <div class="title" @click="openChildren(item,$event)" ><i :class="item.icon"></i><span>{{item.name}}</span></div>
        <div :ref="item.id"
             :class="item.isOpen?'next-level active':'next-level'">
          <children-item :childrenData="item.children"></children-item>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ChildrenItem from "./index.vue";
export default {
  name: "childrenItem",
  components: { ChildrenItem },
  props: {
    childrenData: {
      type: Array
    }
  },
//   computed
  data() {
    return {
      msg: "message"
    };
  },
  methods: {
    openChildren(item,event) {
      event.stopPropagation();
      item.isOpen=!item.isOpen;
      let evt=event.target||event.srcElement;
      let currentHeight=evt.parentNode.offsetHeight;
      let parentEle=evt.parentNode.nodeName=="LI"?evt.parentNode:evt.parentNode.parentNode;
      let targetEle = this.$refs[item.id][0];
      let leng=this.$t.getLength(this.childrenData,item.id);
      this.hideChildren(parentEle,currentHeight)
      if (item.isOpen) {
        targetEle.className="next-level active"
        parentEle.style.height = (leng+1) * currentHeight + "px";
      } else {
        targetEle.className="next-level"
        parentEle.style.height = currentHeight+'px';
      }
    },
    hideChildren(parentEle,currentHeight){
      let sibings=parentEle.parentNode.childNodes;
      for(let i=0;i<sibings.length;i++){
        let lastEle=sibings[i].lastElementChild;
        sibings[i].style.height = currentHeight+'px';
        lastEle.className="next-level";
      }
    },
    getPrevEle(ele) {
      let parent = ele.parentNode;
      let childrens = parent.childNodes;
      for (let i = 0; i < childrens.length; i++) {
        if (childrens[i].nodeType == 1 && childrens[i] == ele) {
          if (childrens[i - 1].nodeType == 1) {
            return childrens[i - 1];
          } else if (childrens[i - 2].nodeType == 1) {
            return childrens[i - 2];
          } else {
            throw error("该元素是第一个元素");
          }
        }
      }
    }
  }
};
</script>
   <style lang="scss" scoped>
.childrenItem {
  ul {
    margin-left: 15px;
    li {
      border-bottom: 1px dashed #ccc;
      transition: all 300ms ease-in;
      // overflow: hidden;
      .title {
        padding: 5px 0;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        span {
          margin-left: 10px;
        }
      }
      .next-level {
        transition: all 300ms ease-in;
        transform: scale(1,0) ;
        transform-origin: top center;
        // display: none;
      }
      .active{
        transform: scale(1,1);
        // display: block;
      }
    }
  }
}
</style>