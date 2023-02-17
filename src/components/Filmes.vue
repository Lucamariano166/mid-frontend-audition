<template>
  <v-container class="fill-height">
    
      <div class="d-flex align-center bg-primary pa-2 mb-3">
        <h1 class="text-h3 font-weight-bold mx-2">Filmes</h1>
        <v-spacer />
        <v-text-field
          bg-color="white rounded-pill mx-2"
          density="compact"
          hide-details="auto"
          placeholder="Buscar"
          variant="solo"
            
        />
        
      </div>
      <h2 class="text-h6 font-weight-bold mx-4">Films</h2>
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
              Title
            </th>
            <th class="text-right">
              Director
            </th>
            <th class="text-right">
              Release Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="filmes in films"
            :key="filmes.id"
          >
            <td class="text-left">
              {{ filmes.title }}
            </td>
            <td class="text-right">
              {{ filmes.director }}
            </td>
            <td class="text-right">
              {{ filmes.release_date }}
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
const films = ref(null);

onMounted(() => {
  getFilmes();
})

function getFilmes() {
  loading.value = true;
  http.get('films')
    .then(({ data }) => {
      films.value = data.results;
    })
    .catch((error) => {
      alert(error);
    })
    .finally(() => {
      loading.value = false;
    });
}


</script>
