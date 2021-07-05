<template lang="pug">
#footer
  div
    img(src="~/assets/images/logo/yyv-logo-white-small.png").faded_out
    .h3.faded_out#slogan We build, incubate and invest in Social Businesses that are moving towards a world of three zeros - zero net carbon emission, zero wealth concentration for ending poverty, zero unemployment by unleashing entrepreneurship in all.

  div
    .h5.faded_out  Get in Touch
    nuxt-link(to="/career").p career
    nuxt-link(to="/contact").p contact
    nuxt-link(to="/media-kit").p media kit
    .p.faded_out#mail info@yy.ventures
    .p.faded_out#address 9th floor, Grameen Telecom Bhaban, #[br] Mirpur 1, Dhaka 1216, Bangladesh.

  div

    //- .h5.faded_out  Follow YY Goshthi
    //- a(href="https://www.facebook.com/yygoshti").p.faded_out facebook
    //- a(href="https://www.instagram.com/yygoshthi/").p.faded_out instagram
    //- a(href="https://twitter.com/yygoshti").p.faded_out twitter

    .h5.faded_out  Follow YY Ventures
    a(href="https://www.facebook.com/yyventures").p facebook
    a(href="https://www.instagram.com/yyventures/").p instagram
    a(href="https://www.linkedin.com/company/yyventures/").p linkedIn
    a(href="https://vimeo.com/yyventures").p vimeo


  .p#copyright © 2021 · YY Ventures Limited · All Rights Reserved
</template>

<style lang="sass" scoped>
#footer
  background: $yy_bg
  font-family: $yy_font

  // padding: 30px
  padding: calc(1.5vw + 1.5rem)

  display: grid
  grid-gap: 50px

  img
    width: 50vw
    @media (min-width: 601px)
      width: 15vw
  a
    display: block
    text-transform: capitalize
    color: $fg_light_text
    text-decoration: underline

  .p[id="address"]
    font-size: clamp(13px, 2.5vw, 14px)
  .p#mail, .p#address
    margin-top: 25px

  .h5, img
    margin-bottom: 25px

  // .h5:last-of-type
  //   margin-top: 50px

  @media (min-width: 601px)
    grid-template-columns: 2fr 1fr 1fr

  #copyright
    font-size: clamp(11px, 2vw, 14px)
  .h3
    font-size: clamp(18px, 2vw, 25px)
    font-weight: 600
</style>
