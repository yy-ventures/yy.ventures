<template lang="pug">
.previous_work
  //- .h2.highlight Some of Our Previous Work

  .previous_work__grid

    .previous_work__grid__image.faded_out
      img(src="~/assets/images/services/dkc.jpg")
    .previous_work__grid__texts.faded_out
      .h3 Digital Khichuri Challenge by UNDP
      .h5 Incubator/Accelerator Management
      .p UNDP Bangladesh team partnered up with our incubator #[strong YY Goshthi] to conduct the  Digital Khichuri Challenge (DKC) Mentorship Program in Bangladesh from 2019-2021.The scope of work included design and management of five cycles of  the DKC mentorship program to support 15 teams of innovators and entrepreneurs. At the DKC Mentorship Program we offer a 4-day long boot camp, 6 month long tailored mentorship and small grants to DKC winners who are building businesses or running campaigns to promote peace, justice and diversity in Bangladesh.

    .previous_work__grid__image.faded_out
      img(src="~/assets/images/services/amarlab.jpeg")
    .previous_work__grid__texts.faded_out
      .h3 Investment Readiness for AmarLab and Impact Measurement for GARBAGEMAN
      .h5 Investment Readiness
      .h5 Investment Measurement
      .p UNDP Bangladesh team partnered up with our incubator YY Goshthi to conduct the  Digital Khichuri Challenge (DKC) Mentorship Program in Bangladesh from 2019-2021.The scope of work included design and management of five cycles of  the DKC mentorship program to support 15 teams of innovators and entrepreneurs. At the DKC Mentorship Program we offer a 4-day long boot camp, 6 month long tailored mentorship and small grants to DKC winners who are building businesses or running campaigns to promote peace, justice and diversity in Bangladesh.

    .previous_work__grid__image.faded_out
      img(src="~/assets/images/services/powater.jpg")
    .previous_work__grid__texts.faded_out
      .h3 Powwater, Inc.
      .h5 Venture Building
      .p Powwater is a social business that aims to empower the world through sustainable safe drinking water. We have supported the Powwater team in creating a new technology product that enables customers to order safe drinking water, the clean and easy way.

</template>

<style lang="sass" scoped>
.previous_work
  padding: clamp(25px, 5vw, 50px)
  .h2, .h3
    color: $fg_dark_title
  .h2
    margin-bottom: 50px
  .h3, .h5
    margin-bottom: 25px
  .p
    color: $fg_dark_text
  .h5
    display: inline-block
    background: $yy_magenta
    display: inline-block
    padding: 0.5em 1em
    border-radius: 25px

    &:nth-of-type(3)
      margin-left: 25px

  .previous_work__grid
    display: grid
    grid-gap: clamp(25px, 5vw, 50px)
    @media (min-width: 601px)
      grid-template-columns: 1fr 1.5fr
</style>
