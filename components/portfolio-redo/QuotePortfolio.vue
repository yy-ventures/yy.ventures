<template lang="pug">
#quote
  .line_1.h1.reel_right Funded
  .line_2.h1.reel_left
    .word_1 Through Programs
</template>

<style lang="sass" scoped>
#quote
  // display: grid
  // place-items: center
  text-align: center
  padding: 5% 0
  // margin: 0 2%
  margin-top: 9%
  @media (max-width: 601px)
    margin-top: 11%

  overflow-x: hidden
  background: $bg_light

  .line_1, .line_2
    color: $fg_dark_title
    font-size: calc(24px + 6vw)

    @media (max-width: 601px)
      font-size: calc(24px + 4.5vw)

  .line_1
    // margin-left: 10%
    @media (max-width: 601px)
      margin-left: -10px

  .line_2
    display: flex
    margin-left: 5%
    white-space: nowrap
    @media(max-width: 601px)
      margin-left: -50px
    .word_1
      -webkit-text-fill-color: transparent
      -webkit-text-stroke: 1px $fg_dark_title
      @media (min-width: 601px)
        -webkit-text-stroke: 2px $fg_dark_title
</style>
