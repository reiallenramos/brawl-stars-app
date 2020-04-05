<template lang="pug">
  main-content
    | Players
    .grid
      .row
        .four.columns(v-for="brawler in brawlers" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
</template>

<script>
import MainContent from './MainContent.vue'
import Card from './Card.vue'
import SampleCardData from '../../public/sample-card-data.json'

export default {
  name: 'Players',
  data() {
    return {
      brawlers: SampleCardData.items,
    }
  },
  components: {
    MainContent,
    Card,
    SampleCardData
  }
}
</script>