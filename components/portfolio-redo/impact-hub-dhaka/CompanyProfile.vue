<template>
  <div id="company-profile" class="uk-section">
    <div class="uk-section">
      <div class="uk-container">
        <div class="" uk-grid>
          <div
            class="uk-width-1-3@m company-logo-section uk-inline"
            uk-grid
          >
            <img src="~assets/images/logo/impacthub-01.png" width="" height="" alt=""  uk-img>
            <div class="social-media-heading">
              <h2>Visit</h2>
            </div>
            <div class="social-media-icons">
                <a
                  href="https://yygoshti.com"
                  class="uk-icon-button social-icons single-icon"
                  uk-icon="icon: link; ratio: 1.4"
                ></a>
                <a
                  href="#"
                  class="uk-icon-button social-icons single-icon"
                  uk-icon="icon: facebook; ratio: 1.1"
                ></a>
                <a
                  href="#"
                  class="uk-icon-button social-icons single-icon"
                  uk-icon="icon: linkedin; ratio: 1.2"
                ></a>
            </div>
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline ">
            <h2 class="company-name">
              Impact Hub Dhaka
            </h2>
            <div class="company-info">Founders: <span>Unde omnis iste, Natus error sit, Voluptatem accusantium </span></div>
            <div class="company-info">Category: <span>Unde omnis</span></div>
            <div class="company-info">Mission & Vision: <span>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span></div>
            <div class="company-info">Investment Year:  <span>2019</span></div>
          </div>
        </div> 
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <div class="company-featured-image">
          <img src="~assets/images/ihd/ihd-1.jpg" width="" height="" alt=""  uk-img>
        </div>
      </div>
    </div>
    <div class="uk-section">
      <div class="uk-container">
        <div class="" uk-grid>
          <div
            class="uk-width-1-3@m company-text-section"
            uk-grid
          >
            <p class="text-bold">
              Sed ut perspiciatis unde 
              iste natus error sit voluptate
              accusantium doloremque
            </p>
          </div>
          <div
            class="uk-width-2-3@m company-text-section"
            uk-grid
          >
            <p class="text-light">
              Investments, neque porro quisquam est, qui dolvorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea. Investments, neque porro quisquam est, qui dolvorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@large-down: ~'only screen and (max-width: 950px)';
@tablet-down: ~'only screen and (max-width: 800px)';

#company-profile {
  .company-logo-section{
    padding-left: 135px;
      @media @large-down {
        padding-left: 35px;
      }
    img{
      width: auto;
      height: auto;
      margin-top: 12px;
    }
    .social-media-heading{
      h2{
        font-size: 20px;
        font-weight: 300;
        font-family: "Graphik";
        color: #3A3B3A;
      }
    }
    .social-media-icons{
      margin-top: 15px;
      .social-icons{
        display: inline;
        padding-right: 10px;
        background: none;

      }
    }
  }
  .company-details-section{
    .company-name{
      font-size: 55px;
      font-weight: bold;
      font-family: "Graphik";
      color: #3A3B3A;
      margin-bottom: 20px;
    }
    .company-info{
      font-size: 18px;
      font-weight: bold;
      font-family: "Graphik";
      color: #3A3B3A;
      margin-top: 20px;
      span{
        font-weight: 300;
      }
    }
  }
  .company-text-section{
    margin-top: 0;
    .text-bold{
      font-size: 25px;
      font-weight: 600;
      font-family: "Graphik";
      color: #3A3B3A;
      line-height: 32px;
    }
    .text-light{
      font-size: 18px;
      font-weight: 300;
      font-family: "Graphik";
      color: #3A3B3A;
      line-height: 30px;
    }
  }
}
</style>
