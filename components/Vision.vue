<template lang="pug">
#vision
  article
    .h2 We envision a world of three zero-
    //- .h2.typewriter
    .h2 zero net carbon emission,
    .h2 zero wealth concentration for ending poverty,
    .h2 and zero unemployment by unleashing entrepreneurship in all.
  article

    .p YY Ventures is an incubation and investment Social Business. We believe that a more equitable and just world is possible if we foster ‘Social Business ’while leveraging young people’s talents and ideas.
    .p Our incubation arm, YY Goshthi supports early stage Social Businesses with world-class training, tailor-made consultation support, business services, coworking space, and access to investors, enabling them to navigate their way towards launching a minimum viable product and raising the needed seed capital.
    .p We invest in early stage and untested Social Businesses that are fighting carbon emission, poverty and unemployment in Bangladesh and actively assist portfolio companies navigating the path to notable Social Business funds, venture investors, partners, and client.
    .p Since 2016 we have supported 64 entrepreneurs who have improved the lives of 150,633 people. By 2030 we want to improve the lives of two million people by investing in Social Businesses in emerging countries.
</template>

<style lang="sass" scoped>
#vision
  display: grid
  background: #f1f2f2
  margin-bottom: 50px

  grid-gap: 50px
  transition: transform 500ms 500ms

  padding: 25px
  @media (min-width: 601px)
    padding: 50px

  @media (min-width: 601px)
    grid-template-columns: 1fr 1fr
    place-items: center

  article
    .h2
      color: $fg_dark_title
      font-size: clamp(20px, 2.4vw, 40px)
    .p
      color: $fg_dark_text
      &:not(:first-of-type)
        margin-top: 15px
</style>
