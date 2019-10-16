<template>
    <div id="tecNav">
        <Menu theme="light" :open-names="['1']" accordion >
            <div v-for="(item,index) of menu" :key="index" >
                <div v-if="item.isChildren">
                    <Submenu :name="index" >
                        <template slot="title">
                            <Icon :type="item.icon" /> {{item.name}}
                        </template>
                        <children-nav :childeObj="item" :data="item.children" :index="index"></children-nav>
                    </Submenu>
                </div>
                <div v-else >
                    <!-- <router-link :to="{path:item.url}" @click="addTab(item.name)">
                        <span>{{item.name}}</span>
                    </router-link> -->
                    <MenuItem :name="index" :to="{path:item.url}" @click.native="addTab(item.name)">{{item.name}}</MenuItem>
                </div>
            </div>
        </Menu>
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
                name:"首页",
                level:0,
                isChildren:false,
                url:'home',
                isOpen:false
            },{
                name:"过度动画",
                level:0,
                isChildren:true,
                url:'#',
                isOpen:true,
                icon:'md-american-football',
                children:[{
                    name:"过度案例",
                    level:1,
                    isChildren:false,
                    url:'transtion',
                    isOpen:false,
                },{
                    name:"旋转案例",
                    level:1,
                    isChildren:false,
                    url:'rotat3d',
                    isOpen:false,
                },{
                    name:"目录二-三",
                    level:1,
                    isChildren:false,
                    url:'#',
                    isOpen:false,
                }]
            },{
                name:"相关组件",
                level:0,
                isChildren:true,
                url:'#',
                isOpen:false,
                icon:'md-aperture',
                children:[{
                    name:"表单控件",
                    level:1,
                    isChildren:false,
                    url:'level3',
                    isOpen:false,
                },{
                    name:"导航案例",
                    level:1,
                    isChildren:false,
                    url:'navLayout',
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
<style lang="scss">
.ivu-menu-submenu-title>i{
    font-size: 20px;
}
//    @import "./navigate.scss";
</style>