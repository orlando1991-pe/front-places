<template>
  <nav class="bg-white shadow-sm fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-primary">DescubreEspaña</h1>

      <div class="flex gap-6 text-gray-600 font-medium">
        <router-link class="hover:text-accent transition" to="/">Inicio</router-link>
        <router-link class="hover:text-accent transition" to="/explore">Explorar</router-link>
      </div>
    </div>
  </nav>
</template>