<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link">Home</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/brawlers" class="navbar-link">Brawlers</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/players" class="navbar-link">Players</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/clans" class="navbar-link">Clans</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar-list {
  list-style: none;
  margin-bottom: 0;
}

.navbar-item {
  position: relative;
  float: left;
  margin-bottom: 0;
}

.navbar-link {
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .2rem;
  margin-right: 35px;
  text-decoration: none;
  line-height: 6.5rem;
  color: #222;
}
</style>