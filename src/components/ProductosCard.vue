<template>
    <h2 class="text-center mb-10">Creamos productos pensando en ti</h2>
    <v-card
      class="mx-auto mb-5"
      max-width="500"
      v-for="item, index in listaPrductos" :key="item.id"
    >
      <v-card-text>
        <div>{{ item.titulo }}</div>
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
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
            <p class="text-h4 text--primary">
              {{ item.titulo }}
            </p>
            <p> {{ item.descripcion }}</p>
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
    methods:{
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