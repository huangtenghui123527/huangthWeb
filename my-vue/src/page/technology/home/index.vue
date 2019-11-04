<template>
    <div>
        <report-header></report-header>

        <div class="log-bar">
            <logs class="left"></logs>
            <bar-echart class="right" type="barChart"></bar-echart>
        </div>
        <div class="other-echarts clearfix">
            <!-- <div class="col left"><pie-echart type="ordertype"></pie-echart></div> -->
            
            <pie-echart class="left"></pie-echart>
            <line-echart class="center"></line-echart>
            <radar-echart class="right"></radar-echart>
        </div>
        <!-- <svg-icon iconClass="home" />
        <svg-icon iconClass="iconfufei0" /> -->
    </div>
</template>
<script>
    import ReportHeader from './reportHeader';
    import Logs from './logs';
    import BarEchart from '@/components/echarts/bar';
    import PieEchart from '@/components/echarts/pie';
    import LineEchart from '@/components/echarts/line';
    import RadarEchart from '@/components/echarts/radar';
    export default {
        components:{
            ReportHeader,Logs,RadarEchart,
            BarEchart,PieEchart,LineEchart
        },
        data(){
            return{ 
            
            }
        }
    }
</script>
<style lang="scss" scoped>
    .log-bar{
        margin-top: 15px;
        display: flex;
        .left{
            width: 350px;
        }
        .right{
            flex-grow: 1;
        }
    }
    .other-echarts{
        margin-top: 15px;
        display: flex;
        .left,.center,.right{
            flex:1;
        }
        // .col{
        //     width: 25%;
        //     height: 300px;
        //    .orderArea{
		// 		width: 100%;
		// 		height: 300px;
		// 		background: #fff !important;
		// 		border-radius: 6px;
		// 		box-sizing: border-box;
		// 		padding: 10px;
		// 		padding-top: 40px;
		// 		overflow: hidden;
		// 	}
        // }
        // height: 300px;
        // .left,.center,.right{
        //     float: left;
        // }
        // .left,.right{
        //     width: 25%;
        // }
        // .center{
        //     width: 45%;
        // }
        // display: grid;
        // grid-template-rows: 300px;
        // grid-template-columns: 30% 40% 30%;
    }

</style>