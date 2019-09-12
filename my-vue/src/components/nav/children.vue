<template>
<div id="childrenNav">
    <div class="nav-title" @click="open(childeObj)">
        <span v-show="!childeObj.isOpen"></span>
        <title>{{childeObj.name}}</title>
        <i class="iconfont icon-sanjiaoxing"></i>
    </div>
    <ul id="nav-tow" :class="childeObj.isOpen?'defaultNav':'activeNav'">
        <li v-for="(item,key) of data" :key="key">
            <!-- <router-link :to="{path:item.url}"><span>{{item.name}}</span></router-link> -->
            <div v-if="item.isChildren">
                <children-nav :childeName="item.name" :data="item.children"></children-nav>
            </div>
            <div v-else >
                <router-link :to="item.url" @click.native="addTab(item.name)">
                    <span >{{item.name}}</span>
                </router-link>
            </div>
        </li>
    </ul>
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
            // this.$root.$data.tabName=tabName;
            this.$root.eventHub.$emit('eventName', tabName)
        }
    }
}
</script>
<style lang="scss" scoped>
@import url(./navigate.scss);
    .nav-title{
        background: #131e26;
        border-bottom: 1px solid #333;
        color: #ccc;
        padding: 10px 0;
        position: relative;
        span{
            width: 5px;
            height: 100%;
            position: absolute;
            left: -5px;
            top: 0;
            background:#357dd7;
        }
        title{
            display:inline-block;
        }
        i{
            position: absolute;
            top: 50%;
            right: 10px;
            transform: rotateZ(0deg) translateY(-50%);
            transition: all 0.5s;
        }
    }
    #nav-tow{
        background: #1c2b36;
        overflow: hidden;
        transition: all 0.5s;
       li{
            border-bottom:1px solid #869fb1;
            cursor: pointer;
            a{
                color: white;
                display: block;
                overflow: hidden;
                position: relative;
                padding: 10px 0;
                transition: all .5s;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                -o-transition: all .5s;
                &:hover{
                    background: #357dd7;
                }
                &:hover::before{
                    left: -30px;
                }
                span{

                    display: block;
                    position: relative;
                    left: 10px;
                    z-index: 1;
                }
            }
            a:before{
                content: '';
                position: absolute;
                left: - -240px;
                top: 0px;
                width: 200px;
                height: 100%;
                background: #629feb;
                z-index: 1;
                transform: skew(30deg, 0);
                -webkit-transform: skew(30deg, 0);
                -moz-transform: skew(30deg, 0);
                -o-transform: skew(30deg, 0);
                -ms-transform: skew(30deg, 0);
                transition: all .5s;
                -webkit-transition: all .5s;
                -moz-transition: all .5s;
                -o-transition: all .5s;
            }
            a:after{
                content: '';
                position: absolute;
                width: 100%;
                height: 30px;
                left: 0;
                top: 20px;
                z-index: 1; 
            }
        }
    }
    .defaultNav{
        transform: scale(1,0);
        transform-origin: top center;
        height: 0;
    }
    .activeNav{
        transform: scale(1,1);
    }
</style>