<template>
  <div>
    <SearchForm @submit="submit" />
    <section v-if="entries" class="entry-list">
      <EntryItem
        v-for="(entry, index) in entries"
        :key="index"
        :entry="entry"
      />
    </section>
    <p v-else>Not found API</p>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import EntryItem from '@/components/EntryItem'

export default {
  components: {
    SearchForm,
    EntryItem,
  },
  data() {
    return { title: '', category: '', entries: [] }
  },
  async mounted() {
    const { category = '', title = '' } = this.$route.query

    await this.submit({
      category,
      title,
    })
  },
  methods: {
    async submit(params) {
      const { entries } = await this.$axios.$get(
        `/entries?title=${encodeURIComponent(
          params.title
        )}&category=${encodeURIComponent(params.category)}`
      )
      this.entries = entries
    },
  },
}
</script>

<style lang="scss" scoped></style>
