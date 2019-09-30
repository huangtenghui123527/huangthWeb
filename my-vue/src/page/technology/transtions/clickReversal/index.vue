<template>
    <div id="clickRever">
        <div class="pages">
            <div class="pages_page">
                <div class="pages_page_inner">
                    <div class="logo">流行服饰</div>
                    <div class="pagenumber">1 2</div>
                    <div class="content">
                        <div class="content_center">
                            <h4>最新时尚与时尚设计</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class='pages_page'>
                <div class='pages_page_inner'>
                    <div class='content'>
                        <div class='content_center right'>
                            <h4>最新时尚与时尚设计</h4>
                        </div>
                        <div class='overlay'></div>
                    </div>
                    <div class='control next'>
                        <label for='2' ></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeLable:0
        }
    },
    
}
</script>
<style lang="scss" scoped>
    @import "@/assets/css/variable.scss";
    @import "./clickReversal.scss";
</style>
