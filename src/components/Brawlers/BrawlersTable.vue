<template lang="pug">
  .brawlers-table
    table.u-full-width
      thead
        tr
          th Name
          th(colspan='2') Star Powers
      tbody
        brawler(v-for="brawler in brawlers" v-bind:key="brawler.id" v-bind:brawler="brawler")
</template>

<script>
import brawlers from '../../../public/sample-response-brawlers.json'
import Brawler from './Brawler.vue'

export default {
  name: 'BrawlersTable',
  data() {
    return {
      brawlers: brawlers.items,
    }
  },
  components: {
    Brawler
  }
}
</script>

<style scoped lang="scss">
.brawlers-table {
  th {
    text-align: center;
  }
}
</style>