<template lang="pug">
#home-page
  services-hero
  Intro
  //- Services
  picture-grid(:data="services")
  previous-work
  pre-footer
</template>
<script>
import PreFooter from '~/components/services/PreFooter';
import ServicesHero from '~/components/services/ServicesHero';
import Services from '~/components/services/Services';
import PreviousWork from '~/components/services/PreviousWork';
import PictureGrid from '~/components/PictureGrid';
import Intro from '~/components/services/Intro';

import services from '~/assets/data/services.json';

import {
  toggle_class_on_focus,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    Services,
    PreviousWork,
    PreFooter,
    PictureGrid,
    Intro,
    ServicesHero,
  },
  data: () => ({
    services,
  }),
  mounted() {
    toggle_class_on_focus({
      ['.highlight']: 'scale',
    });
    add_class_on_focus({
      ['.faded_out']: 'fade_in',
      ['#intro']: 'scale_down',
    });
  },
};
</script>
<style lang="sass">
.picture_grid
  .benefits_grid
    @media (min-width: 601px)
      grid-template-columns: auto auto !important

    // .benefits_container:first-of-type .h4
    //   line-height: 1

    .benefits_container
      height: auto !important

      .h5
        font-size: clamp(12px, 2vw, 20px) !important
        // padding: 50px !important
</style>
