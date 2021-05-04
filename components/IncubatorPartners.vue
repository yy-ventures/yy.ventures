<template lang="pug">
#incubator_partners
  .incubator_partners__container.faded_out
    .h5
    img(src="/logos/yy_goshthi.png")#goshthi
    .p YY Goshthi is a social business incubator that helps socially & environmentally conscious entrepreneurs to launch their minimum viable product and raise the needed seed capital.
  .incubator_partners__container.faded_out
    .h5 powered by
    img(src="~assets/images/partners/NEA.jpg")
    .p The Netherlands Enterprise Agency supports entrepreneurs, NGOs, knowledge institutions and organizations.
  .incubator_partners__container.faded_out
    .h5 from
    img(src="/logos/yy_ventures.png")#ventures
    .p YY Ventures Limited builds, incubates and invests in social businesses that are moving towards a world of three zeros - zero poverty, zero unemployment and zero net carbon emission.
</template>

<style lang="sass">

#incubator_partners
  
  display: grid
  @media (min-width: 601px)
    grid-template-columns: repeat(3, auto)
  padding: clamp(2.5em, 10vw, 5em)
  grid-gap: 5em
  align-items: start
  justify-content: center

  .h5
    color: $fg_dark_title
    text-transform: uppercase
    margin-bottom: 25px
  .p
    color: $fg_dark_text
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
