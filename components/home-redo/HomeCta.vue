<template>
  <div id="home-cta">
    <div class="uk-container hero-container">
      <div class="hero-text-container">
        <h1 class="uk-text-center@m cta-text">
          <div><span>Let us know if you are</span></div>
          <div>
            <span class="background-accent"
              ><span class="inner-span"
                >a social business entrepreneur or investor and you want to collaborate</span
              ></span
            >
          </div>
        </h1>
        <div class="uk-text-center arrow-image" data-cursor-hover>
          <nuxt-link to="contact"><img src="~assets/images/arrow-shape.png" alt="" /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@small-down: ~'only screen and (max-width: 480px)';
#home-cta {
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
        line-height: 40px;
      }
      .inner-span {
        height: 50%;
        background: linear-gradient(to top, #efd30a 40%, transparent 0);
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
