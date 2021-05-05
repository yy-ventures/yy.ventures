<template lang="pug">
#call_to_action
  .h2.highlight {{data.title}}
  .h3 {{data.sub_title_line_1}}
  .h3(v-if="data.sub_title_line_2") {{data.sub_title_line_2}}
  .h5(v-if="data.debut") {{data.debut}}
  nuxt-link(v-if="data.link" :to="data.link").link_button Apply Now
  .p(v-if='data.deadline') Deadline: {{data.deadline}}
</template>

<script>
export default {
  props: ['data'],
};
</script>

<style lang="sass">
#call_to_action
  text-align: center
  background: $yy_light_grey
  padding: 50px 0
  .h2, .h3
    color: $fg_dark_title

  .h2
    margin-bottom: 25px
    font-size: clamp(25px, 2.4vw, 40px)

  .h3:nth-of-type(3)
    margin-bottom: 100px

  .h3
    letter-spacing: 3px
    text-transform: uppercase
    font-weight: normal
    font-size: clamp(16px, 2.3vw, 25px)

  .h5
    color: $yy_magenta
    margin-top: 50px

  .p
    color: $yy_magenta
    margin-top: 25px
</style>
