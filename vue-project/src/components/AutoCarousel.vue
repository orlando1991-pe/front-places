<template>
  <div class="relative overflow-hidden rounded-3xl shadow-xl">
    <img
      :src="places[current]?.images?.[0]"
      class="w-full h-[400px] object-cover transition-all duration-700"
    />

    <div class="absolute inset-0 bg-black/40 flex items-end p-8">
      <div>
        <h3 class="text-3xl text-white font-bold">
          {{ places[current]?.name }}
        </h3>
        <p class="text-white/80 mt-2">
          {{ places[current]?.region }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { usePlaceStore } from "@/stores/place.store";

const store = usePlaceStore();
const current = ref(0);
let interval;

const places = store.places;

onMounted(async () => {
  if (!store.places.length) {
    await store.fetchPlaces({ limit: 5 });
  }

  interval = setInterval(() => {
    current.value = (current.value + 1) % store.places.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>