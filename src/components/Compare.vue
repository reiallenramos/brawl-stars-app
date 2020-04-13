<template lang="pug">
  div
    compare-brawler-selector(:handleToggleBrawler="toggleBrawler" :brawlers="brawlers")
    radar-chart-container(:chartDatasets="chartDatasets")
</template>

<script>
import RadarChartContainer from '../components/BrawlerProfile/RadarChartContainer.vue'
import CompareBrawlerSelector from '../components/Compare/CompareBrawlerSelector.vue'
import BrawlersData from '../../public/sample-response-brawlers.json'
var randomColor = require('randomcolor');

BrawlersData.items.forEach(b => {
  b.selected = false;
})

export default {
  name: 'Compare',
  components: {
    RadarChartContainer,
    CompareBrawlerSelector,
    BrawlersData
  },
  methods: {
    toggleBrawler(name) {
      // https://vuejs.org/v2/guide/list.html#Array-Change-Detection
      // filter() doesn't mutate the original array
      let index = this.brawlers.map(b => { return b.name; }).indexOf(name);
      let brawler = this.brawlers[index];
      let isCurrentlySelected = brawler.selected;
      if (isCurrentlySelected) {
        brawler.selected = false;
        this.removeFromChartDatasets(brawler.name);
      } else {
        brawler.selected = true;
        this.addToChartDatesets(brawler.name);
      }
    },
    addToChartDatesets(name) {
      let index = this.chartDatasets.map(b => { return b.label; }).indexOf(name);
      const getBrawlerData = () => import(`../../public/data/${name}.json`);

      if(index != -1) { this.chartDatasets.splice(index, 1); }

      getBrawlerData().then((brawler) => {
        this.chartDatasets.push({
          label: brawler.name,
          data: [brawler.stats.offense, brawler.stats.defense, brawler.stats.utility],
          backgroundColor: this.getRandomColor()
        })
      })
    },
    removeFromChartDatasets(name) {
      let index = this.chartDatasets.map(b => { return b.label; }).indexOf(name);
      this.chartDatasets.splice(index, 1);
    },
    getRandomColor() {
      return randomColor({
        luminosity: 'dark',
        format: 'rgba',
        alpha: '0.2'
      });
    }
  },
  data() {
    return {
      brawlers: BrawlersData.items,
      chartDatasets: []
    }
  }
}
</script>