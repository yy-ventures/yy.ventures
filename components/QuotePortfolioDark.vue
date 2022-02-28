<template lang="pug">
#quote
  .line_1.h1.reel_right Venture
  .line_2.h1.reel_left
    .word_1 Investments
</template>

<style lang="sass" scoped>
#quote
  // display: grid
  // place-items: center
  text-align: center
  padding: 5% 0
  overflow-x: hidden
  background: #333
  font-family: "Graphik"
  margin-top: 5%

  .line_1, .line_2
    color: #fff
    font-size: calc(24px + 6vw)
  
  .line_1
    margin-left: -25%
    @media (max-width: 601px)
      margin-left: -35%

  .line_2
    display: flex
    margin-left: 35%
    .word_1
      -webkit-text-fill-color: transparent
      -webkit-text-stroke: 1px #fff
      @media (min-width: 601px)
        -webkit-text-stroke: 2px #fff

</style>
