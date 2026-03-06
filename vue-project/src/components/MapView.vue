<template>

<div class="mt-10">

<LMap
:zoom="6"
:center="[40.4168, -3.7038]"
style="height:600px"
>

<LTileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<LMarker :lat-lng="[43.3183, -1.9812]"/>

</LMap>

</div>

</template>

<script setup>

import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

</script>