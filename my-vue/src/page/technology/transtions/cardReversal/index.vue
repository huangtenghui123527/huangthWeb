<template>
    <div id="reversal">
        <ul class="clearfix">
            <li v-for="(item,index) of carDate" :key="index" class="main">
                <div class="box b1">
                    <!-- <img :src="'./img/'+index+'.jpg'" alt="index"> -->
                    <img :src="item.src" alt="1">
                </div>
                <div class="box b2">
                    <h2>{{item.en}}</h2>
                    <p>{{item.ch}}</p>
                </div>   

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
           carDate:[{name:'1',ch:'宝马汽车',en:'BMW'
            },{name:'2',ch:'阿尔法-罗密欧',en:'Alfa Romeo'
            },{name:'3',ch:'斯柯达',en:'Skoda'
            },{name:'4',ch:'大众汽车',en:'Volkswagen'
            },{name:'5',ch:'萨布牌轿车',en:'Saab'
            },{name:'6',ch:'兰博基尼',en:'Lamborghini'
            },{name:'7',ch:'保时捷',en:'Porsche'
            },{name:'8',ch:'标致',en:'Peugeot'
            },{name:'9',ch:'梅赛德斯奔驰',en:'Mercedes1'
            },{name:'10',ch:'别克汽车',en:'Buick'
            }] 
        }
    },
    created(){
        this.carDate.forEach(ele=>{
            ele.src=require('@/assets/img/cars/'+ele.name+'.jpg')
        })
    }
}
</script>
<style lang="scss" scoped>
#reversal{
    width: 800px;
    margin: 0 auto;
    ul{
        width: 100%;
        li{
            float: left;
        }
    }
}
.main {
    width: 160px;
    height:160px;
    position: relative;
    -webkit-perspective: 1500;
    -moz-perspective: 1500;
    &:hover .b1{
        transform: rotateY(180deg);
    }
    &:hover .b2{
        transform: rotateY(0deg);
    }
    .box {
        position: absolute;
        top: 0;
        left:0;
        width: 160px;
        height: 160px;
        transition: all 1s;
        backface-visibility: hidden;
        border-radius: 10px;
        cursor: pointer;
    }
    .b1{
        background:skyblue;
        img{
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%)

        }
    }
    .b2 {
        background:tomato;
        transform: rotateY(-180deg);
        text-align: center;
    }

}
</style>