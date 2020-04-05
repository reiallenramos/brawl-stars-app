<template lang="pug">
  .card
    .card__media__wrapper
      img.card__media__img(v-bind:src="getImgUrl(record.name)")
    h4.card__title {{ record.name }}
    .card__subtitle {{ record.type }}
    template(v-if="record.description")
      h6.card__content {{ record.description }}
    template(v-else)
      h6.card__content Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
    .card__footer
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
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  min-height: 380px;
  width: 100%;
  border: 2px solid #eee;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  >.card__media__wrapper {
    height: 200px;
    overflow: hidden;

    >.card__media__img {
      z-index: 1;
      transform: scale(1.5);
      display: block;
      text-align: center;
      margin: auto;
      height: 100%;
      transition: all 300ms;

      &:hover {
        transform: scale(1.7);
      }
    }
  }

  >.card__title {
    text-align: center;
    margin-bottom: 0px;
  }

  >.card__subtitle {
    text-align: center;
    line-height: 0.7;
  }

  >.card__content {
    padding: 6px;
    border: 0px;
  }
}
</style>