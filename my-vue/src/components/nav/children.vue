<template>
<div id="childrenNav">
    <div v-for="(item,key) of data" :key="key">
        <div v-if="item.isChildren">
             <Submenu :name="index+'-'+key" >
                <template slot="title">
                    <Icon :type="item.icon" /> {{item.name}}
                </template>
                <children-nav :childeName="item.name" :data="item.children" :index="key"></children-nav>
            </Submenu>
        </div>
         <div v-else >
            <MenuItem :name="index+'-'+key" :to="{path:item.url}" @click.native="addTab(item.name)">{{item.name}}</MenuItem>
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    name:'childrenNav',
    props:{
        data:{
            type:Array,
            default:()=>{return[]}
        },
        childeObj:{
            type:Object,
             default:()=>{return {}}
        },
        index:{
            type:Number
        }
    },
    data(){
        return{
            child01:false,

        }
    },
    mounted(){
    },
    methods:{
        open(obj){
           this.childeObj.isOpen= !obj.isOpen
        },
        addTab(tabName){
            console.log(tabName);
            
            // this.$root.$data.tabName=tabName;
            this.$root.eventHub.$emit('eventName', tabName)
        }
    }
}
</script>