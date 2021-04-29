<template lang="pug">
  #home_page
    home-hero
    Vision
    portfolio-slider
    //- home-portfolio.faded_out
    Quote
    home-video.faded_out
    pre-footer
</template>

<script>
import HomeHero from '~/components/home-redo/HomeHero';
import Vision from '~/components/Vision';
import HomePortfolio from '~/components/home-redo/HomePortfolio';
import Quote from '~/components/Quote';
import HomeVideo from '~/components/home-redo/HomeVideo';
import PreFooter from '~/components/PreFooter';
import PortfolioSlider from '~/components/PortfolioSlider';

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
    HomeHero,
    Vision,
    HomePortfolio,
    Quote,
    HomeVideo,
    PortfolioSlider,
    PreFooter,
  },
  mounted: () => {
    update_scroll();
    toggle_class_on_focus({
      ['.highlight']: 'scale',
      // ['#quote .line_1']: 'reel_right',
      // ['#quote .line_2']: 'reel_left',
    });

    typewriter(
      ['Reality', 'Society', 'World', 'Way of Doing Business'],
      100,
      1000
    )(dom('.typewriter'));

    add_class_on_focus({
      ['.faded_out']: 'fade_in',
      ['#vision']: 'scale_down',
      // ['#vision article .h2:first-of-type']: 'type__l1',
      // ['#vision article .h2:nth-of-type(2)']: 'type__l2',
      // ['#vision article .h2:nth-of-type(3)']: 'type__l3',
    });
  },
};
</script>
