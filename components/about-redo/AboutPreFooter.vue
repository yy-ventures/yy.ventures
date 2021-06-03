<template lang="pug">
#pre_footer
  .h2 Let us know if you
  .h2 want to bring change and
  .h2.highlight be part of our team
  nuxt-link(to="/career").arrow
</template>

<style lang="sass" scoped>
#pre_footer
  padding: 40px
  @media (min-width: 601px)
    padding: 50px
  text-align: center
  .h2
    font-size: clamp(20px, 2.4vw, 35px)
    color: #3a3b3b
</style>
