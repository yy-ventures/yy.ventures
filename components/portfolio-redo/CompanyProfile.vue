<template>
  <div id="company-profile" class="uk-section">
    <div class="uk-section">
      <div class="uk-container">
        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img :src="portfolio.logo" width="" height="" alt="" uk-img />
            <div class="social-media-heading">
              <h2>Visit</h2>
            </div>
            <div class="social-media-icons">
              <a
                :href="portfolio.website"
                class="uk-icon-button social-icons single-icon"
                uk-icon="link"
              ></a>
              <a
                :href="portfolio.facebook"
                class="uk-icon-button social-icons single-icon"
                uk-icon="facebook"
              ></a>
              <a
                :href="portfolio.linkedin"
                class="uk-icon-button social-icons single-icon"
                uk-icon="linkedin"
              ></a>
            </div>
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline ">
            <h2 class="company-name">
              {{ portfolio.title }}
            </h2>
<!--             <div class="company-info">
              Founders:
              <span>{{ portfolio.founders }} </span>
            </div> -->
            <div class="company-info">
              Category: <span>{{ portfolio.category }}</span>
            </div>
            <div class="company-info">
              Mission:
              <span>{{ portfolio.mission }}</span>
            </div>
            <div class="company-info">
              Founding Year: <span>{{ portfolio.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <div class="company-featured-image">
          <img :src="portfolio.featured" width="" height="" alt="" uk-img class="uk-align-center" />
        </div>
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container">
        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-text-section" uk-grid>
            <p class="text-bold">
              {{ portfolio.tagline }}
            </p>
          </div>
          <div class="uk-width-2-3@m company-text-section" uk-grid>
            <p class="text-light">
              {{ portfolio.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['portfolio']
}
</script>

<style lang="less" scoped>
@large-down: ~'only screen and (max-width: 950px)';
@tablet-down: ~'only screen and (max-width: 800px)';

#company-profile {
  .company-logo-section {
    padding-left: 135px;
    @media @large-down {
      padding-left: 35px;
    }
    img {
      width: auto;
      height: auto;
      margin-top: 12px;
    }
    .social-media-heading {
      h2 {
        font-size: 20px;
        font-weight: 300;
        font-family: 'Graphik';
        color: #3a3b3a;
      }
    }
    .social-media-icons {
      margin-top: 15px;
      .social-icons {
        display: inline;
        padding-right: 10px;
        background: none;
      }
    }
  }
  .company-details-section {
    .company-name {
      font-size: 55px;
      font-weight: bold;
      font-family: 'Graphik';
      color: #3a3b3a;
      margin-bottom: 20px;
    }
    .company-info {
      font-size: 18px;
      font-weight: bold;
      font-family: 'Graphik';
      color: #3a3b3a;
      margin-top: 20px;
      span {
        font-weight: 300;
      }
    }
  }
  .company-text-section {
    margin-top: 0;
    .text-bold {
      font-size: 25px;
      font-weight: 600;
      font-family: 'Graphik';
      color: #3a3b3a;
      line-height: 32px;
    }
    .text-light {
      font-size: 18px;
      font-weight: 300;
      font-family: 'Graphik';
      color: #3a3b3a;
      line-height: 30px;
    }
  }
}
</style>
