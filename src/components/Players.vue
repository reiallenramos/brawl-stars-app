<template lang="pug">
  main-content
    | Players
    .grid
      .row
        .four.columns(v-for="brawler in brawlers.slice(0,3)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(3,6)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(6,9)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(9,12)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(12,15)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(15,18)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(18,21)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(21,24)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(24,27)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(27,30)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(30,33)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(33,35)" v-bind:key="brawler.id")
          card(v-bind:record="brawler")
</template>

<script>
import MainContent from './MainContent.vue'
import Card from './Card.vue'
import SampleCardData from '../../public/sample-response-brawlers.json'

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