<template>

<div
class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
@click="$router.push('/place/'+place.id)"
>

<div class="relative">

<img
:src="place.images?.[0]"
class="h-56 w-full object-cover group-hover:scale-105 transition"
/>

<div
class="absolute top-3 right-3 bg-white/80 backdrop-blur px-2 py-1 rounded-lg text-sm"
>
⭐ {{ place.avg_rating }}
</div>

</div>

<div class="p-4">

<h3 class="font-semibold text-lg">
{{ place.name }}
</h3>

<p class="text-gray-500 text-sm">
📍 {{ place.region }}
</p>

</div>

</div>

</template>

<script setup>
defineProps({ place:Object })
</script>