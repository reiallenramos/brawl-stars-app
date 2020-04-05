<template lang="pug">
  tr
    td {{brawler.name}}
    template(v-for="starPower in brawler.starPowers")
      td {{ starPower.name }}
</template>

<script>
export default {
  props: {
    brawler: Object,
  }
}
</script>