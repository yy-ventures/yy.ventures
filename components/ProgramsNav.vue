<template>
  <div id="nav-bar">
    <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
      <div class="uk-navbar-left">
        <div class="logo-container">
          <nuxt-link to="/"
            ><img src="~assets/images/programs/logo.png" alt=""
          /></nuxt-link>
        </div>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav uk-visible@l">
          <li v-bind:class="{ active: $route.name == 'about-redo' }">
            <nuxt-link to="/about">About</nuxt-link>
          </li>

          <li v-bind:class="{ active: $route.name == 'incubator' }">
            <nuxt-link to="/incubator">YY Goshthi Incubator</nuxt-link>
          </li>

          <li v-bind:class="{ active: $route.name == 'a4aic' }">
            <nuxt-link to="/a4aic">A4A Innovation Challenge</nuxt-link>
          </li>

          <!-- <li>                                                                 -->
          <!--   <nuxt-link to="#" class="dropdown">                                -->
          <!--     <li>Programs</li>                                                -->
          <!--     <div class="dropdown__items">                                    -->
          <!--       <nuxt-link to="/programs">A4A Innovation Challenge</nuxt-link> -->
          <!--       <nuxt-link to="/yy_goshti">YY Goshti</nuxt-link>               -->
          <!--     </div>                                                           -->
          <!--   </nuxt-link>                                                       -->
          <!-- </li>                                                                -->

          <!-- <li>                                              -->
          <!--    <nuxt-link to="/services">Services</nuxt-link> -->
          <!-- </li>                                             -->

          <li v-bind:class="{ active: $route.name == 'portfolio-redo' }">
            <nuxt-link to="/portfolio">Investments</nuxt-link>
          </li>
          <li v-bind:class="{ active: $route.name == 'contact' }">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
        <li class="show-menu uk-hidden@l">
          <a
            class="uk-navbar-toggle"
            uk-navbar-toggle-icon
            href="#offcanvas"
            uk-toggle
          ></a>
        </li>
      </div>
    </nav>
    <div id="offcanvas" uk-offcanvas="flip: true">
      <div class="uk-offcanvas-navbar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-offcanvas offcanvas-nav">
          <li v-bind:class="{ active: $route.name == 'about-redo' }">
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li v-bind:class="{ active: $route.name == 'portfolio-redo' }">
            <nuxt-link to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li v-bind:class="{ active: $route.name == 'contact' }">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.dropdown {
  display: flex;
  flex-direction: column;
  .dropdown__items {
    display: none;
  }
}

.dropdown:hover .dropdown__items {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#nav-bar {
  .show-menu {
    list-style: none;
  }
  .offcanvas-nav {
    background: #c9215a;
    padding: 60px;
    a {
      font-family: 'Graphik';
      font-weight: 900;
      color: #ffffff;
      text-transform: capitalize;
      font-size: 16px;
    }
    .nuxt-link-active {
      color: #222121 !important;
    }
  }
  .nuxt-link-active {
    color: #c7265b !important;
  }
  position: absolute;
  z-index: 1;
  width: 100%;
  .uk-navbar-nav {
    a {
      font-family: 'Graphik';
      font-weight: 900;
      color: #848484;
      text-transform: capitalize;
      font-size: 16px;
    }
  }
}
.logo-container {
  img {
    max-width: 200px;
  }
}
</style>
