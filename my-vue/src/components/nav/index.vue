<template>
    <div id="tecNav">
        <header>
            <i class="iconfont icon-pc"></i>
            <title>菜单头</title>
            <i class="iconfont icon-daohangshouqi"></i>
        </header>
        <ul class="nav-box">
            <li v-for="(item,key) of menu" :key="key">
                <div v-if="item.isChildren">
                    <children-nav :childeObj="item" :data="item.children"></children-nav>
                </div>
                <div v-else >
                    <router-link :to="{path:item.url}" @click="addTab(item.name)">
                        <span>{{item.name}}</span>
                    </router-link>
                </div>
            </li>
        </ul>

    </div>
</template>
<script>
import childrenNav from "./children"
export default {
    components:{
        childrenNav
    },
    data(){
        return{
            menu:[{
                name:"导航案例",
                level:0,
                isChildren:false,
                url:'navLayout',
                isOpen:false
            },{
                name:"目录二",
                level:0,
                isChildren:true,
                url:'#',
                isOpen:true,
                children:[{
                    name:"目录二-一",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                },{
                    name:"目录二-二",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                },{
                    name:"目录二-三",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                }]
            },{
                name:"目录三",
                level:0,
                isChildren:true,
                url:'#',
                isOpen:false,
                children:[{
                    name:"目录三-一",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                },{
                    name:"目录三-二",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                }]
            }]
        }
    },
    methods:{
        addTab(tabName){
            console.log(tabName)
            // this.$root.$data.tabName=tabName;
            // this.$router.push({path:'/myTechnology/navLayout'})
            this.$root.eventHub.$emit('eventName', tabName);
        }
    }
}
</script>
<style lang="scss" scoped>
   @import "./navigate.scss";
</style>