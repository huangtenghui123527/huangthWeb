<template>
        <div class="reportList">
            <ul class="fistUl">
                <li v-for="(item,index) of reportList" :key="index" :style="item.backStyle">
                    <div class="leftIitem">
                        <p class="investor">{{item.name}}</p>
                        <p class="number"><span class="num">{{item.counts}}</span><span class="units">{{item.unit}}</span></p>
                    </div>
                    <div class="rightIitem">
                        <svg-icon iconClass="home" class="iconSvg"/>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>
export default {
    data(){
        return{
             reportList:[{
                name:'年利润',
                counts:124,
                unit:'(千万元)',
                backStyle:"background: #FFA3A1 linear-gradient(to right, #FFA391, #FF9391);"
            },{
                name:'年利率',
                counts:42,
                unit:'%',
                backStyle:"background: #84f9d2 linear-gradient(to right, #84f9d2, #84dcd2);"
            },{
                name:'潜在投资人',
                counts:923,
                unit:'(人)',
                backStyle:"background:  #87DE75 linear-gradient(to right, #87CE75, #87D975);"
            },{
                name:'意向投资人',
                counts:236,
                unit:'(人)',
                backStyle:"background:  #a5e7f0 linear-gradient(to right, #a5e9f0, #a5e790);"
            },{
                name:'待审投资人',
                counts:236,
                unit:'(人)',
                backStyle:"background: #93b7e3 linear-gradient(to right, #93c7e3, #93c793);"
            },{
                name:'审核中投资人',
                counts:236,
                unit:'(人)',
                backStyle:"background: #edafda linear-gradient(to right, #edacda, #edaf9a);"
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
.reportList{
        background: white;
        .fistUl{
            padding: 15px 0;
            display: grid;
            grid-template-rows: 80px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            li{
                border-radius: 5px;
                margin: 0 10px;
                height: 100%;
                font-weight: bold;
                color: white;
                background: #edafda linear-gradient(to right, #edacda, #edaf9a);
                .leftIitem{
                    float: left;
                    width: 80%;
                    padding: 10px 0 10px 10px;
                    .investor{
                        font-size: 16px;
                    }
                    .num{
                        font-size: 24px;
                    }
                    .units{
                        font-size: 14px;
                    }
                }
                .rightIitem{
                    float: left;
                    width: 20%;
                    height: 100%;
                    position: relative;
                    .iconSvg{
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%,-50%);
                    }
                }
            }
        }
    }
</style>