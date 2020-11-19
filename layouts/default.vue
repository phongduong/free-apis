<template>
  <div class="layout">
    <header class="header bg-primary text-white p-4">
      <nav class="flex flex-col sm:flex-row justify-between items-center">
        <nuxt-link to="/" class="text-5xl">Free APIs</nuxt-link>
        <div class="nav-links">
          <nuxt-link to="/" class="text-3xl px-4">List</nuxt-link>
          <nuxt-link to="/random" class="text-3xl px-4">Random</nuxt-link>
        </div>
      </nav>
    </header>
    <main class="m-2 md:mx-auto md:w-3/4 xl:w-1/2">
      <div class="container mx-auto">
        <Nuxt />
      </div>
    </main>
    <footer class="bg-primary text-white p-4 mt-4">
      <p>
        Created by <a href="https://phongduong.dev">Phong Duong</a> with
        <a href="https://github.com/davemachado/public-api">Public API</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
* {
  @apply text-lg;
}

h1 {
  @apply text-4xl;
}

h2 {
  @apply text-3xl;
}

h3 {
  @apply text-2xl;
}

a {
  @apply underline;
}
</style>
