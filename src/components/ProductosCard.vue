<template>
  <div class="text-center mb-10 heading-4 text-h4">Creamos productos pensando en ti</div>
    <v-card
      class="mx-auto mb-5"
      max-width="500"
      v-for="item, index in datosPrueba2" :key="item.id"
    >
      <v-card-text>
        <p class="text-h6 text--primary text-center">
              {{ item.fields.nombre }}
            </p>
            <v-img
            :src=item.fields.productoImg.fields.file.url
            height="400px"
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
    <v-btn value="about"
        block
        class="text-none mb-4"
        color="indigo-darken-3"
        size="large"
        rounded="lg"
        variant="flat"
        @click="changeroute"
      >
        ver todos
      </v-btn>
  </template>
  <script>
import { mapState, mapMutations } from 'vuex';
  export default {
    name: "ProductosCard",
    data() {
        return {
            reveal: false,
            listaPrductos:[
                {id: 1, titulo:"This is the first title", descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
                {id: 2, titulo:"This is the second title", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
            ],
            revealP: {}
        }
    },
    computed:{
      ...mapState(['datosPrueba2'])
    },
    methods:{
      ...mapMutations(['obtenerDB']),
        changeroute(){
            this.$router.push({ path: '/productos'});
        },
        abrirCerrar(index){
            if(!this.revealP[index]){
                this.revealP[index] = this.reveal
                this.revealP[index] = !this.revealP[index]
            }else{
                this.revealP[index] = !this.revealP[index]
            }          
        }
    },
    beforeMount(){
      //this.dataDB()
      //console.log(this.dataDB())
      this.obtenerDB()
    }
  }
</script>
<style scope>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>