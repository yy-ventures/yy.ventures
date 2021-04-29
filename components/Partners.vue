<template lang="pug">
#partners
  .title Partners
  #grid
    .partners_container(v-for="partner in partners")
      img(:src="require(`~/assets/images/partners/${partner}`)")
</template>

<script>
export default {
  props: ['partners'],
};
</script>

<style lang="sass">
#partners
  .title
    text-transform: none
    font-size: 40px
  #grid
    display: grid
    grid-template-columns: auto
    @media (min-width: 601px)
      grid-template-columns: repeat(4, 1fr)

    padding: 30px
    padding-bottom: 100px
    grid-gap: 30px

    .partners_container
      // background: #f0f1f1
      display: grid
      place-items: center

      img
        max-width: 200px
        max-height: 150px
        // object-fit: containt
        // transition: transform 500ms
        // &:hover
          // transform: scale(1.1)
</tyle>
