<template>
  <div id="portfolio-ventures" class="uk-section">
    <div class="uk-container">
      <div class="section-title"><h2>Also from YY Ventures</h2></div>
      <div class="portfolio-holder ">
        <div uk-grid>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <nuxt-link to="investments/yygoshti">
              <img
                src="~assets/statics/images/portfolio/yyg-akkie.jpg"
                alt=""
              />
            </nuxt-link>
            <div class="portfolio-title">
              <h3><span>01</span>YY Goshti</h3>
            </div>
          </div>  
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <nuxt-link to="investments/yy-studios">
              <img
                src="~assets/statics/images/portfolio/yystudios.jpg"
                alt=""
              />
            </nuxt-link>
            <div class="portfolio-title">
              <h3><span>02</span>YY Studios</h3>
            </div>
          </div>
                  
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <nuxt-link to="investments/impact-hub">
              <img
                src="~assets/statics/images/portfolio/ihd-view.jpg"
                alt=""
            /></nuxt-link>
            <div class="portfolio-title">
              <h3><span>03</span>Impact Hub Dhaka</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#portfolio-ventures {
  background-color: #3a3a3a;

  .section-title {
    h2 {
      color: #d0d2d3;
      font-family: 'Graphik';
      font-weight: 900;
      font-size: 60px;
    }
  }
  .portfolio-holder {
    margin-bottom: 40px;
    .portfolio-box {
      margin-top: 80px;
    }
    .portfolio-title {
      font-size: ;
      position: absolute;
      bottom: -120px;
      @media @small-down {
        bottom: -90px;
      }

      h3 {
        font-family: 'Graphik';
        color: #d0d2d3;
        font-weight: 900;
        font-size: 16px;
        @media @small-down {
          font-size: 14px;
        }

        span {
          font-size: 150px;
          font-weight: 900;
          font-family: 'Graphik';
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #d0d2d3;
          -webkit-text-fill-color: transparent;
          @media @small-down {
            font-size: 100px;
          }
        }
      }
    }
  }
}
</style>
