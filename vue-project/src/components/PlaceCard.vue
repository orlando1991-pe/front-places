<template>
  <router-link 
    :to="`/place/${place.id}`"
    class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
  >
    <div class="relative">
      <img
        :src="place.image_url || defaultImage"
        class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-1">
        {{ place.name }}
      </h3>

      <p class="text-sm text-gray-500 mb-2">
        {{ place.region }}
      </p>

      <div class="text-sm font-medium text-yellow-500">
        ⭐ {{ place.avg_rating }} ({{ place.total_reviews }})
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps(["place"]);
const defaultImage = "https://images.unsplash.com/photo-1505764706515-aa95265c5abc";
</script>

<style scoped>
.card {
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>