<template lang="pug">
  main-content
    | Compare
    compare
</template>

<script>
import MainContent from './MainContent.vue'
import Compare from './Compare.vue'

export default {
  name: 'Players',
  components: {
    MainContent,
    Compare
  }
}
</script>