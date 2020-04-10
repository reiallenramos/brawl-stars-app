<template lang="pug">
  div
    template(v-if='isLoading')
      | Loading ...
    template(v-else)
      .grid
        profile-header(:brawlerName="brawler.name" :brawlerClass="brawler.class" :brawlerRarity="brawler.rarity")
        profile-star-powers(:brawlerName="brawler.name" :starPowers="brawler.starPowers")
        .row
          .eight.columns.profile-section
            | Lorem Ipsum
          .four.columns.profile-section
            | Lorem Ipsum
        .row
          .eight.columns.profile-section
            h3 {{ brawler.starPowers[0].name }}
            p
              | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          .four.columns.profile-section
            h3 {{ brawler.starPowers[1].name }}
            p
              | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        .row
          .twelve.columns.profile-section
            | Footer
</template>

<script>
import MainContentSection from '../components/MainContentSection.vue'
import ProfileHeader from '../components/BrawlerProfile/ProfileHeader.vue'
import ProfileStarPowers from '../components/BrawlerProfile/ProfileStarPowers.vue'

export default {
  name: 'BrawlerProfile',
  components: {
    MainContentSection,
    ProfileHeader,
    ProfileStarPowers
  },
  data() {
    return {
      isLoading: true,
      brawler: null
    }
  },
  created() {
    const brawlerName = this.$route.params.name;
    const getBrawlerData = () => import(`../../public/data/${brawlerName}.json`);

    getBrawlerData().then((data) => {
      this.isLoading = false;
      this.brawler = data;
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