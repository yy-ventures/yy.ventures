<template lang="pug">
#partnernships
  partnerships-hero
  Programs
  Partner(:data="partnerships_partners")
  //- Marquee(:data="partnerships_partners")
  lets-talk
</template>

<script>
// import HomeHero from '~/components/home-redo/HomeHero';
import LetsTalk from '~/components/partnerships/LetsTalk';
import Partner from '~/components/Partner';
import Programs from '~/components/Programs';
import Marquee from '~/components/Marquee';
import PartnershipsHero from '~/components/PartnershipsHero';

import partnerships_partners from '~/assets/data/partnerships_partners.json';

import {
  toggle_class_on_focus,
  update_scroll,
  run_function_on_focus,
  typewriter,
  dom,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    Partner,
    Programs,
    Marquee,
    PartnershipsHero,
    LetsTalk,
  },

  data: () => ({
    partnerships_partners,
  }),

  mounted: () => {
    toggle_class_on_focus({
      ['.highlight']: 'scale',
    });

    add_class_on_focus({
      ['.faded_out']: 'fade_in',
    });
  },
};
</script>

<style lang="sass">
#partner
  .partner_container
    &:nth-of-type(2)
      width: 80px
    &:nth-of-type(6)
      width: 200px
</style>
