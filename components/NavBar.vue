<template>
  <div id="nav-bar">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="logo-container">
          <nuxt-link to="/"
            ><img src="~assets/images/logo/Logo-03.png" alt=""
          /></nuxt-link>
        </div>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-bind:class="{ active: $route.name == 'about' }">
            <nuxt-link to="about">About</nuxt-link>
          </li>
          <li v-bind:class="{ active: $route.name == 'portfolio' }">
            <nuxt-link to="portfolio">Portfolio</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="less" scoped>
#nav-bar {
  position: absolute;
  z-index: 1;
  width: 100%;
  .uk-navbar-nav {
    a {
      font-family: 'Graphik';
      font-weight: 600;
      color: #ffffff;
      text-transform: capitalize;
    }
  }
}
.logo-container {
  img {
    max-width: 200px;
  }
}
</style>
