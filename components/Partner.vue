<template lang="pug">
#partner
  .h2.highlight {{data.title}}
  .partners_grid
    a(v-for="partner in data.partners" :href="partner.website")
      img(:src="require(`~/assets/images/${partner.logo}`)").hover_grow
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="sass">
#partner
  padding: clamp(25px, 5vw, 50px) !important
  .h2
    text-transform: capitalize
    color: $fg_dark_title
    margin-bottom: 50px !important

  .partners_grid

    display: grid
    grid-gap: 100px
    place-items: center

    grid-template-columns: auto
    @media (min-width: 601px)
      grid-template-columns: repeat(4, 1fr) !important
</style>
