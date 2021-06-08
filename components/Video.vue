<template lang="pug">
#video
  video(
    preload="none"
    poster="images/video_poster.webp"
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
    &:focus
      outline: none
    @media (min-width: 601px)
      object-fit: cover
      object-position: 30% 50%
</style>
