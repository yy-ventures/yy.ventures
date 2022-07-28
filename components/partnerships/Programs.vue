<template lang="pug">
.programs
  .h2.highlight Current Partnerships & Programs

  .programs__item.faded_out
    .programs__item__image
      //- img(src="~/assets/images/programs/wash.png")
      img(src="~/assets/images/partnerships/WASH.png")
    .programs__item__texts
      .h3 Wash Innovation Challenge
      .buttons
        .status Ongoing
        a(href="https://yy.ventures/washic" target="_blank" rel="noopener noreferrer") Learn More
      .descriptions.p We have teamed up with Aqua for All & Bopinc to support up to 15 teams that have creative and market-driven solutions for the WASH sector in Bangladesh. Finalists get access to intensive training, tailored mentorship, and a possible funding opportunity of up to €200.000.

  .programs__item.faded_out
    .programs__item__image
      img(src="~/assets/images/partnerships/DKC.png")
    .programs__item__texts
      .h3 Digital Khichuri Challenge
      .buttons
        .status Ongoing
        a(href="https://digitalkhichuribd.org/" target="_blank" rel="noopener noreferrer") Learn More
      .descriptions.p Digital Khichuri Challenge (DKC) is a creative competition for Bangladeshi youth who are promoting peace, tolerance and diversity. We operate the DKC Mentoring Program that includes a 4 day long boot camp, 6 month long mentorship and funding.

  .programs__item.faded_out
    .programs__item__image
      img(src="~/assets/images/partnerships/SIM_final.png")
    .programs__item__texts
      .h3 SIMcubator - Healthcare  Incubation Program
      .buttons
        .status Ongoing
        a(href="http://simcubator.com/" target="_blank" rel="noopener noreferrer") Learn More
      .descriptions.p YY Ventures has partnered with SIMcubator to design and operate an healthcare incubation program when COVID-19 Pandemic hit the world. We are supporting 6 Social Businesses who aim to reach approximately 5,000 patients and transform the lives of 60,000 people in Bangladesh by the end of 2023.

</template>

<style lang="sass" scoped>
.programs
  padding: 50px
  .h2, .h3
    color: $fg_dark_title

  .h2
    margin-bottom: 50px

  .p
    color: $fg_dark_text
    background: $yy_yellow
    padding: 25px

  .programs__item
    display: grid
    grid-template-columns: 400px 1fr
    // grid-template-rows: 350px

    & + *
      margin-top: 75px

    // &__image
    //   background: blue

    &__texts
      display: flex
      flex-direction: column
      align-items: start

      .h2
        margin-left: 25px

      .buttons
        width: 100%
        display: flex
        // gap: 25px
        align-items: center

        .status,
        a
          font-size: 14px
          color: white
          border-radius: 15px
          padding: 0.5em 1em
          background: $yy_blue
          margin: 25px 0 25px 25px

        .status
          background: $yy_blue

        a
          background: $yy_yellow
          color: black
          font-weight: bold

      .p
        flex: 1
        font-size: clamp(14px, 2vw, 18px)

      .h3
        font-weight: 600


        &.off
          background: $yy_magenta


      .h3
        margin-left: 25px
</style>
