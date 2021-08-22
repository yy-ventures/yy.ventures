<template lang="pug">
#pointer
  .texts
    .h2 Checkout &nbsp
    .h2.highlight some of our work
  .arrow
</template>

<style lang="sass" scoped>
#pointer
  background: $yy_light_grey
  padding: 40px
  @media (min-width: 601px)
    padding: 50px
  text-align: center

  .texts
    display: flex
    justify-content: center
    .h2
      font-size: clamp(20px, 2.4vw, 35px)
      color: #3a3b3b

  .arrow

    &:after,&:before
      transform: rotate(45deg)
    &:after
      transform: translate(-31px, 25px) rotate(45deg)
    &:hover
      transform: translateY(10px)

    // margin-top: 25px !important
    animation: bounce 1s linear infinite alternate
    @keyframes #{bounce}
      0%
        transform: translateY(10px)
      100%
        transform: translateY(0)

.disappear
  opacity: 0
  visibility: hidden
</style>
