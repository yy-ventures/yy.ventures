<template lang="pug">
.pre_footer
  .h2.highlight Invest with us

  .pre_footer__grid
    .pre_footer__grid__container
      .h5 Looking for an opportunity to invest in #[br] early stage social businesses?
      .p.short_text To learn more about our investment approach and discuss #[br] scope of partnerships, please contact.
    .pre_footer__grid__container
      .h5 Shazeeb M Khairul Islam
      .p Founder & Managing Director
      .p.mail shazeeb@yy.ventures
      nuxt-link(to="/contact").contact Contact Now

</template>

<style lang="sass" scoped>
.pre_footer
  padding: clamp(25px, 5vw, 50px)
  display: grid
  place-items: center
  background: $yy_light_grey

  .h2, .h5
    color: $fg_dark_title

  .p
    color: $fg_dark_text

  .p, .h5, .contact
    text-align: left

  .short_text
    margin-top: 25px

  .mail
    margin-bottom: 25px

  // position: relative
  // &:before
  //   content: ""
  //   position: absolute
  //   top: 0
  //   left: 0
  //   width: 100%
  //   height: 100%
  //   background: rgba(black, 0.8)
  //   z-index: -1


  .h2
    margin-bottom: 50px

  a
    color: $fg_dark_title
    font-weight: bold
    background: $yy_yellow
    padding: 0.5em 1em
    text-decoration: none

  &__grid
    display: grid
    // place-items: center
    // width: 100%
    grid-gap: 100px
    @media (min-width: 601px)
      // grid-template-columns: repeat(3, 300px)
      grid-template-columns: repeat(3, auto)
</style>
