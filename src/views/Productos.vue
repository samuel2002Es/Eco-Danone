<template>
    <h1 class="text-center">Productos</h1>
    <v-card-title>
      buscar producto
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
      v-for="item, index in listaPrductos" :key="item.id"
        cols="12"
        sm="4"
      >
      <v-card
      class="ma-2 pa-2"
      max-width="500"
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
      </v-col>
    </v-row>
  </v-container >
</template>
<script>
export default {
    data() {
        return {
            search: '',
            reveal: false,
            revealP: {},
            listaPrductos:[
                {id: 1, titulo:"This is the first title", descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
                {id: 2, titulo:"This is the second title", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
                {id: 3, titulo:"This is the third title", descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
                {id: 4, titulo:"This is the fourth title", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
            ],
        }
    },
    methods:{
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
