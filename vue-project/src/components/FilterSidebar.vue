<script setup lang="ts">
import { ref, watch } from "vue"

const emit = defineEmits(["filter-change"])

const category = ref("")
const minRating = ref(0)

watch([category, minRating], () => {
  emit("filter-change", {
    category: category.value,
    minRating: minRating.value
  })
})
</script>

<template>

<div class="bg-white p-6 rounded-xl shadow">

  <h3 class="font-bold mb-4">
    Filtros
  </h3>

  <div class="mb-4">
    <label class="block text-sm mb-2">
      Categoría
    </label>

    <select
      v-model="category"
      class="w-full border rounded-lg p-2"
    >
      <option value="">Todas</option>
      <option value="Cultura">Cultura</option>
      <option value="Playa">Playa</option>
      <option value="Naturaleza">Naturaleza</option>
    </select>

  </div>

  <div>

    <label class="block text-sm mb-2">
      Valoración mínima
    </label>

    <input
      type="range"
      min="0"
      max="5"
      step="0.5"
      v-model="minRating"
      class="w-full"
    />

    <p class="text-sm mt-2">
      ⭐ {{ minRating }}
    </p>

  </div>

</div>

</template>