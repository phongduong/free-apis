<template>
  <div class="entry-item">
    <a :href="entry.Link">
      <h1>{{ entry.API }}</h1>
    </a>
    <p>{{ entry.Description }}</p>
    <p>
      Category:
      <nuxt-link :to="`/category/${entry.Category}`">
        {{ entry.Category }}
      </nuxt-link>
    </p>
    <p>Auth: {{ entry.Auth }}</p>
    <p>
      CORS: <span class="cors-label" :class="entry.Cors">{{ entry.Cors }}</span>
    </p>
    <p>
      HTTPS:
      <ion-icon
        v-if="entry.HTTPS"
        name="checkmark-circle-outline"
        class="https-true"
      ></ion-icon>
      <ion-icon
        v-else
        name="close-circle-outline"
        class="https-false"
      ></ion-icon>
    </p>
  </div>
</template>

<script>
export default {
  props: ['entry'],
}
</script>

<style lang="scss" scoped>
.entry-item {
  @apply py-2 border-b border-black;

  .cors-label {
    @apply px-1;

    &.unknown {
      @apply bg-gray-400;
    }

    &.yes {
      @apply bg-green-400;
    }

    &.no {
      @apply bg-red-400;
    }
  }

  ion-icon {
    @apply align-middle;

    &.https-true {
      @apply text-green-800;
    }

    &.https-false {
      @apply text-red-800;
    }
  }
}
</style>
