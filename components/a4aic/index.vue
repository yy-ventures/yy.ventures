<template>
  <div id="home-page">
    <!-- <dark-nav></dark-nav> -->
    <!-- <programs-hero></programs-hero> -->
    <contact-hero></contact-hero>
    <programs-incubation></programs-incubation>
    <programs-benefits></programs-benefits>
    <programs-conditions></programs-conditions>
    <programs-cta></programs-cta>
    <programs-partners></programs-partners>
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import DarkNav from '~/components/DarkNav';
import ProgramsHero from '~/components/ProgramsHero';
import ContactHero from '~/components/ContactHero';

import PortfolioInvestments from '~/components/portfolio-redo/PortfolioInvestments';
import PortfolioContact from '~/components/portfolio-redo/PortfolioContact';

import HomeText from '~/components/home-redo/HomeText';
import HomePortfolio from '~/components/home-redo/HomePortfolio';
import HomeCta from '~/components/home-redo/HomeCta';
// import AboutFooter from '~/components/about-redo/AboutFooter';

import ProgramsImpact from '~/components/ProgramsImpact';
import ProgramsBenefits from '~/components/ProgramsBenefits';
import ProgramsConditions from '~/components/ProgramsConditions';
import ProgramsCta from '~/components/ProgramsCta';
import ProgramsServices from '~/components/ProgramsServices';
import ProgramsIncubation from '~/components/ProgramsIncubation';
import ProgramsPortfolio from '~/components/ProgramsPortfolio';
import ProgramsNav from '~/components/ProgramsNav';
import ProgramsPartners from '~/components/ProgramsPartners';

export default {
  components: {
    PortfolioInvestments,
    PortfolioContact,

    DarkNav,
    ProgramsHero,
    ContactHero,
    HomeText,
    HomePortfolio,
    HomeCta,
    // AboutFooter,

    ProgramsImpact,
    ProgramsConditions,
    ProgramsCta,
    ProgramsServices,
    ProgramsIncubation,
    ProgramsPortfolio,
    ProgramsNav,
    ProgramsBenefits,
    ProgramsPartners,
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
