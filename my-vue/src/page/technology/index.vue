<template>
    <div id="technology">
        <nav class="nav-left">
            <tec-nav></tec-nav>
        </nav>
        <div class="tec-content">
            <header class="tec-header">tab-content</header>
            <article class="art-content">
                <router-view></router-view>
            </article>
        </div>
    </div>
</template>
<script>
import TecNav from '@/components/nav'
export default {
    name:"technologyContrany",
    components:{
        TecNav
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
            background:rgb(90, 87, 245);
        }
         
        .tec-content{
            flex: 1 1 auto;
            .tec-header,.art-content{
                width: 100%;
                box-sizing: border-box;
            }
            .tec-header{
                padding: 10px;
                background: white;
            }
            .art-content{
                padding:0 10px;
            }
        }
    }
</style>