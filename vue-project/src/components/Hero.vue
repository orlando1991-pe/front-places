<template>
<section class="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">

  <div class="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
  </div>

  <div class="relative z-10 max-w-4xl px-6">

    <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      Descubre lugares increíbles en España
    </h1>

    <p class="text-xl text-white/80 mb-10">
      Encuentra restaurantes, playas, cultura y experiencias únicas.
    </p>

    <div class="flex justify-center gap-4">

      <router-link
        to="/explore"
        class="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
      >
        Explorar lugares
      </router-link>

      <router-link
        to="/explore"
        class="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
      >
        Ver destinos
      </router-link>

    </div>

  </div>

</section>
</template>