<template lang="pug">
#program
  #top_section
    .h2.highlight {{data.title}}
    #grid
      img(:src="require(`~/assets/images/${data.picture}`)")
      #texts
        .h3(v-if="data.paragraph_title") {{data.paragraph_title}}
        //- .p {{data.paragraph_text}}
        .p(v-for="paragraph in data.paragraphs") {{paragraph}}
        //- .p YY Ventures has partnered up with Aqua for All & Bopinc to introduce the #[strong WASH Innovation Challenge] for the first time in Bangladesh. This program will support up to 15 teams that have creative and market-driven solutions for the WASH sector in Bangladesh. With this we hope to jointly achieve Sustainable Development Goal 6 – Water and sanitation for all.
  #bottom_section
    #left
      .h3(v-if="data.stat_1") {{data.stat_1}}
      .h3(v-if="data.stat_2") {{data.stat_2}}
      .h3.highlight {{data.stat_3}}
    #right
      .h5(v-if="data.debut") {{data.debut}}
      .h3 {{data.application_title}}
      nuxt-link(:to="data.application_link" v-if="data.application_link").arrow
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="sass" scoped>
#program
  .h2, .h3
    color: $fg_dark_title

  .p
    color: $fg_dark_text

  .h2
    text-transform: capitalize
  #top_section
    padding: clamp(25px, 5vw, 50px)
    background: #f1f2f2
    transition: transform 500ms 500ms

    #grid
      display: grid
      margin-top: 50px
      grid-gap: 25px
      @media (min-width: 601px)
        grid-template-columns: 1fr 1fr

      .h3
        color: $yy_magenta
        margin-bottom: 25px

      #texts
        .p
          &:nth-of-type(2)
            margin-top: 25px
      // .p
      //   margin-top: 25px
  #bottom_section
    display: flex
    flex-direction: column
    @media (min-width: 601px)
      flex-direction: row
      justify-content: space-between

    padding: clamp(25px, 5vw, 50px)

    #left
      .h3
        font-size: clamp(11px, 2vw, 30px)

    #right
      .h3, .h5
        color: $yy_blue
      .arrow
        &:before, &:after
          border: solid $yy_yellow
          border-width: 0 5px 5px 0
</style>
