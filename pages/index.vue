<template lang="pug">
  #home_page
    home-hero
    Vision
    //- picture-grid(:data="latest")
    //- SolidWaste
    Quote
    News
    //- Latest
    //- portfolio-slider
    //- home-portfolio.faded_out
    //- Video
    //- home-video.faded_out
    pre-footer
    HomeBrands
</template>

<script>
import HomeHero from '~/components/home-redo/HomeHero';
import Vision from '~/components/Vision';
import HomePortfolio from '~/components/home-redo/HomePortfolio';
import Quote from '~/components/Quote';
import HomeVideo from '~/components/home-redo/HomeVideo';
import PreFooter from '~/components/PreFooter';
import PortfolioSlider from '~/components/PortfolioSlider';
import Video from '~/components/Video';
import PictureGrid from '~/components/PictureGrid';
import Latest from '~/components/Latest';
import SolidWaste from '~/components/SolidWaste';
import HomeBrands from '~/components/HomeBrands.vue';
import News from '~/components/news/News.vue';

import {
  toggle_class_on_focus,
  update_scroll,
  run_function_on_focus,
  typewriter,
  dom,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

import latest from '~/assets/data/latest.json';

export default {
  components: {
    HomeHero,
    Vision,
    HomePortfolio,
    Video,
    Quote,
    HomeVideo,
    PictureGrid,
    PortfolioSlider,
    Latest,
    SolidWaste,
    PreFooter,
    HomeBrands,
    News,
  },

  data: () => ({
    latest,
  }),

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
    )(dom('.write'));

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

<style lang="sass" scoped>
// #home-hero
//   .hero-container
//       h1
//         font-size: clamp(30px, 5vw, 95px) !important
//         margin: 5px !important
//       .write
//         font-size: clamp(24px, 7vw, 95px) !important
</style>
