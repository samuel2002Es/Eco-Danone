import { createStore } from 'vuex'
import { createClient } from "contentful";


async function getstaticProps(){

    const client = createClient({
        space: "u4pwhy3gvhh8",
        accessToken: "D0LpcFammOdwlQIXe-WDFhcRtQ1jnfqPLIx8yhLPsik"
        
        //space: process.env.CONTENTFUL_SPACE_ID,
        //accessToken: process.env.CONTENTFUL_ACCESSS_KEY
    })

    client.getEntries().then(function (entries) {
  // log the title for all the entries that have it
  entries.items.forEach(function (entry) {
    if (entry.fields) {
      console.log(process.env.CONTENTFUL_SPACE_ID)
      console.log(entry);
    }
  });
});
}
getstaticProps()
export default createStore({
  state: {
    prueba:{
      saludo:"hola"
    },
  },
  getters: {
  },
  mutations: {
    dataDB(){
      getstaticProps()
    }
  },
  actions: {
  },
  modules: {
  }
})
