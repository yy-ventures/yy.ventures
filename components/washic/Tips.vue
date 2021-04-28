<template lang="pug">
#tips
  .h2.highlight The Way You Can Solve a WASH Problem
  .tips_grid
    .tips_grid__item
    .tips_grid__item.h5 Questions to be asked:
    .tips_grid__item.h5 Examples

    .tips_grid__item.h5.faded_out Affordability
    .tips_grid__item.p.faded_out How can you help low-income households pay for drinking water & improved sanitation?
    .tips_grid__item.p.faded_out Ultra-low-cost paper water filters that can be used with traditional water jars. Pay-as-you-go (PAYG) digital metering and billing solutions for water utilities. 

    .tips_grid__item.h5.faded_out Awareness
    .tips_grid__item.p.faded_out How to create lasting behavior change and reach millions of consumers at lower costs?
    .tips_grid__item.p.faded_out Using VR technology as a marketing tool for latrine sales agents. Introducing digital loyalty campaigns to reward consumers for behavior change.

    .tips_grid__item.h5.faded_out Accessibility
    .tips_grid__item.p.faded_out How to make the best solutions available at the last mile?
    .tips_grid__item.p.faded_out Involving local youth to become entrepreneurs and collect purchase orders through e-commerce solutions. 

    .tips_grid__item.h5.faded_out Advantage
    .tips_grid__item.p.faded_out How to create more aspirational solutions or bundle multiple WASH offerings?
    .tips_grid__item.p.faded_out Introducing lease-to-own models for consumers to first experience the benefits of improved latrines.  Leveraging PAYGO for upselling.

    .tips_grid__item.h5.faded_out Sustainability
    .tips_grid__item.p.faded_out How to reduce the environmental impact of waste and create circular economies?
    .tips_grid__item.p.faded_out Developing a mobile app which enables pit latrine emptying truck drivers to schedule their route and dispose the sludge at legal sites.

</template>

<style lang="sass" scoped>
#tips
  text-align: center
  padding: 100px 0
  .h2
    color: $fg_dark_title
    margin-bottom: 50px
    font-size: clamp(15px, 3vw, 40px)

  .tips_grid
    display: grid
    padding-left: clamp(25px, 5vw, 50px)
    padding-right: clamp(25px, 5vw, 50px)
    // grid-template-columns: auto auto auto
    @media (min-width: 601px)
      grid-template-columns: auto auto auto
    grid-gap: 25px

    &__item
      padding: 25px
      background: $yy_light_grey

      &:nth-of-type(1), &:nth-of-type(2), &:nth-of-type(3)
        all: unset
        justify-self: start
        font-weight: 600
        font-size: clamp(16px, 2.1vw, 18px)
        font-family: "Graphik"
        line-height: 1.1
        color: $yy_magenta !important

    &__item.h5
      color: $fg_dark_title
    &__item.p
      color: $fg_dark_text
</style>
