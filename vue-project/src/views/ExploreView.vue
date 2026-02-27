<template>
  <Navbar />

  <div class="pt-24 max-w-7xl mx-auto px-6">

    <!-- Filtros -->
    <div class="flex flex-col md:flex-row gap-4 mb-8">
      <input
        v-model="search"
        placeholder="Buscar lugar..."
        class="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-accent outline-none"
      />
      <button
        @click="apply"
        class="bg-accent text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
      >
        Buscar
      </button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <PlaceCard
        v-for="place in store.places"
        :key="place.id"
        :place="place"
      />
    </div>

    <div class="flex justify-center gap-4 mt-10">
        <button 
            v-if="store.currentPage > 1"
            @click="changePage(store.currentPage - 1)"
            class="px-4 py-2 bg-gray-200 rounded"
        >
            Anterior
        </button>

        <button 
            v-if="store.currentPage < store.totalPages"
            @click="changePage(store.currentPage + 1)"
            class="px-4 py-2 bg-gray-800 text-white rounded"
        >
            Siguiente
        </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePlaceStore } from "@/stores/place.store";
import Navbar from "@/components/Navbar.vue";
import PlaceCard from "@/components/PlaceCard.vue";

const store = usePlaceStore();
const search = ref("");

function changePage(page) {
  store.fetchPlaces({ page });
}

onMounted(() => {
  store.fetchPlaces();
});

function apply() {
  store.fetchPlaces({ search: search.value });
}
</script>