<template>
  <v-app>
    <v-main>
      <v-toolbar 
          :color="primary"
          :dark="true"
        >
          <v-app-bar-nav-icon @click="menu"></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about" to="/about"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="grid" value="grid" to="/grid"></v-list-item>
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
    }
  }
}
</script>
