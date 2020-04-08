<template lang="pug">
  div
    template(v-if='isLoading')
      | Loading ...
    template(v-else)
      h6 Brawler: {{ brawler.name }}
</template>

<script>
export default {
  name: 'BrawlerProfile',
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