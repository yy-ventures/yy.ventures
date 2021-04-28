<template>
  <div id="about-featured">
    <div class="uk-section uk-section-xsmall uk-padding-remove-vertical">
      <div class="uk-inline">
        <img src="~assets/images/about-dr-yunus.jpg" alt="" />
        <div class="uk-position-large uk-position-center-left text-container">
          <div>
            <span
              >I'm
              <span
                class="inner-span"
                uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:400; repeat:true"
                >encouraging</span
              >
              young</span
            >
          </div>
          <div><span>people to become</span></div>
          <div><span>social business</span></div>
          <div><span>entrepreneurs and</span></div>
          <div>
            <span
              ><span
                class="inner-span"
                uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:800; repeat:true"
                >contribute</span
              >
              to the</span
            >
          </div>
          <div><span>world, rather than just</span></div>
          <div><span>making money.</span></div>

          <div class="bottom-text">
            <div><span>Professor Muhammad Yunus</span></div>
            <div><span>Nobel Peace Prize Winner</span></div>
            <div><span>Founder of Grameen Bank</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@large-down: ~'only screen and (max-width: 1024px)';
@tablet-down: ~'only screen and (max-width: 850px)';
@medium-down: ~'only screen and (max-width: 750px)';
@small-down: ~'only screen and (max-width: 480px)';
#about-featured {
  .text-container {
    padding-left: 40px;
    span {
      font-size: 60px;
      line-height: 65px;
      font-weight: 900;
      color: #ffffff;
      @media @large-down {
        font-size: 40px;
        line-height: 40px;
      }
      @media @tablet-down {
        font-size: 28px;
        line-height: 28px;
      }
      @media @medium-down {
        font-size: 16px;
        line-height: 0;
      }
      @media @small-down {
        font-size: 12px;
        line-height: 0;
      }
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
        bottom: 5px;
        background: #efd30a;
        height: 15px;
        transition-property: width;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        @media @small-down {
          bottom: 0px;
          height: 5px;
        }
      }
    }
    .inner-span-animate {
      &::after {
        left: 0;
        right: auto;
        width: 100%;
      }
    }
    .bottom-text {
      padding-top: 100px;
      @media @tablet-down {
        padding-top: 50px;
      }
      @media @medium-down {
        padding-top: 50px;
      }
      @media @medium-down {
        padding-top: 5px;
      }
      span {
        font-size: 25px;
        line-height: 30px;
        font-weight: 400;
        color: #ffffff;
        @media @tablet-down {
          font-size: 20px;
          line-height: 20px;
        }
        @media @medium-down {
          font-size: 14px;
          line-height: 0;
        }
        @media @small-down {
          font-size: 10px;
          line-height: 0;
        }
      }
    }
  }
}
</style>
