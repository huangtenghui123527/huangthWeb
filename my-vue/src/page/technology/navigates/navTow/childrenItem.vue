<template>
    <div class="childrenItem">
        <ul >
            <li v-for="(item,key) of childrenData" :key="key">
                <title @click="openChildren(item)"><i :class="item.icon"></i><span>{{item.name}}</span></title>
                <div v-if="item.isOpen"  :ref="item.id" :class="!item.isOpen?'next-level':'next-level active'">
                    <children-item :childrenData="item.children" ></children-item>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import ChildrenItem from './index.vue'
export default {
    name:'childrenItem',
    components:{ChildrenItem},
    props:{
        childrenData:{
            type:Array
        },
    },
    data(){
        return {
            msg:'message',
        }
    },
    methods:{
        openChildren(item){
            let nextLevelEle=this.$refs[item.id];
            let leng=item.isChildren?item.children.length:0;
            console.log(nextLevelEle)
            // let childrenEle=nextLevelEle
            // if(item.isOpen){
            //     // nextLevelEle[0].style.height=leng*33.8+'px';
            // }else{
            //     // nextLevelEle[0].style.height=0;
            // }
            item.isOpen=!item.isOpen
        }
    }
}
</script>
   <style lang="scss" scoped>
   .childrenItem{
    ul{
        margin-left: 15px;
        li{
            border-bottom: 1px dashed #ccc;
            title{
                padding: 5px 0;
                font-size:16px;
                color: #333;
                cursor: pointer;
                span{
                    margin-left: 10px;
                }
            }
            .next-level{
                transition: all 300ms ease-in;
                // transform: scale(1,0) ;
                // transform-origin: top center;
            }
            // .active{
            //     transform: scale(1,1);
            // }
        }
    }
}
   </style>