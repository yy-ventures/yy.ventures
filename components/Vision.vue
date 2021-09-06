<template lang="pug">
#vision
  article
    .h2 We envision a world of three zeros-
    //- .h2.typewriter
    .h2 zero net carbon emission,
    .h2 zero wealth concentration for ending poverty,
    .h2 and zero unemployment by unleashing entrepreneurship in all.
  article

    .p We believe that a more equitable and just world is possible if we foster ‘Social Business’ while leveraging young people’s talents and ideas.
    .p Endless possibility dies the moment when aspiring social entrepreneurs back off from their incredible ideas because of being clueless on how to materialize them or due to lack of access to resources like capital. Without needed resources and guidance, innovation is barred. This is unacceptable to us!
    .p We invest in socially and environmentally conscious entrepreneurs who are solving crucial issues of our times benefitting the underserved communities. We are building our first Social Business fund to invest in pre-seed and seed-stage Social Businesses and actively assist portfolio companies navigating the path to notable Social Business funds, venture investors, partners, and clients.
    .p Our journey started with the creation of Bangladesh’s first Social Business incubator YY Goshthi in 2016 that has backed 64 entrepreneurs to date who have improved the lives of 150,633 Bangladeshis. By 2030 we want to improve the lives of two million people by investing in Social Businesses in emerging countries.
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
