<template lang="pug">
#eligibility

  section(v-if="data.target_audience").shadow#first.faded_out
    .h3 Who can apply?
    .h5(v-for="audience in data.target_audience") {{audience}}

  section#second.faded_out
    .h3 Eligibility
    .h5 The legal status of business:
    .p  {{data.legal_status}}

  section.shadow#third.faded_out
    .h5 Stage of venture:
    .p   {{data.stage}}
    //- .p   We welcome ideas from both enterprises that are in their early stages as well those that are more mature. As long as your application shows a unique solution.

</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="sass" scoped>
#eligibility
  section
    @media (min-width: 601px)
      margin: 0 50px
    background: $yy_magenta
    padding: clamp(25px, 2vw, 50px)
    .h5
      margin: 25px 0
    .h3
      color: $fg_light_title
      margin-bottom: 50px
  section#first
    margin-bottom: 50px
    background: $yy_magenta
    .h5
      margin: 25px
      position: relative
      padding-left: 25px
      &:before
        content: "✔ "
        position: absolute
        top: 0
        left: -5px
        background: white
        border-radius: 5px
  section#second
    background: $yy_blue
  section#third
    background: $yy_yellow
    .h5
      color: $fg_dark_title
    .p
      color: $fg_dark_text
</style>
