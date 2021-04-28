<template>
  <div id="home-video">
    <div class="uk-cover-container" uk-height-viewport="offset-top: true">
      <video
        id="featurevideo"
        src="~assets/video/Hero_converted.mp4"
        poster="images/hero-video.jpg"
        onclick="this.paused? this.play() : this.pause()"
        @click="playpause()"
        loop
        cover
        data-cursor-hover
        @mouseover="mouseOver"
        @mouseleave="mouseLeave"
      ></video>
      <div 
        class="playpause"
        v-bind:style="{ opacity: changeOpacity }" 
        v-if="paused"
                >
      </div>
    </div>
  </div>
</template>

<script>
//
export default {
  data() {
    return {
      video: null,
      paused: true,
      opacity: .5
    }
  },
  computed: {
    changeOpacity: function(){
      return this.opacity;
    },
  },
  methods: {
    playpause() {
      if (this.paused) {
        this.paused = false
      } else this.paused = true
    },
    mouseOver: function(){
      this.opacity = 1;
    },
    mouseLeave: function(){
      this.opacity = .5;
    }
  }
}
</script>

<style lang="less">
#home-video {
  cursor: pointer;
  video {
    width: 100%;
  }
  .playpause {
    pointer-events: none;
    background-image: url('~assets/images/play-pause.png');
    background-repeat: no-repeat;
    width: 14%;
    height: 14%;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    margin: auto;
    background-size: contain;
    background-position: center;
    
  }
  .playpause:hover {
    
  }
}
</style>
