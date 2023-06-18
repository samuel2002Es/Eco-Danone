import { createClient } from "contentful";

export async function getstaticProps(){

    const client = createClient({
        space: "u4pwhy3gvhh8",
        accessToken: "D0LpcFammOdwlQIXe-WDFhcRtQ1jnfqPLIx8yhLPsik"
        
        //space: process.env.CONTENTFUL_SPACE_ID,
        //accessToken: process.env.CONTENTFUL_ACCESSS_KEY
    })

    const res = await client.getEntries({ content_type: 'recipe'})

    return {
        props: {
            recipies: res.items
        }
    }
}
export default function Recipies({ recipies }){
    console.log(recipies)
}