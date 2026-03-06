<template>

<Navbar/>

<HeroSection/>

<StatsSection/>

<FeaturesSection/>

<Trending/>

<section class="max-w-7xl mx-auto px-6 py-20">

<h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">
Lugares destacados
</h2>

<AutoCarousel/>

</section>

<section class="bg-gray-50 py-20">

<div class="max-w-7xl mx-auto px-6">

<h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
Explora por categoría
</h2>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6">

<CategoryCard title="Naturaleza" icon="🌿"/>
<CategoryCard title="Playas" icon="🏖"/>
<CategoryCard title="Cultura" icon="🏛"/>
<CategoryCard title="Gastronomía" icon="🍽"/>

</div>

</div>

</section>

</template>

<script setup>
import Navbar from "../components/Navbar.vue"
import HeroSection from "../components/Hero.vue"
import StatsSection from "../components/StatsSection.vue"
import FeaturesSection from "../components/FeaturesSection.vue"
import AutoCarousel from "../components/AutoCarousel.vue"
import CategoryCard from "../components/CategoryCard.vue"
import Trending from "../components/TrendingPlaces.vue"
</script>