<template>
  <div>
    <h1>Category: {{ category }}</h1>
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
import EntryItem from '@/components/EntryItem'

export default {
  components: {
    EntryItem,
  },
  data() {
    return {
      category: '',
      entries: '',
    }
  },
  async mounted() {
    const { id } = this.$route.params
    const { entries } = await this.$axios.$get(`/entries?category=${id}`)

    this.category = id
    this.entries = entries
  },
}
</script>

<style></style>
