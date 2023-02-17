
<template>
  <div id="app">
      
    <SideBar />
    
      <div class="container-fluid">
          <router-view />
          
      </div>

      <Starships />
  </div>
</template>

<script>
//import StarWarsLibrary from '@/components/StarWarsLibrary.vue'
import SideBar from '@/components/SideBar.vue'
//import Planets from './components/Planets.vue';
//import Filmes from './components/Filmes.vue';
import Starships from './components/Starships.vue';
export default {
  components: {
    SideBar,
    
    Starships
  }
}

</script>
