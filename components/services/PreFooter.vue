<template lang="pug">
.pre_footer
  .h2.highlight Work With Us

  .pre_footer__grid
    .pre_footer__grid__container
      .h5 We look forward to hear about your #[br] social business agenda!
      .p.short_text To learn more about what we do and discuss #[br] scope of work, please contact.
    .pre_footer__grid__container
      .h5 Sharika Sadaf
      .p Head of Programs & Partnerships
      .p.mail sharika@yy.ventures
      nuxt-link(to="/contact").contact Contact Now
    .pre_footer__grid__container
      .h5 Osman Dhali
      .p Chief of Staff
      .p.mail osman@yy.ventures
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
