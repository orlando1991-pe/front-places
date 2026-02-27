<template>
  <div class="carousel">
    <img :src="images[current]" />
    <button @click="prev">‹</button>
    <button @click="next">›</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ images: string[] }>();
const current = ref(0);

function next() {
  current.value = (current.value + 1) % props.images.length;
}
function prev() {
  current.value =
    (current.value - 1 + props.images.length) % props.images.length;
}
</script>

<style scoped>
.carousel {
  position: relative;
}
img {
  width: 100%;
  border-radius: 12px;
}
button {
  position: absolute;
  top: 50%;
}
</style>