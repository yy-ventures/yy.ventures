<template lang="pug">
.services
  .h2.highlight Corporate Services
  .services_top_grid
    .services_texts
      .p YY Ventures ofers a full range of corporate services including #[strong incubator/accelerator design & manage- ment, venture building, impact measurement and in- vestment readiness. ]
      .p We help family foundations, venture capital funds, development agencies and government agencies to use the powerful model of Social Business to take their innovation and social impact agenda forward.
    .services_image
      img(src="~/assets/images/services/featured.png")
</template>

<style lang="sass" scoped>
.services
  padding: clamp(25px, 5vw, 50px)
  .h2
    color: $fg_dark_title
  .p
    color: $fg_dark_text

  .services_top_grid
    display: grid
    @media (min-width: 601px)
      grid-template-columns: auto auto
</style>
