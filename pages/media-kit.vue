<template>
  <div id="media-page">
    <media-hero></media-hero>
    <who-we-are></who-we-are>
    <sub-brands></sub-brands>
    <asset-download></asset-download>
    <follow-socials></follow-socials>
  </div>
</template>

<script>
import MediaHero from '~/components/media-kit/MediaHero';
import WhoWeAre from '~/components/media-kit/WhoWeAre';
import SubBrands from '~/components/media-kit/SubBrands';
import AssetDownload from '~/components/media-kit/AssetDownload';
import FollowSocials from '~/components/media-kit/FollowSocials';

export default {
  components: {
    MediaHero,
    WhoWeAre,
    SubBrands,
    AssetDownload,
    FollowSocials,
  },
};
</script>
