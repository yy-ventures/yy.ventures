<template lang="pug">
  #home_page
    home-hero
    Vision
    Quote
    News
    pre-footer
    HomeBrands
</template>

<script>
import HomeHero from "~/components/home-redo/HomeHero";
import Vision from "~/components/home-redo/Vision";
import Quote from "~/components/home-redo/Quote";
import News from "~/components/news/News.vue";
import PreFooter from "~/components/home-redo/PreFooter";
import HomeBrands from "~/components/home-redo/HomeBrands.vue";

import {
  toggle_class_on_focus,
  update_scroll,
  update_element_scroll,
  run_function_on_focus,
  typewriter,
  dom,
  add_class_on_focus,
} from "@/assets/scripts/dom_utils";

import latest from "~/assets/data/latest.json";

export default {
  components: {
    HomeHero,
    Vision,
    Quote,
    News,
    PreFooter,
    HomeBrands,
  },

  data: () => ({
    latest,
  }),

  mounted: () => {
    update_scroll();
    toggle_class_on_focus({
      [".highlight"]: "scale",
      // ['#quote .line_1']: 'reel_right',
      // ['#quote .line_2']: 'reel_left',
    });

    typewriter(["Reality", "Society", "World", "Way of Doing Business"], 100, 1000)(dom(".write"));

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#vision"]: "scale_down",
      // ['#vision article .h2:first-of-type']: 'type__l1',
      // ['#vision article .h2:nth-of-type(2)']: 'type__l2',
      // ['#vision article .h2:nth-of-type(3)']: 'type__l3',
    });
  },
};
</script>

<style lang="sass" scoped>
// #home-hero
//   .hero-container
//       h1
//         font-size: clamp(30px, 5vw, 95px) !important
//         margin: 5px !important
//       .write
//         font-size: clamp(24px, 7vw, 95px) !important
</style>
