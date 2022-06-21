<template lang="pug">
.picture_grid
  .header
    .h2.highlight News, Views & More
  .benefits_grid
    .benefits_container
      nuxt-link(to="/news/enterprises-graduate")
        img(src="~/assets/images/news/enterprises-1.jpg").faded_out
        .benefits_container__title
          .h1.faded_out News 
          .h4.faded_out 14 enterprises graduate from YY Goshthi Incubation program.
    .benefits_container
      nuxt-link(to="/news/no-going-back")
        img(src="~/assets/images/news/pic-2.jpg").faded_out
        .benefits_container__title
          .h1.faded_out Views
          .h4.faded_out Post-Corona Reconstruction Programme No Going Back
    .benefits_container
      nuxt-link(to="/news/deshi-ballers")
        img(src="~/assets/images/news/ballers-1.jpg").faded_out
        .benefits_container__title
          .h1.faded_out Stories
          .h4.faded_out Deshi Ballers: Empowering women through sports
  .benefits_footer
    nuxt-link(to="/news-views-more") See All
</template>

<script>
import { add_class_on_focus } from "@/assets/scripts/dom_utils";

export default {
  props: ["data"],
  mounted: () => {
    add_class_on_focus({
      [".faded_out"]: "fade_in",
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
      // font-size: clamp(13px, 3vw, 40px)
      // font-size: clamp(20px, 4vw, 40px)
      font-size: 2.5rem

  .benefits_grid
    display: grid
    @media (min-width: 601px)
      grid-template-columns: auto auto auto

    grid-gap: 50px
    .benefits_container
      position: relative
      overflow: hidden
      height: 400px

      &:first-of-type .h4
        margin-bottom: 15px !important

      img,
      .h5
        height: 80%
        aspect-ratio: 16 / 9

      img
        display: block
        width: 100%
        object-fit: cover
        transition: transform 250ms linear
        opacity: 0.6
        &:hover
          transform: scale(1.05)
      &__title, .h5
        position: absolute
      &__title
        left: 0
        top: 50%
        // display: grid
        // grid-template-columns: auto auto
        // place-items: center
        // align-items: end
        // z-index: 9
        // grid-gap: 15px
        .h1
          font-size: clamp(70px, 15vw, 100px)
          font-weight: 900
          -webkit-text-stroke-width: 2px
          // -webkit-text-stroke-color: grey
          -webkit-text-stroke-color: $fg_light_text
          // -webkit-text-stroke-color: #f8d23a
          -webkit-text-fill-color: transparent

        .h4
          color: $fg_light_text
          text-transform: capitalize
          margin-bottom: 20px
          padding-top: 5%

          // margin-top: 25px
          // line-height: 4

          font-size: clamp(14px, 2vw, 18px)

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
  .benefits_footer
    text-align: center
    padding: 2.5% 0
    a
      color: #f2f2f2
      padding: 6px 36px
      border: 1px solid #f2f2f2
</style>
