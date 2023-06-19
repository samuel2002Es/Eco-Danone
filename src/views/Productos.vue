<template>
    <h1 class="text-center">Productos</h1>
    <v-card-title>
      buscar producto:
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-container>
    <v-row no-gutters>
      <v-col
      v-for="item, index in datosPrueba" :key="item.id"
        cols="12"
        sm="4"
      >
      <v-card
      class="ma-2 pa-2"
      max-width="500"
    >
      <v-card-text>
        <p class="text-h6 text--primary text-center">
              {{ item.fields.nombre }}
            </p>
        <v-img
            :src=item.fields.productoImg.fields.file.url
            height="300px"
            cover
        ></v-img>
      </v-card-text>
      <v-card-actions>
        <v-btn
          variant="text"
          color="#0a135c"
          @click="abrirCerrar(index)"
        >
          Saber más
        </v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <v-card
          v-if="this.revealP[index]"
          class="v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0">
            <p class="text-h6 text--primary text-center">
              {{ item.fields.nombre }}
            </p>
            <p class="mt-5 text-justify">Descripcion: {{ item.fields.datos.content[0].content[0].value }}</p>
            <p class="mt-1 text-justify"> Calorias: {{ item.fields.calorias }}</p>
            <p class="mt-1 text-justify">Datos nutricionales: {{ item.fields.datosNutricionales }}</p>
            <p class="mt-1 text-justify">Es de agricultura Ecologica:  {{ item.fields.esDeAgriculturaEcologica ? 'si': 'no'}}</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              variant="text"
              color="#0a135c"
              @click="abrirCerrar(index)"
            >
              Cerrar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
      </v-col>
    </v-row>
  </v-container >
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            search: '',
            reveal: false,
            revealP: {},
        }
    },
    methods:{
      ...mapMutations(['dataDB','obtenerDB']),
        abrirCerrar(index){
            if(!this.revealP[index]){
                this.revealP[index] = this.reveal
                this.revealP[index] = !this.revealP[index]
            }else{
                this.revealP[index] = !this.revealP[index]
            }          
        }
    },
    computed:{
      ...mapState(['datosPrueba'])
    },
    beforeMount(){
      //this.dataDB()
      //console.log(this.dataDB())
      this.obtenerDB()
    }
}
</script>
