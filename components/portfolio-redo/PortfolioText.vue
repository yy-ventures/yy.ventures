<template>
  <div id="portfolio-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large">
        <h3 class="section-heading">Financing Early Stage Social Businesses that are building a world of three zeros</h3>

        <div
          class="uk-grid-match  uk-child-width-1-2@m text-section-inner"
          uk-grid
        >
          <div>
            <p class="text-bold">
              YY Ventures invests in socially, and environmentally conscious entrepreneurs working towards a world of three zeros- zero net carbon emission, zero wealth concentration for ending poverty, and zero unemployment by unleashing entrepreneurship in all.
            </p>
          </div>
          <div>
            <p class="text-light">
              We invest in pre-seed and seed stage companies and actively assist portfolio companies in navigating the path to notable venture investors, partners, and clients. Our investment creates access to employment opportunities at a fair market price and ensures competency in the job market through skills and training development. We aim to achieve sustainable livelihood in developing communities, ensuring sufficiency and people’s connection with the community. 
            </p>

            <p class="text-light">
              Our investment team and portfolio companies offer an opportunity to  philanthropists, government agencies and family foundations to turn their charity into sustainable investments.
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
    font-size: 20px;
  }
  .text-light {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
