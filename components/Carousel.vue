<template lang="pug">
.carousel
  .carousel__title.h2 Notable Startups
    
  .carousel__track

    .carousel__track__content.current
      .carousel__track__content__image
        img(src="~assets/images/programs/garbagemen.png")
      .carousel__track__content__texts
        .h3 GARBAGEMAN
        .carousel__track__content__texts__tags
          .h5 Waste Recycling and Management
          .h5 2018
        .p GARBAGEMAN, the first ICT tech-based recycling business in Bangladesh, is dedicated to creating an efficient, affordable, and smooth waste management system by ‘upcycling’ waste into resources. With the vision of creating a Cleaner and Greener Bangladesh, GARBAGEMAN is focused on introducing a modern and scientific approach to establish an efficient waste management system and enhancing the socioeconomic stance of the system.
        .carousel__track__content__texts__socials
          a(href="#" uk-icon="icon: facebook; ratio: 1.5")
          a(href="#" uk-icon="icon: twitter; ratio: 1.5")
          a(href="#" uk-icon="icon: linkedin; ratio: 1.5")
          a(href="#" uk-icon="icon: instagram; ratio: 1.5")

  .carousel__navigator_next(@click="navigate_next()")
  .carousel__navigator_prev(@click="navigate_prev()")
</template>

<script>
import { dom } from '@/assets/scripts/dom_utils';

export default {
  methods: {
    navigate_next: () => {
      const slides = Object.values(dom('.carousel__track').children)
      let current_index;
      slides.forEach( (dom, index) => {
        if(dom.classList.contains('current'))
          current_index = index
      })

      let next_index = current_index + 1 < slides.length ? current_index + 1 : slides.length - 1

      dom('.carousel__track').style.transform = 'translateX(-' + next_index * 100 + '%)';
      slides[current_index].classList.remove('current')
      slides[next_index].classList.add('current')
    },
    navigate_prev: () => {
      const slides = Object.values(dom('.carousel__track').children)
      let current_index;
      slides.forEach( (dom, index) => {
        if(dom.classList.contains('current'))
          current_index = index
      })

      let prev_index = current_index - 1 < 0 ? 0 : current_index - 1

      dom('.carousel__track').style.transform = 'translateX(-' + prev_index * 100 + '%)';
      slides[current_index].classList.remove('current')
      slides[prev_index].classList.add('current')
    },
  },
};
</script>

<style lang="sass" scoped>
.carousel
  overflow: hidden
  position: relative

  padding: 50px

  .h2, .h3
    color: $fg_dark_title

  .h2
    margin-bottom: 50px

  .h3
    font-weight: normal
    font-size: clamp(30px, 3vw, 40px)

  .p
    color: $fg_dark_text

  &__track
    display: flex
    transition: transform 1s

    &__content
      flex: 0 0 100%
      // &:first-of-type
      //   background: red
      // &:nth-of-type(2)
      //   background: blue
      // &:nth-of-type(3)
      //   background: green

      display: grid
      grid-gap: 50px
      @media (min-width: 601px)
        grid-template-columns: 1fr 1fr

      &__texts

        &__tags
          display: flex
          .h5
            background: $yy_blue
            padding: 0.5em
            border-radius: 25px
            margin: 25px 0
            & + *
              margin-left: 25px

        &__socials
          margin-top: 50px
          // background: red
          a
            color: $fg_dark_text
            // padding: 25px
            // font-size: 50px
            & + *
              margin-left: 25px


  &__navigator_next, &__navigator_prev
    position: absolute
    z-index: 99

    bottom: 10%
    right: 5%

    transform: translateY(-50%)

    cursor: pointer

    width: clamp(25px, 4vw, 50px)
    height: clamp(25px, 4vw, 50px)

    border: solid $yy_yellow
    transform: rotate(-45deg)
    border-width: 0 clamp(3px, 1vw, 7px) clamp(3px, 1vw, 7px) 0

  &__navigator_prev
    right: 10%
    transform: rotate(135deg)
</style>
