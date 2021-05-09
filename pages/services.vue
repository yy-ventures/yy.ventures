<template lang="pug">
#home-page
  services-hero
  Intro
  picture-grid(:data="services")
  Pointer
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
import Pointer from '~/components/services/Pointer';

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
    Pointer,
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
      // ['#intro']: 'scale_down',
    });
  },
};
</script>
<style lang="sass">
.benefits_container
  .h5
    font-size: clamp(12px, 2.1vw, 15px) !important
</style>
