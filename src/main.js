import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import { initializeApp } from "firebase/app";
/* para utilizar bases de datos no relacionales en firebase utilizamos  */
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCOOCvTpB7vhYgK0lmRHlnJ6Rw4mUTTqE",
  authDomain: "vue-calendario-a2788.firebaseapp.com",
  projectId: "vue-calendario-a2788",
  storageBucket: "vue-calendario-a2788.appspot.com",
  messagingSenderId: "789704547873",
  appId: "1:789704547873:web:7dca6bf65f335a57bf0d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
