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
      .h3 AmarLab Ltd & GARBAGEMAN Ltd
      .h5 Investment Readiness
      .h5 Investment Measurement
      .p We were commissioned by Roots of Impact GmbH to offer Investment Readiness and Impact management services to AmarLab Limited and Garbageman Limited in 2020 under the Biniyog Briddhi program. Under the Investment Readiness service, we designed the Financial Model, Company Compliance Checklist, Financial Instrument, and Investor Hitlist. Our Impact Measurement service included creation of Theory of Change, Data Collection Plan, Storage, Analysis, Review system and Decision Making Template.

    .previous_work__grid__image.faded_out
      img(src="~/assets/images/services/powater.jpg")
    .previous_work__grid__texts.faded_out
      .h3 Powwater, Inc.
      .h5 Venture Building
      .p Powwater is a Social Business that aims to empower the world through sustainable safe drinking water. We have supported the Powwater team in creating a new technology product that enables customers to order safe drinking water, a clean and easy way.

</template>

<style lang="sass" scoped>
.previous_work
  padding: clamp(25px, 5vw, 50px)
  .h2, .h3
    color: $fg_dark_title
  .h2
    margin-bottom: 50px
  .h3, .h5
    margin-bottom: 15px
  .p
    color: $fg_dark_text
    font-size: calc(0.5vw + 0.5rem)
  .h5
    display: inline-block
    background: $yy_magenta
    display: inline-block
    padding: 0.5em 1em
    font-size: calc(0.4vw + 0.4rem)
    border-radius: 25px

    &:nth-of-type(3)
      margin-left: 25px

  .previous_work__grid
    display: grid
    grid-gap: clamp(25px, 5vw, 50px)
    @media (min-width: 601px)
      grid-template-columns: 1fr 1.5fr
</style>
