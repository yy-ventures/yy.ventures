<template lang="pug">
#pre_footer
  .h2 Let us know if you are
  .h2 a social business entrepreneur/investor and
  .h2.highlight you want to collaborate
  nuxt-link(to="/contact").arrow
</template>

<style lang="sass">
#pre_footer
  padding: 40px
  @media (min-width: 601px)
    padding: 50px
  text-align: center
  .h2
    font-size: clamp(20px, 2.4vw, 35px)
    color: #3a3b3b
</style>
