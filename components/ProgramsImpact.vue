<template lang="pug">
#programs_impact
  .h2.highlight Our Impact
  #impacts

    //- .h1.impact__count.count_up#programs
    .h1.impact__count#programs 11
    //- .h1.impact__count.count_up#startups
    .h1.impact__count#startups 64
    //- .h1.impact__count.count_up#lives
    .h1.impact__count#lives 107756

    .h3.impact__title Programs Delivered
    .h3.impact__title Startups Supported
    .h3.impact__title Lives Impacted
</template>

<style lang="sass" scoped>

#programs_impact
  background: $yy_bg
  padding: clamp(25px, 4vw, 50px)
  padding-top: 100px
  padding-bottom: 100px
  .h2
    margin-bottom: 50px
  #impacts
    display: grid
    grid-template-columns: repeat(3, 1fr)
    .impact__count
      -webkit-text-stroke-width: 1px
      @media (min-width: 601px)
        -webkit-text-stroke-width: 2px
      -webkit-text-stroke-color: #f8d23a
      -webkit-text-fill-color: transparent
      font-size: clamp(20px, 7vw, 100px)
    .impact__title
      max-width: 8ch
      font-size: clamp(12px, 2vw, 30px)
</style>
