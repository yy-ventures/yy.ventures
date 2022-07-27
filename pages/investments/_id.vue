<template>
  <div id="ihd-page" data-cursor-mix-blend-mode="substract">
    <company-profile v-bind:portfolio="portfolio"></company-profile>
  </div>
</template>

<script>
import CompanyProfile from "~/components/portfolio-redo/CompanyProfile";

import details from "static/data/portfolio.json";

export default {
  data() {
    return {
      info: details,
      id: this.$route.params.id,
    };
  },
  components: {
    CompanyProfile,
  },
  computed: {
    portfolio() {
      return this.info.find((el) => el.id === this.id);
    },
  },
};
</script>
