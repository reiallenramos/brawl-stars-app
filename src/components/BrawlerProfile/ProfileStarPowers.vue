<template lang="pug">
  div.profile-star-powers
    .row
      template(v-for="starPower in starPowers")
        .six.columns.star-power-container
          .star-power-img
            img.internal-img(:src="getStarPowerUrl(brawlerName, kebabCase(starPower.name))")
          h5.star-power-name {{ starPower.name }}
</template>

<script>
export default {
  name: 'ProfileStarPowers',
  props: {
    brawlerName: String,
    starPowers: Array
  },
  methods: {
    getStarPowerUrl(brawler, starPowerName) {
      try {
        return require(`../../../public/images/${brawler}/${starPowerName}.png`);
      } catch(e) {
        return false;
      }
    },
    kebabCase(str) {
      return str.toLowerCase().split(' ').join('-').replace(/!/, '');
    }
  }
}
</script>

<style lang="scss" scoped>
.star-power-container {
  margin-bottom: 4px;
  margin-top: 4px;
  border-radius: 3px;
  padding: 3px;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,195,128,1) 10%, rgba(250,195,128,1) 35%, rgba(255,255,255,1) 100%);
}
.star-power-img {
  margin: auto;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: url('../../../public/images/star_power.png');
  line-height: 2.75;
  text-align: center;
  background-position: center;
  vertical-align: middle;
  display: inline-block;

  >.internal-img {
    width: 20px;
    margin-top: 8px;
    vertical-align: middle;
  }
}

.star-power-name {
  display: inline;
  margin-left: 10px;
  vertical-align: middle;
  color: white;
}
</style>