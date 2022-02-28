<template>
  <div id="portfolio-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Financing early-stage Social Businesses that are creating a world of three zeros
        </h3>

        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-bold">
              YY Ventures is on a mission to support socially and environmentally conscious entrepreneurs to ensure zero carbon emission, zero wealth concentration by ending poverty and zero unemployment by unleashing entrepreneurship in all.
            </p>
          </div>
          <div>
            <p class="text-light">
              YY Ventures invests in early-stage, untested Social Businesses that are solving social and environmental challenges in overlooked communities in Bangladesh and actively assist portfolio companies in navigating the path to notable venture investors, partners, and clients. We use our own capital and philanthropic money to finance promising Social Businesses where in most of the cases we are the first investors. Apart from capital, we support our ventures in vision setting, creating theory of change, and measuring & managing impact.
            </p>
            <p class="text-light">
              We are currently raising money for our first venture fund to finance early-stage Social Businesses that are innovating across broad categories — education, healthcare, technology access, sports, environment, tourism and gender equality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#portfolio-text {
  margin-top: 40px;
  .text-section {
    background: #3a3b3a;
    transition: margin 0.5s;
    transition-timing-function: ease-in;
    margin: 0px;
    .text-main {
      width: 85vw;
      @media @small-down {
        width: 80vw;
      }
    }
  }
  .text-section-narrow {
    margin: 80px 40px;
    @media @small-down {
      margin: 60px 30px;
    }
  }

  .section-heading {
    // color: #d0d2d3;
    color: white;
    font-family: 'Graphik';
    font-weight: 900;
    // font-size: 80px;
    font-size: calc(24px + 3vw);
    @media @small-down {
      // font-size: 40px;
      // line-height: 70px;
    }
  }
  .text-bold {
    color: #fff;
    font-family: 'Graphik';
    font-weight: 700;
    font-size: 24px;
    line-height: 1.1;
    @media @small-down {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .text-light {
    color: #fff;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 18px;
    @media @small-down {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
