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
    
    <div v-if="place?.reviews?.length" class="mt-12">
    <h2 class="text-2xl font-semibold mb-6">
        Reseñas ({{ place.total_reviews }})
    </h2>

    <transition-group
        name="fade"
        tag="div"
        class="space-y-6"
    >
        <div
        v-for="(review, index) in visibleReviews"
        :key="index"
        class="border-b pb-4"
        >
        <div class="flex items-center gap-2 text-yellow-500 font-medium">
            ⭐ {{ review.rating }}
        </div>
        <p class="text-gray-600 mt-2">
            {{ review.comment }}
        </p>
        </div>
    </transition-group>

    <div v-if="place.reviews.length > initialLimit" class="mt-6">
        <button
        @click="toggleReviews"
        class="text-blue-600 font-semibold hover:underline transition"
        >
        {{ expanded ? "Ver menos" : `Ver más (${remainingReviews})` }}
        </button>
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

const initialLimit = 3;
const expanded = ref(false);

const visibleReviews = computed(() => {
  if (!place.value?.reviews) return [];

  return expanded.value
    ? place.value.reviews
    : place.value.reviews.slice(0, initialLimit);
});

const remainingReviews = computed(() => {
  return place.value.reviews.length - initialLimit;
});

function toggleReviews() {
  expanded.value = !expanded.value;
}

const route = useRoute();
const store = usePlaceStore();

const showModal = ref(false);

const place = computed(() => store.selectedPlace);

onMounted(() => {
  store.fetchPlaceById(route.params.id);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>