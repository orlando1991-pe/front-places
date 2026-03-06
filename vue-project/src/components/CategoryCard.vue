<template>

<div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center cursor-pointer">

<div class="text-3xl mb-2">
{{ icon }}
</div>

<h3 class="font-semibold">
{{ title }}
</h3>

</div>

</template>

<script setup>

defineProps({
title:String,
icon:String
})

</script>