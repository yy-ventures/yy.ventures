<template lang="pug">
.carousel
  
  .carousel__track
    .carousel__track__content.current
    .carousel__track__content
    .carousel__track__content

  .carousel__navigator_next(@click="navigate_next()")
  .carousel__navigator_prev(@click="navigate_prev()")

  //- .carousel__navigator_indicators
  //-   .carousel__navigator_indicators__radio.current
  //-   .carousel__navigator_indicators__radio
  //-   .carousel__navigator_indicators__radio

</template>

<script>
import { dom } from '@/assets/scripts/dom_utils';

export default {
  methods: {
    navigate_next: () => {
      // const result = window.getComputedStyle(dom('.carousel__track')).transform;
      // console.log(result);
    },
  },
};
</script>

<style lang="sass" scoped>
.carousel
  overflow: hidden
  position: relative

  &__track
    display: flex
    transform: translate(-100%)
    transform: translate(-200%)

    &__content
      flex: 0 0 100%
      height: 300px
      &:first-of-type
        background: red
      &:nth-of-type(2)
        background: blue
      &:nth-of-type(3)
        background: green

  &__navigator_next, &__navigator_prev
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

  &__navigator_prev
    left: 3%
    transform: rotate(135deg)


  &__navigator_indicators
    position: absolute
    width: 100%
    bottom: 0
    text-align: center

    &__radio
      display: inline-block
      border-radius: 50%
      width: 15px
      height: 15px
      background: rgba(black, .3)
      margin: 0 10px

      &.current
        background: rgba(black, .75)
</style>
