<template>
    <div>
        <card-reversal></card-reversal>
        <book-reversal></book-reversal>
    </div>
</template>
<script>
import bookReversal from './bookReversal'
import cardReversal from "./cardReversal"
export default {
    name:"transtions",
    components:{
        cardReversal,
        bookReversal
    },
    data(){
        return{
            msg:'提示'
        }
    }
}
</script>