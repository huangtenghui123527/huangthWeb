<template>
    <div id="tab-list">
        <ul class="clearfix">
            <li v-for="(item,index) of tabList" :key="index" :class="item.isOpen?'active':''">
                <a href="javascript:;">
                    <span>{{item.name}}</span>
                    <Icon type="md-close"  @click.native="$root.$gFun.deleteTab(item);selectTab()" />
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tabList:[]
        }
    },
    created(){
        this.tabList=this.$root.$gData.data.tabArray;
        // console.log(this.$root.$gData);
    },
    methods:{
        selectTab(){
            let newTab=this.$root.$gData.data.tabArray;
            let len=newTab.length;
            this.$router.push({path:'/myTechnology/'+newTab[len-1].url});
            this.$root.eventHub.$emit("meunNameChange",newTab[len-1].name)
        }
    }
}
</script>
<style lang="scss" scoped>
    #tab-list{
        ul{
            padding: 10px;
            background: white;
            li{
                float: left;
                padding: 5px 15px;
                border: 1px solid #eee;
                span{
                    padding-right: 5px;
                }
                i:hover{
                    color: #f10;
                }
                &:hover{
                    box-shadow: 1px 2px 1px #ccc;
                }
            }
            .active{
                box-shadow: -1px -2px 2px #ccc;
            }
        }
    }
</style>