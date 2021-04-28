<template lang="pug">
#quote
  .line_1.h1.reel_right All humans are
  .line_2.h1.reel_left
    .word_1 born
    .word_2 &nbsp entrepreneurs
  .h5 Professor Muhammad Yunus
  .p Nobel Peace Prize Winner and Founder of Grameen Bank
</template>

<style lang="sass" scoped>
#quote
  // display: grid
  // place-items: center
  text-align: center
  padding: 50px 0

  .line_1, .line_2
    color: $fg_dark_title
    font-size: clamp(40px, 13vw, 180px)

  .line_2
    display: flex
    font-size: clamp(30px, 10vw, 130px)

    .word_2
      -webkit-text-fill-color: transparent
      -webkit-text-stroke: 1px $fg_dark_title
      @media (min-width: 601px)
        -webkit-text-stroke: 2px $fg_dark_title

  .h5,
  .p
    // text-transform: capitalize
  .h5
    color: $fg_dark_title
    margin-top: 50px
  .p
    color: $fg_dark_text
    font-size: clamp(11px, 2vw, 16px)
</style>
