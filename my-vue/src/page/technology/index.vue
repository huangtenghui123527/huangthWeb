<template>
    <div id="technology">
        <nav class="nav-left">
            <tec-nav></tec-nav>
        </nav>
        <div class="tec-content">
            <header class="tec-header"><tab-list></tab-list></header>
            <article class="art-content">
                <router-view></router-view>
            </article>
        </div>
    </div>
</template>
<script>
import TecNav from '@/components/nav'
import tabList from '@/components/tab'
export default {
    name:"technologyContrany",
    components:{
        TecNav,
        tabList
    },
    mounted(){
        // this.$router.push({path:'/navLayout'})
    }
}
</script>
<style lang="scss" scoped >
    #technology{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .nav-left{
            flex: 0 1 200px;
            // background:#222d32;
        }
        .tec-content{
            flex: 1 1 auto;
            .tec-header,.art-content{
                width: 100%;
                box-sizing: border-box;
            }
            .tec-header{
                padding: 10px;
                // background: #eee;
            }
            .art-content{
                padding:10px;
            }
        }
    }
</style>