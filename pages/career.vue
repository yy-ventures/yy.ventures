<template>
  <div id="contact-page">
    <!-- <dark-nav></dark-nav> -->
    <career-hero></career-hero>
    <company-overview></company-overview>
    <job-section></job-section>

    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import DarkNav from '~/components/DarkNav';
import CareerHero from '~/components/career/CareerHero';
import CompanyOverview from '~/components/career/CompanyOverview';
import JobSection from '~/components/career/JobSection';

// import AboutFooter from '~/components/about-redo/AboutFooter';
export default {
  components: {
    DarkNav,
    CareerHero,
    CompanyOverview,
    JobSection,

    // AboutFooter,
  },
};
</script>
