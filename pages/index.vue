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
import { encodeParams } from '~/utils'

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

    await this.submit(
      encodeParams({
        category,
        title,
      })
    )
  },
  methods: {
    async submit(params) {
      const { title, category } = params
      const { entries } = await this.$axios.$get(
        `/entries?title=${title}&category=${category}`
      )
      this.entries = entries
    },
  },
}
</script>

<style lang="scss" scoped></style>
