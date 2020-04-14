<template lang="pug">
  div
    template(v-if='isLoading')
      | Loading ...
    template(v-else)
      .grid
        .row
          .eight.columns
            profile-header(:brawlerName="brawler.name" :brawlerClass="brawler.class" :brawlerRarity="brawler.rarity")
            profile-star-powers(:brawlerName="brawler.name" :starPowers="brawler.starPowers")
          .four.columns
            radar-chart-container(:chartDatasets="chartDatasets")
        .row
          .twelve.columns.profile-section
            | Footer
</template>

<script>
import MainContentSection from '../components/MainContentSection.vue'
import ProfileHeader from '../components/BrawlerProfile/ProfileHeader.vue'
import ProfileStarPowers from '../components/BrawlerProfile/ProfileStarPowers.vue'
import RadarChartContainer from '../components/Charts/RadarChartContainer.vue'

export default {
  name: 'BrawlerProfile',
  components: {
    MainContentSection,
    ProfileHeader,
    ProfileStarPowers,
    RadarChartContainer
  },
  data() {
    return {
      isLoading: true,
      brawler: null,
      chartDatasets: []
    }
  },
  created() {
    const brawlerName = this.$route.params.name;
    const getBrawlerData = () => import(`../../public/data/${brawlerName}.json`);

    getBrawlerData().then((data) => {
      this.isLoading = false;
      this.brawler = data;
      this.chartDatasets = [
        {
          label: data.name,
          data: [data.stats.offense, data.stats.defense, data.stats.utility]
        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.profile-section {
  padding: 8px;
  border: 1px solid #E1E1E1;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>