<template lang="pug">
  nav.navbar.sticky
    .container
      ul.navbar-list
        li.navbar-item
          router-link.navbar-link(:to="{ name: 'brawlersIndex' }") Brawlers
        li.navbar-item
          router-link.navbar-link(:to="{ name: 'compareHome' }") Compare
        li.navbar-item
          router-link.navbar-link(:to="{ name: 'clansHome' }") Clans
</template>

<style lang="scss">
.sticky {
  top: 0;
  left: 0;
  display: block;
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid #eee;
}

.navbar {
  z-index: 1000;
  >.container {
    width: 100%;

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
}
</style>