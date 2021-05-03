<template lang="pug">
.letstalk
  .h2.highlight Let's Talk

  .letstalk__grid
    .letstalk__grid__container
      .p.faded_out #[strong Schedule a call] with our team to discuss how YY Ventures can be a part of your cause and find scope to collaborate and work together.
      .h5.call.faded_out Schedule a call
    .letstalk__grid__container
      .letstalk__grid__container__image
        img(src="~/assets/images/staff/sharika.png").faded_out
      .h3.faded_out Sharika Sadaf
      .p.position.faded_out Head of Programs & Partnerships
    .letstalk__grid__container
      .letstalk__grid__container__image
        img(src="~/assets/images/staff/osman.png").faded_out
      .h3.faded_out Osman Dhali
      .p.position.faded_out Cheif of Staff
</template>

<style lang="sass" scoped>
.letstalk
  background: $yy_light_grey
  padding: 50px
  padding-bottom: 100px
  .h2, .h3
    color: $fg_dark_title
  .p
    color: $fg_dark_text

  .h2
    margin: 50px 0
    font-size: clamp(13px, 3vw, 40px)

  .h3
    margin-top: 25px
    font-size: clamp(20px, 2vw, 25px)

  &__grid
    display: grid
    @media (min-width: 601px)
      grid-template-columns: 1fr 1fr 1fr
    grid-gap: 50px

    &__container
      width: 100%

      display: grid
      place-items: center

      
      &:first-of-type
        display: flex
        flex-direction: column
        justify-content: space-between

        .p
          margin-top: 50px

      // &:not(:first-of-type)
      //   display: grid
      //   place-items: center

      .p
        color: $fg_dark_text
        font-size: clamp(20px, 2vw, 25px)
        &.position
          font-size: clamp(16px, 2vw, 20px)

      .call
        color: $fg_dark_title
        font-size: clamp(20px, 2vw, 25px)
        padding: 1em 2em
        background: $yy_yellow

      &__image
        width: 100%
        height: 400px
        img
          width: 100%
          height: 100%
          object-fit: cover
          object-position: 50% 100%
</style>
