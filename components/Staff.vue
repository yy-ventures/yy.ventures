<template lang="pug">
    #staff
      .title Team
      .grid_staff
          .grid_staff__container(v-for="member in staff").faded_out
            .grid_staff__container__image_container
              img(:src="require(`~/assets/images/staff/${member.avatar}`)")
            //- img(:src="require(`~/assets/images/staff/${member.avatar}`)")
            .grid_staff__container_name {{member.name}}
            .grid_staff__container_designation {{member.designation}}
</template>

<script>
import { add_class_on_focus } from '@/assets/scripts/dom_utils';

export default {
  props: ['staff'],
  mounted: () => {
    add_class_on_focus({
      ['.faded_out']: 'fade_in',
    });
  },
};
</script>

<style lang="sass" scoped>
img
  max-width: 300px
#staff
  .grid_staff
    display: grid
    grid-template-columns: auto
    place-items: center

    @media (min-width: 601px)
      grid-template-columns: repeat(4, 1fr)

    padding: 30px
    padding-bottom: 100px
    grid-row-gap: 30px

    &__container
      &__image_container
        // max-height: 200px
        // img
        //   object-fit: cover

        // position: relative
        // top: -50px
        background: #f0f1f1
        // transform: translateY(-75px)
        img
          // transform: translateY(-100px)
          // height: 200px
          // max-height: 300px

      &_name,
      &_designation
        text-align: center
        font-family: "Graphik"
        color: black

      &_name
        font-weight: bold
        font-size: 20px
        margin-top: 25px

      &_designation
        margin-bottom: 25px
</style>
