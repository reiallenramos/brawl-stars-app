<template lang="pug">
  main-content
    main-content-section
      h6.header Home Section 1
      p Lorem Ipsum
    main-content-section
      h6.header Home Section 2
      p Lorem Ipsum
    main-content-section
      h6.header Home Section 3
      p Lorem Ipsum
    main-content-section
      h6.header Home Section 4
      p Lorem Ipsum
</template>

<script>
import MainContent from './MainContent.vue'
import MainContentSection from './MainContentSection.vue'

export default {
  name: 'Home',
  components: {
    MainContent,
    MainContentSection
  }
}
</script>