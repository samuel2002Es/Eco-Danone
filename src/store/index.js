import { createStore } from 'vuex'
import { createClient } from "contentful";

async function getstaticProps(state){
    const client = createClient({
        space: "u4pwhy3gvhh8",
        accessToken: "D0LpcFammOdwlQIXe-WDFhcRtQ1jnfqPLIx8yhLPsik"
        
        //space: process.env.CONTENTFUL_SPACE_ID,
        //accessToken: process.env.CONTENTFUL_ACCESSS_KEY
    })
    //limit:2'
    client.getEntries({content_type: 'productos',}).then(async (entries)=>{
      const data = entries.items
      state.datosPrueba = data
      //console.log(state.datosPrueba[0].fields)
    })
    client.getEntries({content_type: 'productos',limit:2}).then(async (entries)=>{
      const data = entries.items
      state.datosPrueba2 = data
      //console.log(state.datosPrueba[0].fields)
    })

/*     client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.fields) {
      console.log(process.env.CONTENTFUL_SPACE_ID)
      console.log(entry.fields);
    }
  });
}); */
}
export default createStore({
  state: {
    datosPrueba:null,
    datosPrueba2:null,
    prueba:{
      saludo:"hola"
    },
  },
  getters: {
  },
  mutations: {
    obtenerDB(state){
      getstaticProps(state)
    },
    dataDB(){
      console.log( getstaticProps())
    }
  },
  actions: {
  },
  modules: {
  }
})
