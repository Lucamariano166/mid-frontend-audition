<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer expand-on-hover theme="dark" rail>
        
        <v-list>
          <v-list-item prepend-avatar="img/logo.png" title="Star Wars"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          
          <v-list-item prepend-avatar="img/personagens.jpg" title="Personagens" value="/"></v-list-item> 
          <v-list-item prepend-avatar="img/filmes.webp" title="Filmes" to="/test"></v-list-item>
          <v-list-item prepend-avatar="img/planeta.png" title="Planetas" value="shared"></v-list-item>
          <v-list-item prepend-avatar="img/naves.png" title="Naves" value="starred"></v-list-item>
          <v-list-item prepend-avatar="" title="Graficos" value=""></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 0px"></v-main>
    </v-layout>
  </v-card>
</template>


