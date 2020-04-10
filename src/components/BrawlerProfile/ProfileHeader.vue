<template lang="pug">
  div.profile-header
    .profile-header__content
      .profile-header__avatar
        .image-container
          img.profile-header__img(:src="getImgUrl(brawlerName)")
      .profile-header__title
        h1.profile-header__name {{ brawlerName }}
        h6 {{ brawlerClass }}
          template.rarity(v-if="brawlerRarity")  | {{ brawlerRarity }}
          template.rarity(v-if="brawlerRarity == 'Trophy Road'")
            span
              | &nbsp;
              img.trophy(:src="require(`../../../public/images/profile/trophy.png`)")
</template>

<script>
export default {
  props: {
    brawlerName: String,
    brawlerClass: String,
    brawlerRarity: String
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
.profile-header {
  padding: 8px;
  color: white;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(214,212,233,1) 50%, rgba(255,255,255,1) 100%);
  margin-bottom: 8px;

  .profile-header__name {
    margin-bottom: 0px;
  }

  .image-container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    margin: auto;
    border-radius: 10px;
    border: 3px solid white;
  }

  .profile-header__title {
    text-align: center;
  }

  img.profile-header__img {
    transform: scale(0.6) translate(-60px, -60px);
  }

  h6 {
    margin-bottom: 0px;
  }

  .trophy {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
}
</style>