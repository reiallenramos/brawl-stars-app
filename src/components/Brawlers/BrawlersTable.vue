<template lang="pug">
  .brawlers-table
    table.u-full-width
      thead
        tr
          th Name
          th(colspan='2') Star Powers
      tbody
        tr(v-for="brawler in brawlers" v-bind:key="brawler.id")
          td {{brawler.name}}
          template(v-for="starPower in brawler.starPowers")
            td {{ starPower.name }}
</template>

<script>
import brawlers from '../../../public/sample-response-brawlers.json'

export default {
  name: 'BrawlersTable',
  data() {
    return {
      brawlers: brawlers.items,
    }
  },
}
</script>

<style scoped lang="scss">
.brawlers-table {
  th {
    text-align: center;
  }
}
</style>