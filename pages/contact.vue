<template>
  <div id="contact-page">
    <contact-hero></contact-hero>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactHero from "~/components/contact/ContactHero";
import ContactForm from "~/components/contact/ContactForm";

export default {
  components: {
    ContactHero,
    ContactForm,
  },
};
</script>
