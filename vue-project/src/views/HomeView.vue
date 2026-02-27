<template>
  <Navbar />

  <section class="relative min-h-[80vh] flex items-center justify-center text-center text-white">
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <div class="relative z-10 px-6">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Descubre España como nunca antes
      </h1>

      <p class="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
        Explora los destinos mejor valorados, vive experiencias únicas
        y encuentra tu próxima aventura.
      </p>

      <router-link
        to="/explore"
        class="bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition shadow-2xl"
      >
        Explorar ahora
      </router-link>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-3xl font-bold text-gray-900 mb-10 text-center">
      Lugares destacados
    </h2>

    <AutoCarousel />
  </section>

  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
        Explora por categoría
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center cursor-pointer">
          🌿 Naturaleza
        </div>
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center cursor-pointer">
          🏖 Playas
        </div>
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center cursor-pointer">
          🏛 Cultura
        </div>
        <div class="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center cursor-pointer">
          🍽 Gastronomía
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <h2 class="text-4xl font-bold mb-6">
      ¿Listo para tu próxima aventura?
    </h2>

    <router-link
      to="/explore"
      class="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
    >
      Descubrir destinos
    </router-link>
  </section>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import AutoCarousel from "@/components/AutoCarousel.vue";
</script>