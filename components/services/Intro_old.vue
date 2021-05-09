<template lang="pug">
#intro
  .h3 YY Ventures offers a full range of corporate services including incubator/accelerator design & management, venture building, impact measurement, and investment readiness. We help family foundations, impact funds, corporations, development agencies, and government agencies to use the powerful model of Social Business to take their innovation and social impact agenda forward.
</template>

<style lang="sass" scoped>
#intro
  background: $yy_bg

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
