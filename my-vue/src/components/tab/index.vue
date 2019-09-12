<template>
    <div id="tab-list">{{tabName}}</div>
</template>
<script>
export default {
    data(){
        return{
            tabName:"导航案例"
        }
    },
    created(){
       this.$root.eventHub.$on('eventName', (name)=>{
            // 处理数据
            this.tabName=name;
        })
    }
}
</script>