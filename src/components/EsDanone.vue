<template>
    <v-container>
        <v-row>
            <v-col>
                <v-sheet>
                    <h2 class="text-center mb-10">En Danone nos interesamos por tu salud</h2>
                    <v-card class="mb-5" v-for="item in listaPrductos" :key="item.id">
                        <v-card-title>{{ item.titulo }} </v-card-title>
                        <v-card-text>
                            {{ item.descripcion }}
                        </v-card-text>
                    </v-card>
                    <v-card v-for="item in listaProdutos" :key="item.id">
                        <h3>samuel</h3>
                    </v-card>
                </v-sheet>
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
                {id: 1, titulo:"This is the first title", descripcion: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
                {id: 2, titulo:"This is the second title", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae numquam aperiam sapiente amet perferendis accusamus, explicabo inventore. Quo placeat tempora laborum? Ea velit beatae maxime adipisci? Delectus, cum ipsa."},
            ]
        }
    },
    methods:{
        showdata(){
            console.log(this.listaPrductos.length)
        }
    }
}
</script>