<template lang="pug">
#programs_benefits
  .header
    .h2.highlight Benefits startups will receieve

  .benefits_grid
    .benefits
      .digit 1
      .benefit__texts
        .h5 world class training
        .p This program will create a space for promising innovators and entrepreneurs to accelerate their WASH initiatives by training them through 3-day long boot camps to shape their idea into reinvented business models through proper strategy implementation.
      .digit 2
      .benefit__texts
        .h5 mentoring
        .p Mentoring hours will be structured based on the needs of participants during the program weeks. Participants will have the opportunity to avail mentoring from subject matter experts. 
      .digit 3
      .benefit__texts
        .h5 funding opportunity
        .p Top participants will have the chance to receive a funding opportunity of €200,000 given that they meet the Aqua For All funding criteria.
      .digit 4 
      .benefit__texts
        .h5 investor network
        .p With the shared support with the program partners, we will bring in a pool of investor and funders for the teams to connect and create conversations that will lead to opening up opportunities for their startups. 
      .digit 5
      .benefit__texts
        .h5 coworking space
        .p Selected applicants will become members at Impact Hub Dhaka, one of the largest social entrepreneurs' network in the world and get access to coworking space that comes with high-speed internet, furnished space and community events.
      .digit 6
      .benefit__texts
        .h5 startup community
        .p Teams will be introduced to a diverse and inclusive network of startup founders within the WASH sectors and beyond. By sharing experience and making connection through shared interest, each startup will have the opportunity to collaborate and grow.
    .snaps
      img(src="~assets/images/wash/drinking.png")
      img(src="~assets/images/wash/community.png")
</template>

<style lang="sass" scoped>
#programs_benefits
  padding: 5rem

  .h2,
  .h5
    color: $fg_dark_title
    text-transform: capitalize

  .h5
    margin-bottom: 10px
    margin-top: 25px

  .p
    color: $fg_dark_text

  .header
    text-align: center
    p
      font-size: 50px
      color: #3a3b3a
      display: inline-block
      font-weight: 600
      font-family: "Graphik"
    .h2
      color: $fg_dark_title
      margin-top: 50px

  .benefits_grid
    display: grid
    grid-template-columns: auto auto
    grid-column-gap: 25px
    margin-top: 100px
    .benefits
      display: grid
      grid-template-columns: auto auto
      align-items: center
      grid-column-gap: 25px

      .digit
        font-size: 90px
        font-weight: bold
        font-family: "Graphik"
        -webkit-text-stroke-width: 2px
        -webkit-text-stroke-color: grey
        -webkit-text-fill-color: transparent

    .snaps
      display: grid
      grid-gap: 25px
      img
        width: 100%
</style>
