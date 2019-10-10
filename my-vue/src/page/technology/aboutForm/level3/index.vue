<template>
    <div id="level3"> 
        <div class="row">
            <search-input :level='0' :value='proVal' :list="province" @changeArea="changeArea" @searchArea="searchArea"></search-input>
            <search-input :level='1' :value='cityVal' :list="city" @changeArea="changeArea" @searchArea="searchArea"></search-input>
            <search-input :level='2' :value='areaVal' :list="area" @changeArea="changeArea" @searchArea="searchArea"></search-input>
        </div>
    </div>
</template>
<script>
import searchInput from "./searchInput";
import location from "@/assets/js/location";
import {getUserList} from '@/api'
export default {
    components:{
        searchInput
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
<style lang="scss" scoped>
    .row{
        display: grid;
        grid-template-rows: 60px;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>