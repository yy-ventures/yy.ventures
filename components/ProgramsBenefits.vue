<template lang="pug">
#programs_benefits
  .header
    .h2.highlight Benefits startups will receieve

  .benefits_grid
    .benefits_container
      img(src="~assets/images/wash/drinking.png")
      .benefits_container__title
        .h1 1
        .h3 world class training
      .p This program will create a space for promising innovators and entrepreneurs to accelerate their WASH initiatives by training them through 3-day long boot camps to shape their idea into reinvented business models through proper strategy implementation.

    .benefits_container
      img(src="~assets/images/wash/drinking.png")
      .benefits_container__title
        .h1 1
        .h3 world class training
      .p This program will create a space for promising innovators and entrepreneurs to accelerate their WASH initiatives by training them through 3-day long boot camps to shape their idea into reinvented business models through proper strategy implementation.

    .benefits_container
      img(src="~assets/images/wash/drinking.png")
      .benefits_container__title
        .h1 1
        .h3 world class training
      .p This program will create a space for promising innovators and entrepreneurs to accelerate their WASH initiatives by training them through 3-day long boot camps to shape their idea into reinvented business models through proper strategy implementation.

</template>

<style lang="sass" scoped>
#programs_benefits
  .header
    text-align: center
    .h2
      color: $fg_dark_title
      margin: 50px

  .benefits_grid
    padding: 50px
    display: grid
    grid-template-columns: auto auto auto
    grid-gap: 50px
    .benefits_container
      position: relative
      overflow: hidden

      img,
      .p
        height: 80%

      img
        display: block
        width: 100%
        object-fit: cover
      &__title, .p
        position: absolute
      &__title
        left: 0
        bottom: 0
        display: grid
        grid-template-columns: auto auto
        place-items: center
        // align-items: end
        z-index: 9
        .h1
          font-size: 150px
          -webkit-text-stroke-width: 1px
          -webkit-text-stroke-color: grey
          -webkit-text-fill-color: transparent
        .h3
          color: $fg_dark_title
          text-transform: capitalize
          margin-top: 25px
      .p
        padding: 25px
        background: $yy_yellow
        opacity: 0.9
        color: $fg_dark_text
        top: 0
        left: 0
        transform: translateY(-100%)
        transition: transform 500ms
      &:hover .p
        transform: translateY(0)
</style>
