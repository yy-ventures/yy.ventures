<template lang="pug">
#pre_footer
  .h2 Checkout the open positions
  .h2 of our company and
  .h2.highlight be part of the change
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
