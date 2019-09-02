<template>
    <div id="header">
        <div id="logo">
            <a href="javascript:;">
                <img src="@/assets/img/heard/logo.png" alt="logo">
            </a>
        </div>
        <header @click="gotoTec">
            <ul class="head-nav clearfix">
                <li>
                    用户
                </li>
                <li>
                    <span>关于个人</span>
                </li>  
                <li>
                    <span>家庭专题</span>
                </li>                            
                 <li>
                    <span>技术专题</span>
                </li>


            </ul>
        </header>
    </div>
</template>
<script>
export default {
    methods:{
        gotoTec(){
            this.$router.push('/myTechnology')
        }
    }
}
</script>
<style lang="scss" scoped >
    #header{
        width: 100%;
        // background: gradient(linear,center top,center bottom,from(#e44204), to(yellow),);
        background: -webkit-gradient(linear,center top,center bottom,from(yellow), to(#e44204));
        box-sizing: border-box;
        color: #333;
        display: flex;
        padding: 10px 15px 0 15px; 
        border-bottom: 1px solid #000;
        #logo{
            flex: 0 0 60px;
            a,img{
                width: 100%;
                height: initial;
            }
        }
        header{
            flex: 1 1 auto;
            .head-nav{
                height: 100%;
                li{
                    box-sizing: border-box;
                    float: right;
                    height: 100%;
                    line-height: 50px;
                    margin: 0 20px;
                    letter-spacing: 5px;
                    span{
                        cursor: pointer;
                        border-radius: 5px;
                        border: 2px solid rgb(221, 118, 22);
                        padding: 5px 15px;
                        &:hover{
                          border-color: #e44204;
                          color: #e44204;  
                        }
                    }
                }
            }
        }
    }
</style>