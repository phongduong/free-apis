<template>
  <form @submit.prevent="submit">
    <h1 class="text-center">{{ formTitle }}</h1>
    <div class="form-control">
      <label for="title">Title</label>
      <input id="title" v-model="title" />
    </div>
    <div class="form-control">
      <label for="category">Category</label>
      <select id="category" v-model="category">
        <option value="">All</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <div class="form-control">
      <input
        class="bg-primary text-white cursor-pointer"
        type="submit"
        :value="formAction"
      />
    </div>
  </form>
</template>

<script>
import { encodeParams } from '~/utils'

export default {
  props: {
    formAction: {
      type: String,
      default: 'Search',
    },
    formTitle: {
      type: String,
      default: 'Search',
    },
  },
  data() {
    return {
      categories: [],
      category: '',
      title: '',
    }
  },
  async mounted() {
    const categories = await this.$axios.$get(
      'https://api.publicapis.org/categories'
    )
    const { category = '', title = '' } = this.$route.query

    this.categories = categories

    this.category = decodeURIComponent(category)
    this.title = decodeURIComponent(title)
  },
  methods: {
    submit() {
      const { title, category } = encodeParams({
        title: this.title,
        category: this.category,
      })

      this.$router.push(`?title=${title}&category=${category}`)
      this.$emit('submit', { title, category })
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  @apply bg-gray-200 p-4;

  .form-control {
    @apply mb-4;

    label {
      @apply block;
    }

    input,
    select {
      @apply w-full p-2;
    }
  }
}
</style>
