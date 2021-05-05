<template lang="pug">
  #programs_impact
    h1#header.highlight Our Impact
    #impacts
      .impact
        .impact__count 11
        .impact__title Programs Delivered
      .impact
        .impact__count 64
        .impact__title Startups Supported
      .impact
        .impact__count 107,756
        .impact__title Lives Impacted
</template>

<style lang="sass" scoped>
/* .impact, */
.impact__title,
.impact__count
  display: inline-block

.impact__count
  font-family: 'Graphik'
  font-weight: bold
  -webkit-text-stroke-width: 2px
  -webkit-text-stroke-color: #f8d23a
  -webkit-text-fill-color: transparent

  font-size: 80px
  @media (min-width: 601px)
    font-size: 150px


.impact__title
  font-family: 'Graphik'
  color: $fg_light_title
  font-weight: bold
  max-width: 8ch
  line-height: 1.2

  font-size: 18px
  @media (min-width: 601px)
    font-size: 30px

#impacts
  display: grid
  grid-template-columns: auto
  @media (min-width: 601px)
    grid-template-columns: auto 1fr

#programs_impact
  /* height: 100vh; */
  background: #343838
  padding: 15px
  @media (min-width: 601px)
    padding: 50px


  h1,
  h3
    color: $fg_light_title

  h3
    font-family: 'Graphik'
    margin: 0

  h1
    font-weight: bold
    color: $fg_light_title
    font-size: 40px
    @media (min-width: 601px)
      font-size: 50px
</style>
