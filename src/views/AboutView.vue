<template>
  <v-container >
    <!-- no-grutters elimina los espacios negativos y el relleno de los cols -->
    <v-row no-gutters>
      <v-col md="6">
        <v-sheet class="ma-2 pa-2">
          <v-card class="mb-5" v-for="item, index in listaTareas" :key="item.id">
            <v-card-title>{{ item.titulo }} </v-card-title>
            <v-card-text>
              {{ item.descripcion }}
            </v-card-text>
            <v-card-actions>
              <v-btn @click="editarTarea(index)" color="warning">Editar</v-btn>
              <v-btn @click="eliminarTarea(item.id)" color="error">Eliminar</v-btn>
            </v-card-actions>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col md="6">
        <v-sheet class="ma-2 pa-2">
          <v-card class="mb-5">
            <!-- submit. prevent desactiva lo que haga el navegador por defecto -->
            <v-form @submit.prevent="agregarTarea()" class="pa-6">
              <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>
              <v-textarea label="descripcion de la tarea" v-model="descripcion"></v-textarea>
              <v-btn type="submit" block :color="colorForm">{{ msjForm }}</v-btn>
            </v-form>
          </v-card>
          <v-card>
            <form class="pa-6" @submit.prevent="submit">
              <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Name"
              ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="Select"
    ></v-select>

              <v-btn
                class="me-4"
                type="submit"
              >
              submit
              </v-btn>

              <v-btn @click="handleReset">
              clear
              </v-btn>
            </form>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- mensaje de alerta -->
    <v-snackbar
      v-model="snackbar"
    >
      {{ mensajeSnackbar }}

      <template v-slot:actions>
        <v-btn
          color="pink"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'
export default {
  data(){
    return {
      listaTareas:[
        {id: 1, titulo:"This is the first title", descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
        {id: 2, titulo:"This is the second title", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
      ],
      titulo: "",
      descripcion: "",
      snackbar: false,
      mensajeSnackbar: '',
      msjForm: 'agregar',
      colorForm : 'success',
      indexTareaEdit: '',
    }
  },
  methods:{
    agregarTarea(){
      if (this.msjForm == 'agregar') {
        if(this.titulo != '' && this.descripcion != ''){
        this.listaTareas.push(
          {id: Date.now, titulo:this.titulo, descripcion:this.descripcion}
        )
        this.titulo = ''
        this.descripcion = ''
        this.snackbar=true
        this.mensajeSnackbar= "tu tarjeta fue agregada con exito"
        }else{
        this.snackbar= true
        this.mensajeSnackbar = 'Rellena los campos faltantes'
        }
      }else{
        /* edicion de tarjeta */
        if (this.titulo != '' && this.descripcion != '') {
        console.log("estoy en edicion");
        this.listaTareas[this.indexTareaEdit].titulo = this.titulo
        this.listaTareas[this.indexTareaEdit].descripcion = this.descripcion
        this.snackbar =true
        this.mensajeSnackbar = " se ha modificado la tarjeta con exito"
        this.msjForm = 'agregar'
        this.colorForm = 'success'
        this.titulo = ''
        this.descripcion = ''  
        }else{
          this.snackbar= true
          this.mensajeSnackbar = 'Rellena los campos faltantes'
        }
      }
    },
    eliminarTarea(id){
      /* cuando das click en el boton lo que pasamos es el id correspondiente a esa tarjeta, y la filtramos de todo nuestro arreglo de tarjetas  */
      this.listaTareas = this.listaTareas.filter(e => e.id != id) 
      this.snackbar= true
      this.mensajeSnackbar = 'se ha eliminado con exito'
    },
    editarTarea(index){
      this.msjForm= "Editar la tarjeta" 
      this.colorForm = "warning"
      console.log("funcionando" + index);
      this.titulo = this.listaTareas[index].titulo
      this.descripcion = this.listaTareas[index].descripcion
      this.indexTareaEdit = index
    }
  },
  /* uso de la verificacion del formulario */
  setup () {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          name (value) {
            if (value?.length >= 2) return true

            return 'Name needs to be at least 2 characters.'
          },
          phone (value) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'Phone number needs to be at least 9 digits.'
          },
          email (value) {
            return true
            /* validacion que no permite numeros en la validacion */
            /* if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return 'Must be a valid e-mail.' */
          },
          select (value) {
            if (value) return true

            return 'Select an item.'
          },
        },
      })
      const name = useField('name')
      const phone = useField('phone')
      const email = useField('email')
      const select = useField('select')

      const items = ref([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ])

      const submit = handleSubmit(values => {
        alert(JSON.stringify(values, null, 2))
      })

      return { name, phone, email, select, items, submit, handleReset }
    },
}
</script>