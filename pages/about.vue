<template>
  <div id="about-page" data-cursor-mix-blend-mode="substract">
    <about-hero></about-hero>
    <about-text></about-text>
    <about-values></about-values>
    <about-featured></about-featured>
    <about-team :staff="staff"></about-team>
    <about-pre-footer></about-pre-footer>
  </div>
</template>

<script>
import AboutHero from "~/components/about-redo/AboutHero";
import AboutText from "~/components/about-redo/AboutText";
import AboutValues from "~/components/about-redo/AboutValues";
import AboutFeatured from "~/components/about-redo/AboutFeatured";
import AboutTeam from "~/components/about-redo/AboutTeam";
import AboutPartner from "~/components/about-redo/AboutPartner";
import AboutPreFooter from "~/components/about-redo/AboutPreFooter";

import staff from "~/assets/data/staff.json";

import { add_class_on_focus, toggle_class_on_focus } from "@/assets/scripts/dom_utils";

export default {
  name: "AboutPage",
  components: {
    AboutHero,
    AboutText,
    AboutValues,
    AboutFeatured,
    AboutTeam,
    AboutPartner,
    AboutPreFooter,
  },
  data: () => ({
    staff,
  }),
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });
    add_class_on_focus({
      [".faded_out"]: "fade_in",
    });
  },
};
</script>

<style lang="sass">
#partner
  a:nth-of-type(1)
    width: 300px !important
</style>
