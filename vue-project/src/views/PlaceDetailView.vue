<template>

<Navbar/>

<div v-if="place" class="max-w-6xl mx-auto px-6 py-10">

<ImageGallery :images="place.images"/>

<h1 class="text-4xl font-bold mt-6">
{{ place.name }}
</h1>

<p class="text-gray-500 mt-2">
📍 {{ place.region }}
</p>

<div class="flex items-center text-yellow-500 mt-2">
⭐ {{ place.avg_rating }} ({{ place.total_reviews }} reviews)
</div>

<div class="mt-6 text-lg text-gray-700">
{{ place.description }}
</div>

<MapView :lat="place.lat" :lng="place.lng"/>

</div>

</template>

<script setup>

import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

import Navbar from "../components/Navbar.vue"
import MapView from "../components/MapView.vue"
import ImageGallery from "../components/ImageGallery.vue"

const route = useRoute()

const place = ref(null)
const reviews = ref([])

onMounted(async () => {

const id = route.params.id

const res = await fetch(`https://2bxcdcs4-4000.uks1.devtunnels.ms/api/places/${id}`)
place.value = await res.json()

const rev = await fetch(`https://2bxcdcs4-4000.uks1.devtunnels.ms/api/places/${id}/reviews`)
reviews.value = await rev.json()

})

</script>