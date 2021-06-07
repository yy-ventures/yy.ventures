<template lang="pug">
#featured
  img(src="~assets/images/about-dr-yunus.jpg")
  #texts

    #quote
      .h2
        | YY Ventures &nbsp
        span.highlight energizes
        | &nbsp everybody, helps everybody to think differently, think fresh, bring out new ideas, who knows one of these ideas will completely &nbsp
        span.highlight change
        | &nbsp the world.

    //- #quote
    //-   .h2
    //-     |  I'm &nbsp
    //-     span.highlight encouraging
    //-     | &nbsp young people to become Social Business entrepreneurs and &nbsp
    //-     span.highlight contribute
    //-     | &nbsp to the world, rather than just making money.

    #author
      .h3 Professor Muhammad Yunus
      .h3 Nobel Peace Prize Winner
      .h3 Founder of Grameen Bank
</template>
<style lang="sass" scoped>
#featured
  position: relative
  #texts
    position: absolute
    top: 0
    left: 0

    padding: clamp(25px, 5vw, 50px)
    width: 60%

    #quote
      .h2
        font-size: clamp(12px, 4vw, 50px)
      .highlight:after
        height: 30%
    #author
      // margin-top: clamp(25px, 8vw, 100px)
      margin-top: clamp(5px, 3vw, 100px)
      .h3
        font-size: clamp(8px, 2vw, 30px)
        font-weight: normal
</style>
