<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container >
  <v-container class="bg-blue" style="display: grid; height: 20rem; width: auto; align-content: center;">
    <v-sheet class="d-flex flex-wrap flex-row mb-6 justify-space-around align-center" min-height="100">
      <v-sheet ><v-btn color="primary">Button</v-btn></v-sheet>
      <v-sheet ><v-btn color="blue" dark>Button</v-btn></v-sheet>
      <v-sheet ><v-btn color="secondary" flat >Button</v-btn></v-sheet>
      <v-sheet ><v-btn color="danger" size="large">Button</v-btn></v-sheet>
      <v-sheet ><v-btn color="danger" size="large">Button</v-btn></v-sheet>
      <v-sheet ><v-btn prepend-icon="mdi-vuetify">Button</v-btn></v-sheet>
      <v-sheet > <v-btn
        class="ma-2"
        variant="text"
        icon="mdi-thumb-up"
        color="blue-lighten-2"
      ></v-btn></v-sheet>
      <v-btn
        class="ma-2"
        color="indigo"
        icon="mdi-cloud-upload"
      ></v-btn>
      <v-sheet > <v-btn
        class="ma-2"
        color="indigo"
        icon="mdi-cloud-upload"
      ></v-btn></v-sheet>
      <v-btn block>Block Button</v-btn>
    </v-sheet>
  </v-container>
</template>