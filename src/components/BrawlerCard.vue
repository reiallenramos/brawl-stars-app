<template lang="pug">
  router-link(:to="{ name: 'brawlerProfile', params: { id: record.name, brawler: record } } ")
    .card
      .card__media__wrapper
        .overlay-text
          h4.card__title {{ record.name }}
          .card__subtitle {{ record.class }}
        img.card__media__img(v-bind:src="getImgUrl(record.name)")
      template(v-if="record.description")
        h6.card__content {{ record.description }}
      template(v-else)
        h6.card__content Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
      .card__footer.star-powers-group
        template(v-for="(starPower, index) in record.starPowers")
          .star-power-container(v-bind:class="[index == record.starPowers.length - 1 ? 'no-border': '']")
            .star-power-img
              img.internal-img(:src="getStarPowerUrl(record.name, kebabCase(starPower.name))")
</template>

<script>
export default {
  name: 'BrawlerCard',
  props: {
    record: Object
  },
  methods: {
    getImgUrl(name) {
      try {
        return require(`../../public/images/${name}/brawler.png`);
      } catch(e) {
        return require(`../../public/images/brawl_stars_icon.jpg`);
      }
    },
    getStarPowerUrl(brawler, starPowerName) {
      try {
        return require(`../../public/images/${brawler}/${starPowerName}.png`);
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
.card {
  overflow: hidden;
  min-height: 100px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin-bottom: 40px;

  >.card__media__wrapper {
    height: 200px;
    overflow: hidden;
    position: relative;
    justify-content: flex-end;

    >.card__media__img {
      z-index: 1;
      transform: scale(1.6);
      display: block;
      text-align: center;
      margin: auto;
      height: 100%;
      transition: all 300ms;

      &:hover {
        transform: scale(1.7);
        opacity: 0.8;
        cursor: pointer;
      }
    }

    >.overlay-text {
      position: absolute;
      color: white;
      z-index: 100;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .card__title, .card__subtitle {
        padding-left: 8px;
        line-height: 0.9;
        text-align: left;
      }

      .card__subtitle {
        margin-bottom: 3px;
        opacity: 0.7;
      }
    }
  }

  .card__title {
    text-align: center;
    margin-bottom: 0px;
  }

  .card__subtitle {
    text-align: center;
    line-height: 0.7;
  }

  >.card__content {
    padding: 12px;
    text-align: center;
    border: 0px;
    margin-bottom: 0px;
  }

  >.card__footer.star-powers-group {
    text-align: center;
    display: flex;
    padding: 6px;
    background: #EC9B3B;

    .star-power-container {
      flex: 1;
      border-right: 1px solid #BD7C2F;

      &.no-border {
        border-right: none;
      }
    }

    .star-power-img {
      margin: auto;
      width: 50px;
      height: 50px;
      background-size: contain;
      background-image: url('../../public/images/star_power.png');
      line-height: 2.75;
      text-align: center;
      background-position: center;

      >.internal-img {
        width: 20px;
        margin-top: 8px;
        vertical-align: middle;
      }
    }
  }
}
</style>