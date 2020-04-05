<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item">
          <a class="navbar-link" href="#route-1">Route 1</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="#route-2">Route 2</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="#route-3">Route 3</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link" href="#route-4">Route 4</a>
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