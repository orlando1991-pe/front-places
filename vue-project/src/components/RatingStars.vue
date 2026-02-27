<template>
  <div class="stars">
    ⭐ {{ rating }} ({{ total }} reseñas)
  </div>
</template>

<script setup lang="ts">
defineProps({
  rating: Number,
  total: Number
});
</script>