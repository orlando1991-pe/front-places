<template>
  <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">

    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

      <router-link to="/" class="font-bold text-xl text-blue-600">
        Places
      </router-link>

      <div class="flex gap-6 items-center">

        <router-link to="/" class="hover:text-blue-600">
          Home
        </router-link>

        <router-link to="/explore" class="hover:text-blue-600">
          Explorar
        </router-link>

        <button class="bg-blue-600 text-white px-4 py-2 rounded-xl">
          Login
        </button>

      </div>

    </div>

  </nav>
</template>