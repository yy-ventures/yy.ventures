<template>
  <div id="ihd-page" data-cursor-mix-blend-mode="substract">
    <!-- <dark-nav></dark-nav> -->
    <company-profile v-bind:portfolio="portfolio"></company-profile>
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
// import DarkNav from '~/components/DarkNav';
import CompanyProfile from '~/components/portfolio-redo/CompanyProfile';
// import AboutFooter from '~/components/about-redo/AboutFooter';
import details from 'static/data/portfolio.json';

export default {
  data() {
    return {
      info: details,
      id: this.$route.params.id,
    };
  },
  components: {
    // DarkNav,
    CompanyProfile,
    // AboutFooter,
  },
  computed: {
    portfolio() {
      return this.info.find((el) => el.id === this.id);
    },
  },
};
</script>
