<template>

<div>

<img
:src="images[0]"
class="w-full h-[400px] object-cover rounded-2xl cursor-pointer"
@click="openModal"
/>

<div
v-if="showModal"
class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
>

<div class="relative w-[80%] max-w-4xl">

<button
@click="showModal=false"
class="absolute -top-10 right-0 text-white text-xl"
>
✕
</button>

<Swiper
:slides-per-view="1"
:navigation="true"
:pagination="{ clickable: true }"
class="rounded-xl overflow-hidden"
>

<SwiperSlide
v-for="img in images"
:key="img"
>

<img
:src="img"
class="w-full h-[500px] object-cover"
/>

</SwiperSlide>

</Swiper>

</div>

</div>

</div>

</template>

<script setup>

import { ref } from "vue"

import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

defineProps({
images:Array
})

const showModal = ref(false)

function openModal(){
showModal.value = true
}

</script>