<template lang="pug">
  div Brawler Profile for {{ brawler.name }}
</template>

<script>
export default {
  name: 'BrawlerProfile',
  props: {
    brawler: Object
  }
}
</script>