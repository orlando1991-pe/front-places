<template>
  <div class="filters">
    <input v-model="search" placeholder="Buscar lugar..." />
    <button @click="apply">Buscar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePlaceStore } from "../stores/place.store";

const search = ref("");
const store = usePlaceStore();

function apply() {
  store.fetchPlaces({ search: search.value });
}
</script>

<style scoped>
.filters {
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
}
input {
  flex: 1;
  padding: 0.5rem;
}
</style>