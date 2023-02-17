<template>
  <v-container class="fill-height">
    
      <div class="d-flex align-center bg-primary pa-2 mb-3">
        <h1 class="text-h3 font-weight-bold mx-2">Naves Estelares</h1>
        <v-spacer />
        <v-text-field
          bg-color="white rounded-pill mx-2"
          density="compact"
          hide-details="auto"
          placeholder="Buscar"
          variant="solo"
            
        />
        
      </div>
      <h2 class="text-h6 font-weight-bold mx-4">Starships</h2>
      <div v-if="loading">
        <v-progress-linear
          indeterminate
          color="secondary"
        />
      </div>
      <v-table
        v-else
        density="compact"
        
      >
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-center">
              Model
            </th>
            <th class="text-center">
              Passengers
            </th>
            <th class="text-right">
              Starship Class
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="naves in starships"
            :key="naves.id"
          >
            <td class="text-left">
              {{ naves.name }}
            </td>
            <td class="text-center">
              {{ naves.model }}
            </td>
            <td class="text-center">
              {{ naves.passengers }}
            </td>
            <td class="text-right">
              {{ naves.starship_class }}
            </td>
          </tr>
        </tbody>
      </v-table>
  
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { http } from '@/services/swapi';
const loading = ref(false);
const starships = ref(null);

onMounted(() => {
  getStarships();
})

function getStarships() {
  loading.value = true;
  http.get('starships')
    .then(({ data }) => {
      starships.value = data.results;
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      loading.value = false;
    });
}


</script>
