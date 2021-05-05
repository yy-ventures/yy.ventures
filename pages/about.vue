<template>
  <div id="about-page" data-cursor-mix-blend-mode="substract">
    <about-hero></about-hero>
    <about-text></about-text>
    <about-values></about-values>
    <!-- <about-featured></about-featured> -->
    <Featured></Featured>
    <!-- <about-team></about-team> -->
    <Staff :staff="staff"></Staff>
    <!-- <about-partner></about-partner> -->
    <!-- <Partners :partners="partners" class="faded_out"></Partners> -->
    <!-- <Partner :data="incubator_partners"></Partner> -->
  </div>
</template>

<script>
import AboutHero from '~/components/about-redo/AboutHero';
import AboutText from '~/components/about-redo/AboutText';
import AboutValues from '~/components/about-redo/AboutValues';
import AboutFeatured from '~/components/about-redo/AboutFeatured';
import AboutTeam from '~/components/about-redo/AboutTeam';
import AboutPartner from '~/components/about-redo/AboutPartner';

import Staff from '~/components/Staff';
import Partners from '~/components/Partners';
import Partner from '~/components/Partner';
import Featured from '~/components/Featured';

import partners from '~/assets/data/partners.json';
import incubator_partners from '~/assets/data/incubator_partners.json';
import staff from '~/assets/data/staff.json';

import {
  add_class_on_focus,
  toggle_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    AboutHero,
    AboutText,
    AboutValues,
    AboutFeatured,
    AboutTeam,
    AboutPartner,
    Partners,
    Partner,
    Staff,
    Featured,
  },
  data: () => ({
    partners,
    incubator_partners,
    staff,
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
  a:nth-of-type(1)
    width: 300px !important
  // a:nth-of-type(2)
  //   width: 150px
  // a:nth-of-type(4)
  //   width: 200px
</style>
