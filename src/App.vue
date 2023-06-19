<template>
  <v-app>
    <v-main>
      <v-toolbar 
          color="#d5e8ff"
          :dark="true"
        >
          <v-app-bar-nav-icon @click="menu"></v-app-bar-nav-icon>
          <v-toolbar-title>Danone</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="changeroute()">mdi-account</v-icon>
          </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        color="#E8F3FF"
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav >
          <v-list-item color="#10249f" prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/"></v-list-item>
          <v-list-item color="#10249f" prepend-icon="mdi-account" title="perfil" value="perfil" to="/perfil"></v-list-item>
          <v-list-item color="#10249f" prepend-icon="mdi-bottle-soda" title="productos" value="Productos" to="/productos"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer:false
  }),
  methods:{
    menu(){
      this.drawer=true
    },
    changeroute(){
            this.$router.push({ path: '/perfil'});
        },
  },
  
}
</script>
