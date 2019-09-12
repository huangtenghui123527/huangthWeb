<template>
    <div class="childrenItem" >
        <ul v-if="open">
            <li v-for="(item,key) of childrenData" :key="key">
                <div v-if="item.isChildren" >
                    <title @click="openChildren(item)" :ref="id"><i :class="item.icon"></i><span>{{item.name}}</span></title>
                    <children-item :childrenData="item.children" :open="item.isOpen" :id="item.id"></children-item>
                </div>
                <div v-else>
                    <p>{{item.name}}</p>
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
        open:{
            type:Boolean
        },
        id:{
            type:String
        }
    },
    data(){
        return {
            msg:'message'
        }
    },
    created(){
    },
    methods:{
        openChildren(item){
            let cloumRef=this.$refs;
            console.log(cloumRef)
            item.isOpen=!item.isOpen
            
        }
    }
}
</script>
   