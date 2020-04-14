<template lang="pug">
  .card
    .card__media__wrapper
      .row
        .five.columns
          img.card__media__img(v-bind:src="getImgUrl(record.name)")
        .seven.columns.description
          h4.card__title {{ record.name }}
          .card__subtitle {{ record.type }}
          //- template(v-if="record.description")
          //-   h6.card__content {{ record.description }}
          //- template(v-else)
          //-   h6.card__content Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          .card__footer.star-powers-group
            template(v-for="starPower in record.starPowers")
              .star-power-container
                .star-power-img
                  img.internal-img(:src="getStarPowerUrl(record.name, kebabCase(starPower.name))")
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      rap: {
        color: 'red',
      }
    }
  },
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
    getStarPowerBaseUrl() {
      return require(`../../public/images/star_power.png`);
    },
    getStarPowerUrl(brawler, starPowerName) {
      try {
        return require(`../../public/images/${brawler}/${starPowerName}.png`);
      } catch(e) {
        false;
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
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
  margin-bottom: 40px;

  .row {
    height: 170px;
  }

  .card__media__wrapper {
    overflow: hidden;

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding-bottom: 4px;
    }

    .card__media__img {
      z-index: 1;
      transform: scale(1.1);
      display: block;
      text-align: center;
      margin: auto;
      height: 100%;
      transition: all 300ms;

      &:hover {
        transform: scale(1.2);
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

  .card__content {
    padding: 6px;
    margin-bottom: 0px;
    border: 0px;
  }

  .card__footer.star-powers-group {
    text-align: center;
      display: flex;

    .star-power-container {
      flex: 1;
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