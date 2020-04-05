<template lang="pug">
  tr
    td(v-if="getImgUrl(brawler.name)")
      img(:src="getImgUrl(brawler.name)" :width="'50px'")
    td(v-else) {{brawler.name}}
    template(v-for="starPower in brawler.starPowers")
      td {{ starPower.name }}
</template>

<script>
export default {
  props: {
    brawler: Object,
  },
  methods: {
    getImgUrl(name) {
      try {
        return require(`../../../public/images/${name}/brawler.png`);
      } catch(e) {
        return require(`../../../public/images/brawl_stars_icon.jpg`);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
td {
  text-align: center;
}
</style>