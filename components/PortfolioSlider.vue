<template lang="pug">
#portfolio_slider
  .next(@click="slide_next()")
  .prev(@click="slide_prev()")
  .portfolio_slider_track
    .portfolio_slider_slide
      img(src="images/portfolio/covern.jpg")
      //- .h3 Avijatrik - A local tourism marketplace in Bangladesh
      .h3
        strong Avijatrik
        | &nbsp- A local tourism marketplace in Bangladesh
    .portfolio_slider_slide
      img(src="images/portfolio/shishir.jpg")
      //- .h3 Shishir Water - Clean drinking water for all
      .h3
        strong Shishir Water
        | &nbsp- Clean drinking water for all
</template>

<script>
import { dom } from '@/assets/scripts/dom_utils';

export default {
  methods: {
    slide_next: () => {
      dom('.portfolio_slider_track').style.transform = 'translateX(-100%)';
    },
    slide_prev: () => {
      dom('.portfolio_slider_track').style.transform = 'translateX(0)';
    },
  },
};
</script>

<style lang="sass" scoped>
#portfolio_slider
  overflow-x: hidden
  background: $yy_bg
  margin: 100px 0

  position: relative
  .next, .prev
    position: absolute
    z-index: 99
    top: 50%
    right: 3%
    transform: translateY(-50%)

    cursor: pointer

    width: clamp(25px, 4vw, 50px)
    height: clamp(25px, 4vw, 50px)

    border: solid rgba(white, 0.5)
    transform: rotate(-45deg)
    border-width: 0 clamp(3px, 1vw, 7px) clamp(3px, 1vw, 7px) 0

  .prev
    left: 3%
    transform: rotate(135deg)

  .portfolio_slider_track
    display: flex

    // animation: slide 6s ease-in-out infinite alternate
    transition: transform 750ms ease-in-out
    @keyframes #{slide}
      0%, 10%
        transform: translateX(0)
      90%, 100%
        transform: translateX(-100%)


    .portfolio_slider_slide
      position: relative
      padding: clamp(25px, 10vw, 100px)
      flex-shrink: 0
      width: 100%
      &:nth-of-type(2) .h3:before
        content: "2"

      img
        width: 100%
        height: 100%
        object-fit: cover

      .h3
        position: absolute
        color: $fg_light_title
        bottom: 0
        left: 8%
        font-size: clamp(9px, 2vw, 40px)
        font-weight: normal
        &:before
          content: "1"
          margin-right: 10px
          font-size: clamp(50px, 20vw, 200px)
          font-weight: 900
          -webkit-text-stroke-width: 2px
          -webkit-text-stroke-color: $fg_light_title
          -webkit-text-fill-color: transparent
</style>
