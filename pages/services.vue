<template lang="pug">
#home-page
  services-hero
  Intro
  QuoteService
  ServiceGrid
  ServiceWork
</template>
<script>
import ServicesHero from "~/components/services/ServicesHero";
import Intro from "~/components/services/Intro";
import QuoteService from "~/components/services/QuoteService.vue";
import ServiceGrid from "~/components/services/ServiceGrid.vue";
import ServiceWork from "~/components/services/ServiceWork.vue";

import { toggle_class_on_focus, add_class_on_focus, update_scroll } from "@/assets/scripts/dom_utils";

export default {
  components: {
    ServicesHero,
    Intro,
    QuoteService,
    ServiceGrid,
    ServiceWork,
  },

  mounted() {
    update_scroll();
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });
    add_class_on_focus({
      [".faded_out"]: "fade_in",
      // ['#intro']: 'scale_down',
    });
  },
};
</script>
<style lang="sass">
.benefits_container
  .h5
    // font-size: clamp(12px, 2.1vw, 15px) !important
    font-size: calc(0.4vw + 0.5rem) !important

  &:first-of-type
    .h4
      line-height: 1 !important
      margin-bottom: 30px
</style>
