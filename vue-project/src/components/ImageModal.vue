<template>
  <div 
    v-if="visible"
    class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
  >
    <div class="relative max-w-4xl w-full">
      <img :src="images[current]" class="w-full rounded-lg" />

      <button 
        @click="prev"
        class="absolute left-4 top-1/2 text-white text-3xl"
      >‹</button>

      <button 
        @click="next"
        class="absolute right-4 top-1/2 text-white text-3xl"
      >›</button>

      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 text-white text-xl"
      >✕</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["images", "visible"]);
const current = ref(0);

function next() {
  current.value = (current.value + 1) % props.images.length;
}
function prev() {
  current.value =
    (current.value - 1 + props.images.length) % props.images.length;
}
</script>