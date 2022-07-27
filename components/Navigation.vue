<template lang="pug">
  nav
    input#toggler(type="checkbox")
    label(for="toggler" )#menu_toggler_label
      #menu_button
        #bar

    nuxt-link.logo(to="/")
      img#logo(src="/logos/yy_ventures.png")
    .menu
      nuxt-link.link.underline(to="/about") about
      nuxt-link.link.underline(to="/investments") portfolio
      nuxt-link.link.underline(to="/services") consulting
      a.link.underline(href="https://incubator.yy.ventures" target="_blank" rel="noopener noreferrer") incubator

</template>

<style lang="sass">
nav
  background: rgba(white, 0.8)
  // backdrop-filter: blur(5px)

  display: flex
  justify-content: center
  align-items: center

  @media (min-width: 601px)
   justify-content: space-between


  // padding: 5px 30px
  padding: 0 30px

  position: fixed
  width: 100%
  z-index: 99

  transition: transform 500ms ease-in-out

  input
    display: none

  #toggler:checked
    ~ .menu
      // transform: scale(1)
      transform: translateX(0)
    ~ label #menu_button #bar
      background: none
      margin-top: 7px
      &:before,
      &:after
        top: 0
      &:before
        transform: rotate(45deg)
      &:after
        transform: rotate(-45deg)

  #menu_toggler_label
    @media (min-width: 601px)
      display: none
    #menu_button
      position: absolute

      top: 10px
      right: 10px

      z-index: 99
      cursor: pointer

      padding: 5px 10px
      padding-bottom: 20px

      @media (min-width: 601px)
        display: none

      #bar
        position: relative
        transition: background 500ms
        &, &:after, &:before
          width: 30px
          height: 3px
          background: #333
          border-radius: 50px
        &:after, &:before
          content: ""
          display: block
          position: absolute
          transition: transform 500ms
        &:before
          top: 7px
        &:after
          top: 15px

  #logo
    width: 150px
    @media (min-width: 601px)
      all: unset
      width: 200px


  .menu
    position: absolute
    top: 0
    width: 100vw
    height: 100vh
    transition: transform 500ms
    transform: translateX(100%)
    background: #fff
    padding-top: 100px


    @media (min-width: 601px)
      all: unset
      display: flex
      position: relative
      & > * + *
        margin-left: 5px

    a
      display: block !important

    .nuxt-link-exact-active,
    a:hover
      color: $yy_magenta !important

    .link
      font-family: 'Graphik'
      font-weight: bold
      color: $yy_grey
      text-transform: capitalize
      padding: 10px
      text-decoration: none
      text-align: center
      cursor: pointer

      font-size: 25px
      @media (min-width: 601px)
        font-size: 18px
</style>
