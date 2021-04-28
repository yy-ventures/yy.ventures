<template>
  <div id="home-page">
    <contact-hero></contact-hero>
    <Program :data="wash_program"></Program>
    <picture-grid :data="wash_benefits"></picture-grid>
    <!-- <programs-incubation class="faded_out"></programs-incubation> -->
    <!-- <programs-benefits></programs-benefits> -->

    <Eligibility class="faded_out" :data="wash_eligibility"></Eligibility>
    <!-- <programs-conditions></programs-conditions> -->
    <Tips></Tips>
    <!-- <programs-cta></programs-cta> -->
    <call-to-action :data="wash_call_to_action"></call-to-action>
    <!-- <programs-partners></programs-partners> -->
    <Partner :data="wash_partners"></Partner>
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import ContactHero from '~/components/ContactHero';
import Eligibility from '~/components/washic/Eligibility';
import Tips from '~/components/washic/Tips';
import PictureGrid from '~/components/PictureGrid';
import Program from '~/components/Program';
import CallToAction from '~/components/CallToAction';
import Partner from '~/components/Partner';

import PortfolioInvestments from '~/components/portfolio-redo/PortfolioInvestments';
import PortfolioContact from '~/components/portfolio-redo/PortfolioContact';

import HomeText from '~/components/home-redo/HomeText';
import HomePortfolio from '~/components/home-redo/HomePortfolio';
import HomeCta from '~/components/home-redo/HomeCta';

import ProgramsImpact from '~/components/ProgramsImpact';
import ProgramsBenefits from '~/components/ProgramsBenefits';
import ProgramsConditions from '~/components/ProgramsConditions';
import ProgramsCta from '~/components/ProgramsCta';
import ProgramsServices from '~/components/ProgramsServices';
import ProgramsIncubation from '~/components/ProgramsIncubation';
import ProgramsPortfolio from '~/components/ProgramsPortfolio';
import ProgramsNav from '~/components/ProgramsNav';
import ProgramsPartners from '~/components/ProgramsPartners';

import wash_benefits from '~/assets/data/wash_benefits.json';
import wash_program from '~/assets/data/wash_program.json';
import wash_eligibility from '~/assets/data/wash_eligibility.json';
import wash_call_to_action from '~/assets/data/wash_call_to_action.json';
import wash_partners from '~/assets/data/wash_partners.json';

import {
  toggle_class_on_focus,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    PortfolioInvestments,
    PortfolioContact,

    ContactHero,
    HomeText,
    HomePortfolio,
    HomeCta,

    ProgramsImpact,
    ProgramsConditions,
    ProgramsCta,
    ProgramsServices,
    ProgramsIncubation,
    ProgramsPortfolio,
    ProgramsNav,
    ProgramsBenefits,
    ProgramsPartners,

    Eligibility,
    PictureGrid,
    Program,
    Partner,
    CallToAction,
    Tips,
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
      ['.highlight']: 'scale',
    });

    add_class_on_focus({
      ['.faded_out']: 'fade_in',
      ['#program #top_section']: 'scale_down',
    });
  },
};
</script>

<style lang="less">
#condition_1 {
  background: blue;
}
#condition_2 {
  background: yellow;
}
</style>
