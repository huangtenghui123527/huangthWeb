<template>
    <div>
        <card-reversal></card-reversal>
    </div>
</template>
<script>
import cardReversal from "./cardReversal"
export default {
    name:"transtions",
    components:{
        cardReversal
    },
    data(){
        return{
            msg:'提示'
        }
    }
}
</script>