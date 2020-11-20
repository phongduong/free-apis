<template>
  <div>
    <SearchForm form-action="Generate" form-title="Random" @submit="submit" />
    <section v-if="entries" class="entry-list">
      <EntryItem
        v-for="(entry, index) in entries"
        :key="index"
        :entry="entry"
      />
    </section>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import EntryItem from '@/components/EntryItem'
import { encodeParams } from '~/utils'

export default {
  components: { SearchForm, EntryItem },
  data() {
    return {
      category: '',
      entries: [],
    }
  },
  async mounted() {
    const { category = '' } = this.$route.query

    await this.submit(encodeParams({ category }))
  },
  methods: {
    async submit(params) {
      const { entries } = await this.$axios.$get(
        `/random?category=${params.category}`
      )

      this.entries = entries
    },
  },
}
</script>

<style></style>
