<template>
  <div id="portfolio-page" data-cursor-mix-blend-mode="substract">
    <portfolio-hero></portfolio-hero>
    <!-- <portfolio-text></portfolio-text> -->
    <!-- <portfolio-ventures></portfolio-ventures> -->
    <portfolio-investments></portfolio-investments>
    <!-- <portfolio-cta v-on:ctaclicked="showForm = true"></portfolio-cta> -->
    <pre-footer></pre-footer>
    <!-- <portfolio-contact v-show="showForm"></portfolio-contact> -->
  </div>
</template>

<script>
import PortfolioHero from '~/components/portfolio-redo/PortfolioHero';
import PortfolioText from '~/components/portfolio-redo/PortfolioText';
//import PortfolioVentures from '~/components/portfolio-redo/PortfolioVentures'
import PortfolioInvestments from '~/components/portfolio-redo/PortfolioInvestments';
import PortfolioCta from '~/components/portfolio-redo/PortfolioCta';
import PortfolioContact from '~/components/portfolio-redo/PortfolioContact';
import PreFooter from '~/components/PreFooter';
// import AboutFooter from '~/components/about-redo/AboutFooter';

import {
  toggle_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  data() {
    return {
      showForm: false,
    };
  },
  components: {
    PortfolioHero,
    PortfolioText,
    PortfolioCta,
    PortfolioContact,
    // AboutFooter,
    //PortfolioVentures,
    PortfolioInvestments,
    PreFooter,
  },
  mounted: () => {
    toggle_class_on_focus({
      ['.highlight']: 'scale',
    });
  }
};
</script>
