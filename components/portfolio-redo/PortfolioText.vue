<template>
  <div id="portfolio-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large">
        <h3 class="section-heading">Envisioning a world of three zeros</h3>

        <div
          class="uk-grid-match  uk-child-width-1-2@m text-section-inner"
          uk-grid
        >
          <div>
            <p class="text-bold">
              We back socially and environmentally conscious entrepreneurs who
              fight poverty, unemployment and carbon emission.
            </p>
          </div>
          <div>
            <p class="text-light">
              YY Ventures is a social business company founded in Bangladesh to
              build, accelerate and invest in social businesses that are
              creating a world of three zeros- zero poverty, zero unemployment
              and zero carbon emission. Endless possibility dies the moment when
              aspiring social entrepreneurs back off from their incredible ideas
              because of being clueless on how to materialise them or due to
              lack of access to resources like capital. Without needed resources
              and guidance, innovation is barred. This is unacceptable to us.
            </p>

            <p class="text-light">
              Our journey started with the creation of YY Goshthi in 2016 when we
              decided to create our jobs and for our friends, take care of our
              food and for our families and share whatever resources we had to
              help our entrepreneurial friends start their social businesses. In
              four years, 36 youth from our goshti (tribe) has created 1,108
              jobs and improved the lives of 80,819 Bangladeshis. By 2030 we
              want to improve the lives of two million people by backing social
              and environmental consciousness driven entrepreneurs.
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
    background: #f1f2f2;
    transition: margin 0.5s;
    transition-timing-function: ease-in;
    margin: 0px;
    .text-section-inner {
      width: 85vw;
    }
  }
  .text-section-narrow {
    margin: 80px 40px;
  }
  .section-heading {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 900;
    font-size: 60px;
  }
  .text-bold {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 600;
    font-size: 25px;
  }
  .text-light {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
