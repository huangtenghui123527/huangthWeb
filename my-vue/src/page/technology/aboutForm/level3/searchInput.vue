<template>
    <div class="seachSelect" >
        <div class="inputBtn">
            <Input  v-model="value" suffix="ios-arrow-forward" placeholder="Enter text" @on-focus="flag=!flag" />
            <!-- <i class="my-input-btn" @click="flag=!flag"></i> -->
            <div class="my-select" v-show="flag">
                <ul >
                    <li>
                        <Input v-model="searchVal" suffix="ios-search" placeholder="Enter text" @on-enter.stop="keyEnter($event)"/>
                    </li>
                    <li v-for="(item,index) of list" :key="index" @click.stop="selectClick(item,index)"><span>{{item}}</span></li>
                </ul>
            </div>
            <span class="my-icon" v-show="flag"></span>
        </div>
    </div>
</template> 
<script>
export default {
    props:{
        list:{
            type:Object,
        },
        level:{
            type:Number 
        },
        value:{
            type:String
        }
    },
    data(){
        return{
            flag:false,
            searchVal:''  
        }
    },
    mounted(){
    },
    methods:{
        keyEnter(event){
            // event.stopProgation();
            // let ev=event.target||event.srcElement;
            let val=this.searchVal;
            let newList={};
            let reg= val?new RegExp(val):/ /;
            for(let i in this.list){
                if(reg.test(this.list[i])){
                     newList[i]=this.list[i]
                }
            }
            this.$emit('searchArea',{area:this.isOwnEmpty(newList)?null:newList,level:this.level});
        },
        selectClick(area,index){
            this.searchVal='';
            this.flag=false;
            this.$emit('changeArea',{code:index,level:this.level,val:area});
        },
        isOwnEmpty(obj){
            for (var key in obj){
        　　　　return false;//返回false，不为空对象
        　　}　　
        　　return true;//返回true，为空对象
        }
    }
}
</script>
<style lang="scss" scoped>
    .inputBtn{
        position: relative;
        width: 300px;
        .my-input-btn{
            position: absolute;
            right:0;
            top: 0;
            width: 30px;
            height: 30px;
            background: rgba($color: #000000, $alpha: 0);
            z-index: 1;
            &:hover{
                cursor: pointer;
            }
        }
        .my-icon{
            display: block;
            width: 10px;
            height: 10px;
            background: #fff;
            border-left: 1px solid #999;
            border-top: 1px solid #999;
            position: absolute;
            top: 35px;
            left: 25%;
            transform: rotate(45deg);
        }
        .my-select{
            position: absolute;
            top: 40px;
            left: 20px;
            background: #fff;
            width:50%;
            overflow: hidden;
            padding: 10px;
            box-shadow: 2px 3px 2px #999;
            border: 1px solid #ccc;
            // &::before{
            //     content: '';
            //     display: block;
            //     width: 10px;
            //     height: 10px;
            //     background: #fff;
            //     border-left: 1px solid #999;
            //     border-top: 1px solid #999;
            //     position: absolute;
            //     top: -3px;
            //     left: 50%;
            //     transform: rotate(45deg) translateX(-50%);
            //     z-index: 999;
            // }
            li{
                padding: 5px 0;
                width: 100%;
                text-align: center;
                span{
                    border-bottom: 1px solid transparent;
                    width: 100%;
                    display: inline-block;
                    &:hover{
                        border-bottom: 1px solid #ccc;
                        cursor: pointer;
                    }
                }
            }
            ul{
                overflow-y: auto;
                max-height: 400px;
                width: 120%;
                padding-right: 25px;
            }
        }
    }
</style>