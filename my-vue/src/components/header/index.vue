<template>
    <div id="header" class="satic-area">
        <div class="dynamic-area1"></div>
        <div class="dynamic-area2"></div>
        <div id="logo">
            <a href="javascript:;">
                <img src="@/assets/img/heard/logo.png" alt="logo">
            </a>
        </div>
        <header >
        <ul class="head-nav clearfix">
            <li>
                用户
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
   .satic-area {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../../assets/img/heard/poster-about-part.jpg) no-repeat center;
        background-size: cover;
    }
    #header{
        width: 100%;
        box-sizing: border-box;
        // color: #333;
        display: flex;
        padding: 10px 10px 0; 
        .dynamic-area1   {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-size: cover;
            animation: posterDrop1 6000s linear infinite;
        }

        @keyframes posterDrop1 {
            from { background-position: 0 0; }
            to { background-position: 4000% 0; }
        }

        .dynamic-area2   {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            // background: url(../../assets/img/heard/poster-drop-animate1-part.png) repeat-x 0px 0px;
            background-size: cover;
            animation: posterDrop2 8000s linear infinite;
        }

        @keyframes posterDrop2 {
            from { background-position: 0 0; }
            to { background-position: 30000% 0; }
        }
        #logo{
            flex: 0 0 100px;
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
                        color:white ;
                        border-radius: 5px;
                        // border: 2px solid rgb(221, 118, 22);
                        padding: 5px 15px;
                        
                        &:hover{
                          color: #e44204; 
                        }
                    }
                }
            }
        }
    }
</style>