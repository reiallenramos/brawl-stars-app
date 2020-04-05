<template lang="pug">
  main-content
    main-content-section
      brawlers-table
</template>

<script>
import MainContent from './MainContent.vue'
import MainContentSection from './MainContentSection.vue'
import BrawlersTable from './Brawlers/BrawlersTable.vue'

export default {
  name: 'Brawlers',
  components: {
    BrawlersTable,
    MainContent,
    MainContentSection
  }
}
</script>
