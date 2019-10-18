<template>
    <div id="tecNav">
        <Menu theme="light" :active-name="activeName" accordion >
            <div v-for="(item,index) of menu" :key="index" >
                <div v-if="item.isChildren">
                    <Submenu :name="item.name" >
                        <template slot="title">
                            <Icon :type="item.icon" /> {{item.name}}
                        </template>
                        <children-nav :childeObj="item" :data="item.children" ></children-nav>
                    </Submenu>
                </div>
                <div v-else >
                    <MenuItem :name="item.name" :to="{path:item.url}" @click.native="$root.$gFun.addTab(item)">{{item.name}}</MenuItem>
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
            activeName:this.$root.$gData.data.activeName,
            menu:[{
                name:"首页",
                level:0,
                isChildren:false,
                url:'home',
                isOpen:true
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
    mounted(){
        let _this=this;
        this.$root.eventHub.$on('meunNameChange', function(name){
            _this.activeName=name;
        })
    },
    methods:{
    }
}
</script>
<style lang="scss">
.ivu-menu-submenu-title>i{
    font-size: 20px;
}
//    @import "./navigate.scss";
</style>