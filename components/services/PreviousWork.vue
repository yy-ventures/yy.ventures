<template lang="pug">
.previous_work
  .h2.highlight Some of Our Previous Work

  .previous_work__grid

    .previous_work__grid__image
      img(src="~/assets/images/services/dkc.jpg")
    .previous_work__grid__texts
      .h3 Digital Khichuri Challenge by UNDP
      .h5 Incubator/Accelerator Management
      .p UNDP at DKC in terms of Accelerator/Incubator management service- The Digital Khichuri Challenge (DKC) Mentorship Program is an initiative of the UNDP Partnership for a Tolerant, Inclusive Bangladesh (PTIB) Project, designed and operated by YY Goshthi. The mentorship program aims to provide a concrete base of learning, as well as to employ and apply methodical perfection in building a bridge between the mentors and mentees. Hence, we employ a human-centered design, a concept that explains how the focus of any social business ideation should be on the human element rather than the process that is acted out.

    .previous_work__grid__image
      img(src="~/assets/images/services/amarlab.jpeg")
    .previous_work__grid__texts
      .h3 Investment Readiness for AmarLab with Biniyog Briddhi
      .h5 Investment Readiness
      .p Under the Biniyog Briddhi Voucher Scheme program, under the Investment Readiness service for AmarLab, we prepared the Pitch Deck, Financial Model, Company Compliance Checklist, Financial Instrument, and Investor Hitlist.

    .previous_work__grid__image
      img(src="~/assets/images/services/garbageman.jpg")
    .previous_work__grid__texts
      .h3 Impact Measurement for GARBAGEMAN with Biniyog Briddhi
      .h5 Impact Measurement
      .p Under the Biniyog Briddhi Voucher Scheme program, under the Impact Measurement service for Garbageman, we have prepared the Theory of Change, Data Collection Plan, Storage, Analysis, Review system, Decision Making Template, and Revised Theory of Change.

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
    background: $yy_magenta
    display: inline-block
    padding: 0.5em 1em
    border-radius: 25px

  .previous_work__grid
    display: grid
    grid-gap: clamp(25px, 5vw, 50px)
    @media (min-width: 601px)
      grid-template-columns: 1fr 4fr
</style>
