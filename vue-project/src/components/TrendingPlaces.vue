<script setup lang="ts">
import { ref, onMounted } from "vue"
import { api } from "../services/api"
import PlaceCard from "./PlaceCard.vue"
import type { Place } from "../types/place"

const trendingPlaces = ref<Place[]>([])

async function loadTrending() {
  const { data } = await api.get("/trending")
  console.log("Trending data:", data)
  trendingPlaces.value = data.data

}

onMounted(loadTrending)
</script>

<template>
<section class="max-w-7xl mx-auto px-6 py-14">

  <h2 class="text-3xl font-bold mb-8">
    Trending Places
  </h2>

  <div class="grid md:grid-cols-4 gap-8">
    <PlaceCard
      v-for="place in trendingPlaces"
      :key="place.id"
      :place="place"
    />
  </div>

</section>
</template>