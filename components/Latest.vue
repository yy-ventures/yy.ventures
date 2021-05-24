<template lang="pug">
.picture_grid
  .header
    .h2.highlight Latest
  .benefits_grid
    .benefits_container
      nuxt-link(to="/washic")
        img(src="~/assets/images/programs/wash.png").faded_out
        .benefits_container__title
          .h1.faded_out 1
          .h4.faded_out WASH Innovation Challenge
    .benefits_container
      a(href="https://www.youtube.com/watch?v=8mXl2vnscdU" target="_blank" rel="noopener noreferrer")
        img(src="~/assets/images/latest/sbys.jpg").faded_out
        .benefits_container__title
          .h1.faded_out 2
          .h4.faded_out SBYS 2021 #[br] Highlights
    .benefits_container
      nuxt-link(to="/investments/impact-hub")
        img(src="~/assets/images/latest/ihd.jpg").faded_out
        .benefits_container__title
          .h1.faded_out 3
          .h4.faded_out YY Ventures Launches Impact Hub in Dhaka
</template>

<script>
import { add_class_on_focus } from '@/assets/scripts/dom_utils';

export default {
  props: ['data'],
  mounted: () => {
    add_class_on_focus({
      ['.faded_out']: 'fade_in',
    });
  },
};
</script>

<style lang="sass" scoped>
.picture_grid
  padding: clamp(25px, 5vw, 50px)
  background: $yy_bg

  .header
    // text-align: center
    .h2
      // color: $fg_dark_title
      color: $fg_light_title
      // margin: clamp(25px, 10vw, 100px) 0
      margin-bottom: 50px
      font-size: clamp(13px, 3vw, 40px)

  .benefits_grid
    display: grid
    @media (min-width: 601px)
      grid-template-columns: auto auto auto

    grid-gap: 50px
    .benefits_container
      position: relative
      overflow: hidden
      height: 350px

      &:first-of-type .h4
        margin-bottom: 23px !important

      img,
      .h5
        height: 80%
        aspect-ratio: 16 / 9

      img
        display: block
        width: 100%
        object-fit: cover
        transition: transform 250ms linear
        &:hover
          transform: scale(1.1)

      &__title, .h5
        position: absolute
      &__title
        left: 0
        bottom: 0
        display: grid
        grid-template-columns: auto auto
        place-items: center
        align-items: end
        z-index: 9
        grid-gap: 15px
        .h1
          font-size: clamp(100px, 20vw, 130px)
          font-weight: 900
          -webkit-text-stroke-width: 1px
          // -webkit-text-stroke-color: grey
          -webkit-text-stroke-color: $fg_light_text
          -webkit-text-fill-color: transparent
        .h4
          color: $fg_light_text
          text-transform: capitalize
          margin-bottom: 20px

          // margin-top: 25px
          // line-height: 4

          font-size: clamp(16px, 2.2vw, 20px)

      .h5
        padding: 25px
        // background: $yy_yellow
        background: linear-gradient($yy_yellow, 90%, transparent)
        // max-width: 100%
        width: 100%
        // opacity: 0.9
        color: $fg_light_text
        font-weight: 600
        font-size: clamp(12px, 2.1vw, 16px)
        top: 0
        left: 0
        transform: translateY(-100%)
        transition: transform 500ms
      &:hover .h5
        transform: translateY(0)
</style>
