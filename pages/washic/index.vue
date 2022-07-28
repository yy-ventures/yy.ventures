<template>
  <div id="home-page">
    <contact-hero></contact-hero>
    <Program :data="wash_program"></Program>
    <picture-grid :data="wash_benefits"></picture-grid>
    <Eligibility class="faded_out" :data="wash_eligibility"></Eligibility>
    <Tips></Tips>
    <call-to-action :data="wash_call_to_action"></call-to-action>
    <Partner :data="wash_partners"></Partner>
  </div>
</template>

<script>
import ContactHero from "~/components/services/washic/ContactHero";
import Program from "~/components/services/washic/Program";
import PictureGrid from "~/components/services/washic/PictureGrid";
import Eligibility from "~/components/services/washic/Eligibility";
import Tips from "~/components/services/washic/Tips";
import CallToAction from "~/components/services/washic/CallToAction";
import Partner from "~/components/partnerships/Partner";

import wash_program from "~/assets/data/wash_program.json";
import wash_benefits from "~/assets/data/wash_benefits.json";
import wash_eligibility from "~/assets/data/wash_eligibility.json";
import wash_call_to_action from "~/assets/data/wash_call_to_action.json";
import wash_partners from "~/assets/data/wash_partners.json";

import { toggle_class_on_focus, add_class_on_focus } from "@/assets/scripts/dom_utils";

export default {
  components: {
    ContactHero,
    Program,
    PictureGrid,
    Eligibility,
    Tips,
    CallToAction,
    Partner,
  },

  data: () => ({
    wash_benefits,
    wash_program,
    wash_eligibility,
    wash_partners,
    wash_call_to_action,
  }),

  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#program #top_section"]: "scale_down",
    });
  },
};
</script>

<style lang="sass">
#partner
  .partners_grid
    @media (min-width: 601px)
      grid-template-columns: repeat(3, 1fr) !important
    .partner_container:nth-of-type(1)
      width: 150px
</style>
