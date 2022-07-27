<template>
  <div id="career-page">
    <career-hero></career-hero>
    <company-overview></company-overview>
    <job-section></job-section>
  </div>
</template>

<script>
import CareerHero from "~/components/career/CareerHero";
import CompanyOverview from "~/components/career/CompanyOverview";
import JobSection from "~/components/career/JobSection";

export default {
  components: {
    CareerHero,
    CompanyOverview,
    JobSection,
  },
};
</script>
