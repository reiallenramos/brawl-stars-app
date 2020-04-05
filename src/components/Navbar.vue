<template lang="pug">
  nav.navbar
    .container
      ul.navbar-list
        li.navbar-item
          router-link.navbar-link(to="/") Home
        li.navbar-item
          router-link.navbar-link(to="/brawlers") Brawlers
        li.navbar-item
          router-link.navbar-link(to="/players") Players
        li.navbar-item
          router-link.navbar-link(to="/clans") Clans
</template>

<style scoped lang="scss">
.navbar {
  .navbar-list {
    list-style: none;
    margin-bottom: 0;

    >.navbar-item {
      position: relative;
      float: left;
      margin-bottom: 0;

      >.navbar-link {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .2rem;
        margin-right: 35px;
        text-decoration: none;
        line-height: 6.5rem;
        color: #222;
      }
    }
  }
}
</style>