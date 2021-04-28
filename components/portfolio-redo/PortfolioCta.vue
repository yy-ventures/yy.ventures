<template>
  <div id="portfolio-cta">
    <div class="uk-container hero-container">
      <div class="hero-text-container">
        <h1 class="uk-text-center@m cta-text">
          <div><span>Let us know if you are</span></div>
          <div>
            <span class="background-accent"
              >a social business entrepreneur or investor and 
              <span
                class="inner-span"
                uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:1000; repeat:true"
                >you want to collaborate</span
              ></span
            >
          </div>
        </h1>
        <div class="uk-text-center arrow-image" data-cursor-hover>
          <img src="~assets/images/arrow-shape.png" alt="" class="cta-img" @click='showContactForm' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      contactFormDisplay: false
    }
  },
  methods: {
    showContactForm(){
      this.contactFormDisplay = true;
      this.$emit('ctaclicked', this.contactFormDisplay);
    }
  }
}
</script>

<style lang="less" scoped>
@small-down: ~'only screen and (max-width: 480px)';
#portfolio-cta {
  .uk-cover-container {
    overflow: visible;
  }
  .hero-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .hero-text-container {
    .cta-text {
      font-family: 'Graphik';
      font-weight: bold;
      font-size: 50px;
      line-height: 50px;
      @media @small-down {
        font-size: 40px;
        line-height: 60px;
      }
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
          bottom: 0px;
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
    }
    .arrow-image {
      padding-top: 80px;
    }
    img {
      max-width: 100px;
    }
    img:hover{
      position: relative;
      animation: moveimg .4s;
      animation-timing-function: ease-in;
    }
    @keyframes moveimg {
      from {left: 5px;}
      to {left: 10px;}
    }
    padding-left: 40px;
    h1 {
      margin-top: 10px;
      color: #3a3b3a;
      font-size: 110px;
      line-height: 100px;

      margin-bottom: -45px;
      @media @tablet-down {
        font-size: 80px;
        line-height: 80px;
        margin-bottom: -35px;
      }
      @media @small-down {
        font-size: 50px;
        line-height: 50px;
        padding-left: 10px;
        margin-bottom: -25px;
      }
    }
  }
}
</style>
