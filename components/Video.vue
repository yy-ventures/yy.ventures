<template lang="pug">
#video
  video(
    poster="images/hero-video.jpg"
    src="~assets/video/Hero_converted.mp4"
    loop
    controls
  )
</template>

<style lang="sass" scoped>
#video
  margin: 50px 0
  @media (min-width: 601px)
    width: 75%
    height: 500px
    margin: 50px auto

  video
    width: 100%
    height: 100%
    @media (min-width: 601px)
      object-fit: cover
</style>
