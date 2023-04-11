<template>
  <v-container >
    <!-- no-grutters elimina los espacios negativos y el relleno de los cols -->
    <v-row no-gutters>
      <v-col md="6">
        <v-sheet class="ma-2 pa-2">
          <v-card class="mb-5" v-for="(item,index) in listaTareas" :key="item.id">
            <v-card-title>{{ item.titulo }} {{ index }}</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa.
            </v-card-text>
            <v-card-actions>
              <v-btn color="warning">Editar</v-btn>
              <v-btn color="error">Eliminar</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col md="6">
        <v-sheet class="ma-2 pa-2">
          <v-card>hello</v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      listaTareas:[
        {id: 1, titulo:"This is the first title", descripcion: "              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
        {id: 2, titulo:"This is the second title", descripcion: "              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
      ]
    }
  }
}
</script>