<template>
  <div id="about-hero">
    <div class="" uk-height-viewport="offset-bottom: 0">
      <div class="uk-container hero-container">
        <div class="hero-text-container uk-position-center-left">
          <h1 class="hero_text">
            <span>Take Your Social Impact Agenda</span>
            <span class="background-accent"
              ><span
                class="inner-span"
                uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:1000; repeat:true"
                >Forward With Us</span
              ></span
            >
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//uk-scrollspy="target: > span; cls: uk-animation-slide-left; delay: 500; repeat:true;"
export default {};
</script>

<style lang="less">
#about-hero {
  background-image: url('~assets/svg/about-hero-bg.svg');
  background-size: cover;
  background-position: right;
  .uk-cover-container {
    overflow: visible;
  }
  .hero-container {
    padding-top: 15%;
    padding-bottom: 15%;
  }
  .hero-text-container {
    .inner-span {
      display: inline;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        z-index: -1;
        right: 0;
        width: 0;
        bottom: 10px;
        background: #efd30a;
        height: 25px;
        transition-property: width;
        transition-duration: 1s;
        transition-timing-function: ease-in;
      }
    }
    .inner-span-animate {
      &::after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }

    img {
      max-width: 100px;
    }
    /* padding-left: 80px; */
    padding: 25px;
    h1 {
      /* margin-top: 10px; */
      color: #3a3b3a;
      /* font-size: 80px !important; */
      /* line-height: 120px; */
      line-height: 1.1;
      text-transform: capitalize;

      @media @tablet-down {
        /* font-size: 60px !important; */
        /* line-height: 80px; */
      }
      @media @small-down {
        /* font-size: 40px !important; */
        /* line-height: 50px; */
      }

      /* span:first-of-type {         */
      /*   display: block !important; */
      /* }                            */
    }
  }
}
</style>
