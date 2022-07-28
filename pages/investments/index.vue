<template>
  <div id="portfolio-page" data-cursor-mix-blend-mode="substract">
    <PortfolioHero />
    <PortfolioIntro />
    <PortfolioGrid />
    <PortfolioWork />
  </div>
</template>

<script>
import PortfolioHero from "~/components/portfolio-redo/PortfolioHero";
import PortfolioIntro from "~/components/portfolio-redo/PortfolioIntro.vue";
import PortfolioGrid from "~/components/portfolio-redo/PortfolioGrid.vue";
import PortfolioWork from "~/components/portfolio-redo/PortfolioWork.vue";

import { toggle_class_on_focus } from "@/assets/scripts/dom_utils";

export default {
  components: {
    PortfolioHero,
    PortfolioIntro,
    PortfolioGrid,
    PortfolioWork,
  },
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });
  },
};
</script>
