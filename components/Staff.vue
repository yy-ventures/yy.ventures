<template lang="pug">
    #staff
      .title Team
      .grid_staff
          .grid_staff__container(v-for="member in staff").faded_out
            .grid_staff__container__image_container
              .mask
              img(:src="require(`~/assets/images/staff/${member.avatar}.png`)")
            .grid_staff__container__content_container.content-container
              .grid_staff__container__content_container__info-container
                .grid_staff__container__content_container__info-container__name.name {{member.name}}
                .grid_staff__container__content_container__info-container__designation.designation {{member.designation}}
              a.grid_staff__container__content_container__icon.icon(target='_blank' rel='noopener noreferrer' :href="`${member.linkedin}`" uk-icon='icon: linkedin; ratio: 1')
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
#staff
  .grid_staff
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
    grid-gap: 60px 40px

    padding: 30px
    padding-bottom: 100px
    grid-row-gap: 30px

    &__container
      position: relative

      transition: all .3s

      &:hover
        transform: scale(1.1)

      &__image_container
        position: relative
        height: 350px

        background-color: #eaeceb

        .mask
          position: absolute
          height: 100%
          width: 100%
          background-image: linear-gradient(transparent 70%, rgba(0, 0, 0, 0.6))

        img
          height: 100%
          width: 100%
          object-fit: cover

      &__content_container
        height: 100%
        width: 100%
        color: white
        padding: 10px
        transition: all .3s

        display: flex
        justify-content: space-between
        align-items: flex-end
        gap: 10px

        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 111
        &__info-container
          &__name
            font-size: 18px
            font-weight: 700
            transition: all .3s
          &__designation
            font-size: 14px
            transition: all .3s
        &__icon
          color: white
          border: 2px solid white
          border-radius: 5px
          visibility: hidden
          transition-delay: .5s
          transition: all .2s ease-out

    &__container:hover .mask
      background-color: #0090bc6e
    &__container:hover .content-container
      width: 85%
      height: 85%
      border: 2px solid white
    &__container:hover .name
      font-size: 14px
    &__container:hover .designation
      font-size: 11px
    &__container:hover .icon
      visibility: visible
</style>
