<template>
  <div id="portfolio-page" data-cursor-mix-blend-mode="substract">
    <portfolio-hero></portfolio-hero>
    <!-- <portfolio-text></portfolio-text> -->
    <PortfolioIntro/>
    <QuotePortfolio/>
    <PortfolioGrid/>
    <PortfolioWork/>
    <!-- <portfolio-ventures></portfolio-ventures> -->
    <!-- <portfolio-investments></portfolio-investments> -->
    <!-- <portfolio-cta v-on:ctaclicked="showForm = true"></portfolio-cta> -->
    <!-- <pre-footer></pre-footer> -->
    <!-- <portfolio-contact v-show="showForm"></portfolio-contact> -->
    <!-- <portfolio-advisor></portfolio-advisor> -->
  </div>
</template>

<script>
import PortfolioHero from '~/components/portfolio-redo/PortfolioHero';
import PortfolioText from '~/components/portfolio-redo/PortfolioText';
//import PortfolioVentures from '~/components/portfolio-redo/PortfolioVentures'
import PortfolioInvestments from '~/components/portfolio-redo/PortfolioInvestments';
import PortfolioCta from '~/components/portfolio-redo/PortfolioCta';
import PortfolioContact from '~/components/portfolio-redo/PortfolioContact';
import QuotePortfolio from '~/components/QuotePortfolio.vue';
import PortfolioGrid from '~/components/portfolio-redo/PortfolioGrid.vue';
import PortfolioIntro from '~/components/portfolio-redo/PortfolioIntro.vue';
import PortfolioWork from '~/components/portfolio-redo/PortfolioWork.vue';
import PreFooter from '~/components/PreFooter';
// import AboutFooter from '~/components/about-redo/AboutFooter';

import {
  toggle_class_on_focus,
} from '@/assets/scripts/dom_utils';
import PortfolioAdvisor from '~/components/portfolio-redo/PortfolioAdvisor.vue';


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
    PortfolioAdvisor,
    PortfolioIntro,
    PortfolioGrid,
    QuotePortfolio,
    PortfolioWork,
  },
  mounted: () => {
    toggle_class_on_focus({
      ['.highlight']: 'scale',
    });
  }
};
</script>
