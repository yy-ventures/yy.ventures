<template>
  <div id="about-page" data-cursor-mix-blend-mode="substract">
    <about-hero></about-hero>
    <about-text></about-text>
    <about-values></about-values>
    <about-featured></about-featured>
    <about-team v-if="staff.length > 0" :staffs="staff"></about-team>
    <about-pre-footer></about-pre-footer>
  </div>
</template>

<script>
import AboutHero from "~/components/about-redo/AboutHero";
import AboutText from "~/components/about-redo/AboutText";
import AboutValues from "~/components/about-redo/AboutValues";
import AboutFeatured from "~/components/about-redo/AboutFeatured";
import AboutTeam from "~/components/about-redo/AboutTeam";
import AboutPreFooter from "~/components/about-redo/AboutPreFooter";

// import staff from "~/assets/data/staff.json";

import { add_class_on_focus, toggle_class_on_focus } from "@/assets/scripts/dom_utils";
import axios from "axios";

export default {
  name: "AboutPage",
  components: {
    AboutHero,
    AboutText,
    AboutValues,
    AboutFeatured,
    AboutTeam,
    AboutPreFooter,
  },
  data: () => ({
    staff: [],
  }),

  methods: {
    async getData() {
      const baseUrl = process.env.apiBaseUrl;
      await axios.get(`${baseUrl}/get-teams-data`).then((response) => (this.staff = response.data.data));
    },
  },

  mounted: function () {
    this.getData();

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
