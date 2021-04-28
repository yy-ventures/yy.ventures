<template>
  <div id="contact-page">
    <!-- <dark-nav></dark-nav> -->
    <contact-hero></contact-hero>
    <contact-form></contact-form>
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import DarkNav from '~/components/DarkNav';
import ContactHero from '~/components/contact/ContactHero';
import ContactForm from '~/components/contact/ContactForm';
// import AboutFooter from '~/components/about-redo/AboutFooter';
export default {
  components: {
    DarkNav,
    ContactHero,
    ContactForm,
    // AboutFooter,
  },
};
</script>
