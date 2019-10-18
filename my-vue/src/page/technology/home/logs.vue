<template>
    <div id="logs">
        <div class="logs-warrper">
            <div class="log-title">
                <Icon type="logo-github" />
                <span>更新日志</span>
            </div>
            <ul>
                <li v-for="(item,index) of logsData" :key="index">
                    <div><label>日期：</label><span>{{item.createTime}}</span></div>
                    <p>更新内容：</p>
                    <ol>
                        <li v-for="(chilren,key) of item.content" :key="key">{{chilren}}</li>
                    </ol>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import logsList from "@/assets/json/log.json";

export default {
    computed:{
        logsData(){
            return logsList.data
        }
    },
    data(){
        return{}
    },
    mounted(){
        // console.log(logsList);
        
    }
}
</script>
<style lang="scss" scoped>
    #logs{
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        height: 500px;
        .logs-warrper{
            border-radius: 5px;
            border: 1px solid #ccc;
            box-shadow: 2px 3px 2px #999;
            height: 100%;
            overflow: hidden;
            .log-title{
                border-bottom: 1px solid #ccc;
                padding: 15px 0;
                text-align: center;
                font-size: 16px;
                font-weight: bold;
            }
            ul{
                margin-top: 30px;
                padding:0 15px;
                overflow-y: scroll;
                height: 80%;
                width: 105%;
                &:hover{    
                    cursor: all-scroll;
                }
                &>li{
                    color: #333;
                    font-size: 14px;
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 15px;
                    padding-bottom: 15px;
                    span{
                        color: #87DE75
                    }
                    ol{
                        list-style: circle;
                        padding-left: 30px;
                    }
                }
            }
        }
    }
</style>