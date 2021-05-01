<template>
  <div id="company-overview">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Company Description
        </h3>

        <div class="uk-grid-match  uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-right">
              YY Ventures Limited is a social business company founded in Bangladesh to build, incubate and invest in social businesses that are creating a world of three zeros- zero poverty, zero unemployment and zero net carbon emission.
            </p>
          </div>
          <div>
            <p class="text-left">
Our journey started with the creation of YY Goshthi in 2016 when we decided to create our jobs and for our friends, take care of our food and for our families and share whatever resources we had to help our entrepreneurial friends start their social businesses. In four years, 60+ entrepreneurs from our Goshthi (tribe) has improved the lives of 100,000+ Bangladeshis. By 2030 we want to improve the lives of two million people by backing socially and environmentally conscious entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#company-overview {
  margin-top: 40px;
  .text-section {
    background: #f1f2f2;
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
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 900;
    font-size: 60px;
    @media @small-down {
      font-size: 30px;
      line-height: 50px;
    }
  }
  .text-right {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    @media @small-down {
      font-size: 16px;
      line-height: 24px;
    }
  }
  .text-left {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    @media @small-down {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
