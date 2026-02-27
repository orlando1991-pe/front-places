<template>
  <Navbar />

  <section class="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 to-gray-100">
    <h2 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Descubre los mejores lugares en España
    </h2>

    <p class="text-lg text-gray-600 max-w-xl mb-8">
      Explora playas, cultura, naturaleza y experiencias únicas por todo el país.
    </p>

    <router-link 
      to="/explore"
      class="bg-primary text-black px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg"
    >
      Explorar
    </router-link>
  </section>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>