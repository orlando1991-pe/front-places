<template>
  <Navbar />

  <div v-if="place" class="pt-24 max-w-4xl mx-auto px-6">
    <ImageCarousel 
      :images="place.images || []"
      @click="showModal = true"
    />

    <h1 class="text-3xl font-bold mt-6">
      {{ place.name }}
    </h1>

    <RatingStars 
      :rating="place.avg_rating" 
      :total="place.total_reviews" 
    />

    <p class="mt-4 text-gray-600">
      {{ place.description }}
    </p>
    <div v-if="place.reviews?.length" class="mt-10">
      <h2 class="text-xl font-semibold mb-4">Reseñas</h2>

      <div
        v-for="(review, index) in place.reviews"
        :key="index"
        class="border-b py-4"
      >
        <div class="text-yellow-500">
          ⭐ {{ review.rating }}
        </div>
        <p class="text-gray-600">{{ review.comment }}</p>
      </div>
    </div>

  </div>
  <div v-else class="pt-32 text-center text-gray-500">
    Cargando...
  </div>
  
  <ImageModal 
    v-if="place"
    :images="place.images || []" 
    :visible="showModal"
    @close="showModal = false"
  />

</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePlaceStore } from "../stores/place.store";
import Navbar from "../components/Navbar.vue";
import ImageCarousel from "../components/ImageCarousel.vue";
import RatingStars from "../components/RatingStars.vue";
import ImageModal from "../components/ImageModal.vue";

const route = useRoute();
const store = usePlaceStore();

const showModal = ref(false);

const place = computed(() => store.selectedPlace);

onMounted(() => {
  store.fetchPlaceById(route.params.id);
});
</script>