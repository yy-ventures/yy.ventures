<template lang="pug">
#partners
  .h2 Our Partners
  .partners_grid
      a(href="https://aquaforall.org/")
        img(src="~assets/images/partners/AA.svg").hover_grow
      a(href="https://bopinc.org/")
        img(src="~assets/images/partners/bopinc.jpg").hover_grow
      a(href="https://www.gsma.com/")
        img(src="~assets/images/partners/gsma.png").hover_grow
</template>

<style lang="sass">
#partners
  padding: clamp(50px, 10vw, 100px)
  .h2
    color: $fg_dark_title
    margin-bottom: 100px

  .partners_grid

    display: grid
    grid-gap: 50px
    place-items: center

    grid-template-columns: auto
    @media (min-width: 601px)
      grid-template-columns: repeat(3, auto)

    a:first-of-type
      width: 150px
</style>
