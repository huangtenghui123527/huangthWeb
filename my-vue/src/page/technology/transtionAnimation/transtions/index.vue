<template>
    <div>
        <card-reversal></card-reversal>
        <!-- <book-reversal></book-reversal> -->
        <click-reversal></click-reversal>
    </div>
</template>
<script>
import bookReversal from './bookReversal'
import cardReversal from "./cardReversal"
import clickReversal from "./clickReversal"
export default {
    name:"transtions",
    components:{
        cardReversal,
        bookReversal,
        clickReversal
    },
    data(){
        return{
            msg:'提示'
        }
    }
}
</script>