<template lang="pug">
main
  Navigation
  nuxt
  Footer
</template>

<script>
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
// import links from '../assets/data/links.json';
import {
  toggle_navigation_on_scroll,
  click_listener,
  doms,
  update_scroll,
  add_class_on_focus,
} from '@/assets/scripts/dom_utils';

export default {
  components: {
    Navigation,
    Footer,
  },
  mounted: () => {
    toggle_navigation_on_scroll();
    click_listener('nav .link', () => {
      doms('nav input').forEach((dom) => {
        dom.checked = false;
      });
    });
    add_class_on_focus({
      ['.faded_out']: 'fade_in',
    });
  },
};
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI'; */
  font-family: 'Graphik', sans;
  line-height: 1.6;
  /* Roboto, 'Helvetica Neue', Arial, sans-serif; */
  /* font-size: 16px; */
  /* word-spacing: 1px; */
  /* -ms-text-size-adjust: 100%; */
  /* -webkit-text-size-adjust: 100%; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* -webkit-font-smoothing: antialiased; */
  /* box-sizing: border-box; */
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
