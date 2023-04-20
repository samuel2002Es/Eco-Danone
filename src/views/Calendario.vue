<!-- COMENTS -->
<!-- installe vue-textarea-autosize  esto con el fin de que cuando haga text areas sean ajustables segun lo que se le introdusca-->
<template>
    <calendarioC></calendarioC>
</template>
<script>
import calendarioC from "../components/CalendarioComp.vue";
export default {
    name:'calendario',
    components:{
        calendarioC
    }
}
</script>