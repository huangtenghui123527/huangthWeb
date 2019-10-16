<template>
    <div id="level3"> 
        <div class="row">
            <search-input :level='0' :value='proVal' :list="province" @changeArea="changeArea" @searchArea="searchArea"></search-input>
            <search-input :level='1' :value='cityVal' :list="city" @changeArea="changeArea" @searchArea="searchArea"></search-input>
            <search-input :level='2' :value='areaVal' :list="area" @changeArea="changeArea" @searchArea="searchArea"></search-input>
        </div>
        <div class="row">
            <test-reg></test-reg>
            <add-from></add-from>
            <other-from></other-from>
        </div>
    </div>
</template>
<script>
import searchInput from "./searchInput";
import testReg from "./testReg";
import addFrom from "./addFrom";
import otherFrom from "./otherFrom";

import location from "@/assets/js/location";
import {getUserList} from '@/api'
export default {
    components:{
        searchInput,
        testReg,
        addFrom,
        otherFrom
    },
    data(){
        return{
            msg:'三级联调',
            province:{},
            city:{},
            area:{},
            proVal:'北京市',
            cityVal:'',
            areaVal:'',
            areaCode:{
                pro:'0',
                city:'',
                area:''
            }
        }
    },
    created(){
        this.province=location[0]
    },
    methods:{
        changeArea(obj){
            switch(obj.level){
                case 0 :this.changeProvince(obj);break;
                case 1 :this.changeCity(obj);break;
                case 2 :this.areaVal=obj.val;break;
                default : break;
            }
        },
        searchArea(obj){
            if(obj.area){
                switch(obj.level){
                    case 0 :this.province=obj.area;break;
                    case 1 :this.city=obj.area;break;
                    case 2 :this.area=obj.area;break;
                    default : break;
                }
            }else{
                this.resetArea(obj)
            }
        },
        resetArea(obj){
            switch(obj.level){
                case 0 :this.province=location[0];break;
                case 1 :this.changeProvince(obj);break;
                case 2 :this.changeCity(obj);break;
                default : break;
            }
        },
        changeProvince(obj){
            this.areaCode.city=obj.code;
            let code = this.areaCode.pro+','+this.areaCode.city;
            this.city=location[code];
            this.proVal=obj.val;
            this.cityVal='';
            this.areaVal='';
        },
        changeCity(obj){
            this.areaCode.area=obj.code;
            let code = this.areaCode.pro+','+this.areaCode.city+','+this.areaCode.area;
            this.area=location[code];
            this.cityVal=obj.val;
            this.areaVal=''
        }
    }
}
</script>
<style lang="scss" >
    .row{
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 15px;
        .box{
            border: 1px solid #666;
            box-shadow: 2px 2px 2px #333;
            margin: 0 15px;
            title{
                background: #57a3f3;
                color: white;
                border-bottom: 1px solid #333;
                padding: 10px 15px;
                margin-bottom: 15px;
                font-size: 16px;
            }
        }
    }
</style>