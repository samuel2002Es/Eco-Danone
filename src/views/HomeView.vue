<template>
 <v-container >
  <h1 class="text-center mb-5"> Danone Eco</h1>
    <v-row no-gutters>
      <v-col>
        <es-danone></es-danone>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <productos-card></productos-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EsDanone from '@/components/EsDanone.vue';
import ProductosCard from '@/components/ProductosCard.vue';
  export default {
    name: 'home',

  data: () => ({
    show1: false,
    show: false,
    dialog: false,
  }),
  components: {
    EsDanone,
    ProductosCard
  }
}
/* import calendarioC from "../components/CalendarioComp.vue";
export default {
    name:'calendario',
    components:{
        calendarioC
    }
} */
</script>
