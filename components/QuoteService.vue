<template lang="pug">
#quote
  .line_2.h1.reel_left
    .word_1 Checkout
    .word_2 &nbsp some of
  .line_1.h1.reel_right our projects
</template>

<style lang="sass" scoped>
#quote
  // display: grid
  // place-items: center
  text-align: center
  padding: 5% 0
  margin: 0 2% 
  overflow-x: hidden
  background: $bg_light

  .line_1, .line_2
    color: $fg_dark_title
    font-size: calc(24px + 6vw)
  
  .line_1
    margin-left: 50%
    @media (max-width: 601px)
      margin-left: 25%

  .line_2
    display: flex
    margin-left: -75%
    .word_2
      -webkit-text-fill-color: transparent
      -webkit-text-stroke: 1px $fg_dark_title
      @media (min-width: 601px)
        -webkit-text-stroke: 2px $fg_dark_title

</style>
