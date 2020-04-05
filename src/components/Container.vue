<template lang="pug">
  .container
    Navbar
    router-view
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Container',
  components: {
    Navbar
  }
}
</script>
