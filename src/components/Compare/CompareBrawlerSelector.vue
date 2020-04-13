<template lang="pug">
  div
    ul.brawler-list
      li.brawler-icon-container(v-for="brawler in brawlers" :key="brawler.id" :class="[brawler.selected ? 'selected' : '' ]")
        img.brawler-icon-img(:src="require(`../../../public/images/${brawler.name}/brawler.png`)" v-on:click="toggleBrawler(brawler.name)")
</template>

<script>
export default {
  props: {
    handleToggleBrawler: Function,
    brawlers: Array,
  },
  methods: {
    toggleBrawler(name) { this.handleToggleBrawler(name) }
  }
}
</script>

<style lang="scss">
ul.brawler-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li.brawler-icon-container {
    line-height: 0;
    list-style: none;
    margin-left: 15px;
  
    &:hover {
      cursor: pointer;
    }

    .brawler-icon-img {
      max-width: 60px;
      max-height: 60px;
    }
  }
}

.selected {
  outline: 4px solid orange;
}
</style>