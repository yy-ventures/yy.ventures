<template lang="pug">
#incubator_partners
  .incubator_partners__container.faded_out
    .h5
    img(src="~assets/images/logos/yy_goshthi_white.png")#goshthi
    .p YY Goshthi is a social business incubator that helps socially & environmentally conscious entrepreneurs to launch their minimum viable product and raise the needed seed capital.
  .incubator_partners__container.faded_out
    .h5 Powered By
    #netherland
      img(src="~assets/images/logos/NEA_white.png")#netherland
    .p Netherlands Enterprise Agency encourages entrepreneurs in sustainable, agrarian, innovative and international business. It helps with grants, finding business partners, know-how and compliance with laws and regulations.
  .incubator_partners__container.faded_out
    .h5 Created By
    img(src="~assets/images/logos/yy_ventures_white.png")#ventures
    .p YY Ventures Limited builds, incubates and invests in social businesses that are moving towards a world of three zeros - zero net carbon emission, zero wealth concentration for ending poverty, and zero unemployment by unleashing entrepreneurship in all.
</template>

<style lang="sass">

#incubator_partners
  background: $yy_bg
  display: grid
  @media (min-width: 601px)
    grid-template-columns: repeat(3, 1fr)
  // padding: clamp(2.5em, 10vw, 5em)
  padding: calc(1.5vw + 1.5rem)
  // grid-gap: 5em
  grid-gap: 50px
  align-items: start
  justify-content: center

  .h5
    color: $fg_light_title
    // text-transform: uppercase
    margin-bottom: 25px
  .p
    color: $fg_light_text
    // font-size: clamp(10px, 2vw, 12px)

  img
    width: 200px
    margin-bottom: 25px
    // &:first-of-type
    //   width: 300px

  #goshthi
    margin-top: 25px
    margin-bottom: 25px
  #ventures
    margin-bottom: 60px

  .incubator_partners__container
    // text-align: center
    max-width: 40ch

</style>
