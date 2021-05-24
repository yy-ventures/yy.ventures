<template lang="pug">
  nav
    input#toggler(type="checkbox")
    label(for="toggler" )#menu_toggler_label
      #menu_button
        #bar

    nuxt-link.logo(to="/")
      img#logo(src="/logos/yy_ventures.png")
    .menu
      //- nuxt-link.link.underline(to="/") home
      nuxt-link.link.underline(to="/about") about
      nuxt-link.link.underline(to="/investments") investments
      //- nuxt-link.link.underline(to="/contact") contact
      nuxt-link.link.underline(to="/services") advisory services
      a.link.underline(href="https://incubator.yy.ventures" target="_blank" rel="noopener noreferrer") incubator
      //- nuxt-link.link.underline(to="/partnerships") partnerships

      //- .sub_menu
        //- input#sub_menu_toggler(type="checkbox")
        //- label(for="sub_menu_toggler" )
        //-   .sub_menu__name programs
        //- .sub_menu__name programs
        //- .sub_menu__items
          //- nuxt-link.link.underline(to="/washic") WASH innovation challenge
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
    // position: absolute
    // left: 50%
    // transform: translateX(-50%)
    // z-index: 99
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
    // transform: scale(0)
    transform: translateX(100%)
    background: #fff

    // display: flex
    // flex-direction: column
    // justify-content: center
    // align-items: center
    padding-top: 100px


    @media (min-width: 601px)
      all: unset
      display: flex
      position: relative
      & > * + *
        margin-left: 5px

    a
      display: block !important
      // @media (min-width: 601px)
      //   &:first-of-type
      //     display: none !important


    // display: flex
    // display: none
    //
    // & > * + *
    //   margin-left: 10px
    //
    .nuxt-link-exact-active,
    a:hover
      color: $yy_magenta !important

    .link,
    .sub_menu__name
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

    .sub_menu
      &__name:after
        content: ""
        position: absolute
        border: solid $yy_grey
        border-width: 0 3px 3px 0
        transform: rotate(45deg)
        transition: transform 500ms

        padding: 5px
        margin-left: 15px
        margin-top: 10px
        @media (min-width: 601px)
          padding: 3px
          margin-left: 10px
          margin-top: 7px

      .sub_menu__items
        display: none
        @media (min-width: 601px)
          position: absolute
          // margin-top: 5px
          background: rgba(white, 0.9)

      &:hover
        .sub_menu__items
          display: block
        .sub_menu__name:after
          transform: rotate(225deg)
      input:checked
        ~ .sub_menu__items
          display: block
        ~ label .sub_menu__name:after
          transform: rotate(225deg)

    // .sub_menu
    //   &__items
    //     background: rgba(white, 0.9)
    //     position: absolute
    //     z-index: 9
    //     top: 55px
    //     display: none
    //     a
    //       display: block
    //
    //   &__indicators
    //     display: flex
    //     align-items: flex-start
    //
    //     &__icon
    //       border: solid $yy_grey
    //       border-width: 0 3px 3px 0
    //       padding: 3px
    //       transform: rotate(45deg)
    //       -webkit-transform: rotate(45deg)
    //       margin-top: 15px
    // .sub_menu:hover .sub_menu__items
    //   display: block
    // .sub_menu:hover .sub_menu__indicators_icon
    //   transform: rotate(180deg)
</style>
