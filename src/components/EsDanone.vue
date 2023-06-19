<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet>
                    <div class="text-center mb-10 heading-4 text-h4">En Danone nos interesamos por tu salud</div>
                    <v-card class="mb-5" v-for="item in listaPrductos" :key="item.id">
                        <v-card-title class="px-10 mb-5">{{ item.titulo }} </v-card-title>
                        <v-card-text class="px-12 text-justify">
                            {{ item.descripcion }}
                        </v-card-text>
                        <v-card-text class="px-12 text-justify">
                            {{ item.info }}
                        </v-card-text>
                        <v-card-text class="px-12 text-justify">
                            {{ item.detalles }}
                        </v-card-text>
                    </v-card>
                </v-sheet>
                <v-btn value="about"
        block
        class="text-none mb-4"
        color="indigo-darken-3"
        size="large"
        rounded="lg"
        variant="flat"
        @click="changeroute"
      >
        Establecer mis calorias
      </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'EsDanone',
    data() {
        return {
            listaPrductos:[
                {id: 1, titulo:"¿Sabes la importancia del control de un limite diario de calorias?", descripcion: "Establecer un limite diario de calorias es muy importante para mantener una dieta saludable y equilibrada", info: "Consumir la cantidad adecuada de calorias diarias es una parte muy mportante de una dieta saludable, especialmente si buscamos cumplir con nuestro objetivos deportivos y tener una vida sana. Las calorías son muy importantes para mantener el buen funcionamiento del organismo, ya que abastece los tejidos del cuerpo como el cerebro, el corazón, el hígado y los riñones. En términos técnicos, una caloría constituye la cantidad de energía necesaria para elevar la temperatura de un kilogramo de agua en un grado centígrado. Además, ser conscientes del contenido calórico que consumimos en cada producto va más allá de bajar de peso, significa prevención de enfermedades y conocimiento sobre los alimentos y las porciones que el cuerpo necesita para estar en equilibrio",detalles:"En Danone nos importamos por la salud de nuestros consumidores y por ello creamos nuevos productos pensando en ti, ademas de eso te dejamos un espacio para que puedas establecer tu limite diario de calorias y cuidar tu salud"},
            ]
        }
    },
    methods:{
        showdata(){
            console.log(this.listaPrductos.length)
        },
        changeroute(){
            this.$router.push({ path: '/perfil'});
        },
    }
}
</script>