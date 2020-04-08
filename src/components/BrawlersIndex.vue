<template lang="pug">
  div
    .button(v-on:click="sort('name')") Sort by Name
    .button(v-on:click="sort('class')") Sort by Class
    .grid
      .row
        .four.columns(v-for="brawler in brawlers.slice(0,3)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(3,6)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(6,9)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(9,12)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(12,15)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(15,18)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(18,21)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(21,24)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(24,27)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(27,30)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(30,33)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
      .row
        .four.columns(v-for="brawler in brawlers.slice(33,35)" v-bind:key="brawler.id")
          brawler-card(v-bind:record="brawler")
</template>

<script>
import MainContentSection from './MainContentSection.vue'
import BrawlerCard from './BrawlerCard.vue'
import BrawlersData from '../../public/sample-response-brawlers.json'

let defaultOrder = BrawlersData.items.sort(function(a, b) {
  return (a.name > b.name) ? 1 : -1;
});

export default {
  name: 'Brawlers',
  data() {
    return {
      currentSort: 'ASC',
      brawlers: defaultOrder,
    }
  },
  methods: {
    sort(type) {
      let _that = this;
      BrawlersData.items.sort(function(a, b) {
        let res;
        if (type == 'name') {
          if (_that.currentSort == 'ASC') {
            res = (a.name > b.name) ? 1 : -1;
          } else {
            res = (a.name > b.name) ? -1 : 1;
          }
        } else if (type == 'class') {
          if (_that.currentSort == 'ASC') {
            res = (a.class > b.class) ? 1 : -1;
          } else {
            res = (a.class > b.class) ? -1 : 1;
          }
        }
        return res;
      });
      this.currentSort = this.currentSort == 'ASC' ? 'DESC' : 'ASC';
    }
  },
  components: {
    MainContentSection,
    BrawlerCard
  }
}
</script>
