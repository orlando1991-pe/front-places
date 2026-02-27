<template>
  <Navbar />

  <div class="pt-24 max-w-7xl mx-auto px-6">
    <form 
    @submit.prevent="apply"
    class="relative mb-10"
    >
    <input
        v-model="search"
        type="text"
        placeholder="Buscar destino..."
        class="w-full border border-gray-300 rounded-full px-6 py-4 pr-28 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <button
        type="submit"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
    >
        Buscar
    </button>
    </form>

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
  store.fetchPlaces({
    search: search.value,
    page: 1
  });
}
</script>