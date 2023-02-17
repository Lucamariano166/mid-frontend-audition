<template>
  <v-container class="fill-height">
    
      <div class="d-flex align-center bg-primary pa-2 mb-3">
        <h1 class="text-h3 font-weight-bold mx-2">Planets</h1>
        <v-spacer />
        <v-text-field
          bg-color="white rounded-pill mx-2"
          density="compact"
          hide-details="auto"
          placeholder="Buscar"
          variant="solo"
            
        />
        
      </div>
      <h2 class="text-h6 font-weight-bold mx-4">Planets</h2>
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
            <th class="text-right">
              Diameter
            </th>
            <th class="text-right">
              Population
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="planeta in planets"
            :key="planeta.id"
          >
            <td class="text-left">
              {{ planeta.name }}
            </td>
            <td class="text-right">
              {{ planeta.diameter }}
            </td>
            <td class="text-right">
              {{ planeta.population }}
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
const planets = ref(null);

onMounted(() => {
  getPlanets();
})

function getPlanets() {
  loading.value = true;
  http.get('planets')
    .then(({ data }) => {
      planets.value = data.results;
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      loading.value = false;
    });
}


</script>
