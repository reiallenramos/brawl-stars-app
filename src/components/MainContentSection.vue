<template lang="pug">
  .main-content__section
    slot
</template>

<style scoped lang="scss">
.main-content__section {
  border-top: 1px solid #eee;
  padding: 4rem 0;
  margin-bottom: 0;

  &:first-child {
    border-top: none;
  }

  >.header {
    text-transform: uppercase;
    font-size: 1.4rem;
    letter-spacing: .2rem;
    font-weight: 600;
  }
}
</style>