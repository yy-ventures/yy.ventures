<template>
  <div id="media-page">
    <!-- <dark-nav></dark-nav> -->
    <media-hero></media-hero>
    <who-we-are></who-we-are>
    <sub-brands></sub-brands>
    <asset-download></asset-download>
    <follow-socials></follow-socials>
    <!-- <about-footer></about-footer> -->
  </div>
</template>

<script>
import DarkNav from '~/components/DarkNav';
import MediaHero from '~/components/media-kit/MediaHero';
import WhoWeAre from '~/components/media-kit/WhoWeAre';
import SubBrands from '~/components/media-kit/SubBrands';
import AssetDownload from '~/components/media-kit/AssetDownload';
import FollowSocials from '~/components/media-kit/FollowSocials';
// import AboutFooter from '~/components/about-redo/AboutFooter';

export default {
  components: {
    DarkNav,
    MediaHero,
    WhoWeAre,
    SubBrands,
    AssetDownload,
    FollowSocials,
    // AboutFooter,
  },
};
</script>
