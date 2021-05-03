<template lang="pug">
.marquee
  .h2.highlight {{data.title}}
  div

  marquee(scrollamount="10")
    img(v-for="partner in data.partners" :src="require(`~/assets/images/${partner.logo}`)").hover_grow
  //- marquee(scrollamount="100" hspace="0")
    //- img(v-for="partner in data.partners" :src="require(`~/assets/images/${partner.logo}`)").hover_grow

  //- marquee(scrollamount="100" hspace="0")
  //-   .marquee__slide
  //-     .marquee_image_container(v-for="partner in data.partners")
  //-       a(:href="partner.website")
  //-         img(:src="require(`~/assets/images/${partner.logo}`)").hover_grow

</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="sass" scoped>
.marquee
  padding: clamp(25px, 5vw, 50px) !important
  .h2
    text-transform: capitalize
    color: $fg_dark_title
    margin-bottom: 50px !important

  img
    width: 200px
    margin: 0 25px
    &:nth-of-type(2)
      width: 50px
    &:nth-of-type(6)
      width: 150px
</style>
