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
        a Learn More
      .descriptions.p YY Ventures has partnered up with Aqua for All & Bopinc to introduce the WASH Innovation Challenges for the first time in Bangladesh. This program will support up to 15 teams that have creative and market-driven solutions for the WASH sector in Bangladesh. With this we hope to jointly achieve Sustainable Development Goal 6 – clean water and sanitation for all. Through WASH Innovation Challenge, we are extending our sincere support to empower 15 promising WASH-focused enterprises or projects with the opportunity of intensive training, seasoned mentorship, and a possible funding opportunity of up to €200,000.

  .programs__item.faded_out
    .programs__item__image
      img(src="~/assets/images/partnerships/DKC_final.png")
    .programs__item__texts
      .h3 Digital Khichuri Challenge
      .buttons
        .status Ongoing
        a Learn More
      .descriptions.p The DKC, started in 2016, that seeks to bring together the youth in forming and creating nar- ratives as well as platform ideas that promote peace, tolerance and diversity to actively counter hateful and divisive narratives. From day one of DKC teams of social entrepreneurs, programmers, grassroots leaders, designers, storytellers, students, and others compete in a fast-paced race-against-the-clock to imagine new digital platforms and tools that can pro- mote the strength of Bangladesh’s diversity and promote peace. 

  .programs__item.faded_out
    .programs__item__image
      img(src="~/assets/images/partnerships/SIM_final.png")
    .programs__item__texts
      .h3 SIMcubator - Healthcare  Incubation Program
      .buttons
        .status.off Currently Not Open
        a Learn More
      .descriptions.p The SIMcubator - Healthcare Incubation Program began in January 2021. It was launched by YY Ventures, in partnership with students from the Strategy and International Management (SIM) Master program at the University of St.Gallen, Switzerland. This program was designed to support local social entrepreneurs in improving the healthcare system of Bangladesh. By partnering with six such local social businesses, this program ultimately aims to reach approximately 5,000 patients and transform the lives of 60,000 people in Bangladesh by the end of 2023. With this partnership, we hope to achieve Sustainable Development Goal 3 regarding “Good Health & Well-being” for all.

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
    padding: 15px

  .programs__item
    display: grid
    grid-template-columns: 550px 1fr
    // grid-template-rows: 350px

    & + *
      margin-top: 75px

    // &__image
    //   background: blue

    &__texts
      display: flex
      flex-direction: column
      align-items: start

      .buttons
        width: 100%
        display: flex
        justify-content: space-between

        a
          margin-top: 15px
          margin-right: 15px

      .p
        flex: 1
        font-size: clamp(12px, 2vw, 16px)

      .h3
        font-weight: 600

      .status
        font-size: 14px
        color: white
        border-radius: 15px
        display: inline-block
        padding: 0.5em 1em
        background: $yy_blue
        margin: 15px 0

        &.off
          background: $yy_magenta


      .h3, .status
        margin-left: 25px
</style>
