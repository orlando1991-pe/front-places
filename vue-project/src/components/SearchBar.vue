<template>

<div class="bg-white rounded-2xl shadow-lg p-4 flex gap-3 items-center">

<Search class="w-5 h-5 hover:scale-125 transition"/>

<input
v-model="search"
placeholder="Buscar lugares..."
class="flex-1 outline-none"
/>

<select v-model="category" class="border rounded-lg px-3 py-2">

<option value="">Todas</option>
<option>Naturaleza</option>
<option>Playas</option>
<option>Cultura</option>
<option>Gastronomía</option>

</select>

<button class="bg-blue-600 text-white px-6 py-2 rounded-lg">
Buscar
</button>

</div>

</template>

<script setup>

import { ref } from "vue"
import { Search } from "lucide-vue-next"

const search = ref("")
const category = ref("")

</script>