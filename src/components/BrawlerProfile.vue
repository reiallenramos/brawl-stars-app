<template lang="pug">
  main-content-section
    template(v-if='isLoading')
      | Loading ...
    template(v-else)
      .grid
        .row
          .twelve.columns.profile-section
            h1 {{ brawler.name }}
            h6 {{ brawler.class }}
            p
              | Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

export default {
  name: 'BrawlerProfile',
  components: {
    MainContentSection
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