<template>
  <div id="home-page">
    <!-- <dark-nav></dark-nav> -->
    <!-- <programs-nav></programs-nav> -->
    <div id="home"></div>
    <home-hero></home-hero>
    <!-- <Incubation></Incubation> -->
    <div id="about"></div>
    <Program :data="incubator_program"></Program>
    <div id="impact"></div>
    <programs-impact class="faded_out"></programs-impact>
    <div id="benefits"></div>
    <picture-grid :data="incubator_benefits"></picture-grid>
    <!-- <Conditions></Conditions> -->
    <div id="eligibility"></div>
    <Eligibility :data="incubator_eligibility" class="faded_out"></Eligibility>
    <!-- <programs-portfolio></programs-portfolio> -->
    <div id="alumni"></div>
    <Carousel></Carousel>
    <!-- <Cta></Cta> -->
    <div id="apply"></div>
    <call-to-action :data="incubator_call_to_action"></call-to-action>
    <incubator-partners></incubator-partners>
    <!-- <Partner></Partner> -->
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import DarkNav from '~/components/DarkNav';
import Hero from '~/components/yy_goshti/Hero';
import Incubation from '~/components/yy_goshti/Incubation';
import Conditions from '~/components/yy_goshti/Conditions';
import Cta from '~/components/yy_goshti/Cta';
import Carousel from '~/components/Carousel';
import HomeHero from '~/components/home-redo/HomeHero';

import Program from '~/components/Program';
// import Partner from '~/components/Partner';
import CallToAction from '~/components/CallToAction';

import PortfolioInvestments from '~/components/portfolio-redo/PortfolioInvestments';
import PortfolioContact from '~/components/portfolio-redo/PortfolioContact';

import HomeText from '~/components/home-redo/HomeText';
import HomePortfolio from '~/components/home-redo/HomePortfolio';
import HomeCta from '~/components/home-redo/HomeCta';
// import AboutFooter from '~/components/about-redo/AboutFooter';

import ProgramsImpact from '~/components/ProgramsImpact';
import ProgramsConditions from '~/components/ProgramsConditions';
import ProgramsCta from '~/components/ProgramsCta';
import ProgramsServices from '~/components/ProgramsServices';
import ProgramsIncubation from '~/components/ProgramsIncubation';
import ProgramsPortfolio from '~/components/ProgramsPortfolio';
import ProgramsNav from '~/components/ProgramsNav';

import IncubatorPartners from '~/components/IncubatorPartners';
import Eligibility from '~/components/washic/Eligibility';
import PictureGrid from '~/components/PictureGrid';

// import incubator_partners from '~/assets/data/incubator_partners.json';
import incubator_call_to_action from '~/assets/data/incubator_call_to_action.json';
import incubator_eligibility from '~/assets/data/incubator_eligibility.json';
import incubator_program from '~/assets/data/incubator_program.json';
import incubator_benefits from '~/assets/data/incubator_benefits.json';
import wash_benefits from '~/assets/data/wash_benefits.json';

import {
  toggle_class_on_focus,
  typewriter,
  dom,
  run_function_on_focus,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    PortfolioInvestments,
    PortfolioContact,
    Hero,
    Incubation,
    Conditions,
    Cta,
    IncubatorPartners,
    Program,
    CallToAction,
    Eligibility,
    Carousel,
    PictureGrid,

    DarkNav,
    HomeText,
    HomePortfolio,
    HomeCta,
    HomeHero,
    // Partner,
    // AboutFooter,

    ProgramsImpact,
    ProgramsConditions,
    ProgramsCta,
    ProgramsServices,
    ProgramsIncubation,
    ProgramsPortfolio,
    ProgramsNav,
  },

  data: () => ({
    incubator_eligibility,
    incubator_call_to_action,
    incubator_program,
    incubator_benefits,
    wash_benefits,
    // incubator_partners,
  }),

  mounted: () => {

    toggle_class_on_focus({
      ['.highlight']: 'scale',
    });

    // run_function_on_focus({
    //   ['.highlight']: (dom) => {
    //     console.log(dom)
    //   },
    // });

    typewriter(
      ['Building Social Businesses', 'Improving Lives', 'World', 'Incubating Change'],
      100,
      1000
    )(dom('.write'));

    add_class_on_focus({
      ['.faded_out']: 'fade_in',
      ['#startups']: 'count_startups',
      ['#lives']: 'count_lives',
      ['#programs']: 'count_programs',
      ['#program #top_section']: 'scale_down',
    });
  },
};
</script>

<style lang="less">
#program #top_section #texts .p {
  font-size: clamp(18px, 2vw, 21px);
}

#condition_1 {
  background: blue;
}
#condition_2 {
  background: yellow;
}
</style>
