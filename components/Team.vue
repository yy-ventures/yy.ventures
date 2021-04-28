<template lang="pug">
    #partners
      .title Team
      .grid
          .grid__container(v-for="member in staff")
            img(:src="require(`~/assets/images/team/${member}`)")
</template>

<script>
export default {
  props: ['staff'],
};
</script>

<style lang="sass">
.title
  text-transform: none
  font-size: 40px
.grid
  display: grid
  grid-template-columns: auto
  @media (min-width: 601px)
    grid-template-columns: repeat(4, 1fr)
  padding: 30px
  padding-bottom: 100px
  grid-gap: 30px

  &__container
    background: #f0f1f1
    display: grid
    place-items: center

    img
      max-width: 200px
      max-height: 150px
      // object-fit: containt
</style>
