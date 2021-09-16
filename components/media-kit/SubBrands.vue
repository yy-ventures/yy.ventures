<template>
  <div id="sub-brands" class="uk-section">
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="media-container-header" uk-grid>
          <h1 class="inner-span" uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:1000; repeat:true">Our Brands & Subsidiaries</h1>
        </div>
        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img
              src="/images/logos/yy_goshthi.png"
              width=""
              height=""
              alt=""
              uk-img
            />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                YY Goshthi was created in 2016 as the first independent Social
                Business incubator of Bangladesh. We are established in partnership with Nobel Laureate
                Professor Muhammad Yunus to build, accelerate, and invest in
                Social Businesses. Our four-month-long program is designed by
                Social Business leaders and investors to help early-stage social
                entrepreneurs be ready to launch their minimum viable product
                and raise the needed seed capital. In four years, 64 youth from
                our Goshthi (family) has improved the lives of 150, 633
                Bangladeshis. Now we want to change the lives of a million!
              </p>
            </div>
          </div>
        </div>

        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img src="/logos/yy_studios.png" width="" height="" alt="" uk-img />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                YY Studio helps socially and environmentally conscious
                organizations take their impact agenda forward by utilizing the
                power of design and technology. We are visionary creators
                dedicated to developing bespoke creative solutions to meet the
                needs of our clients. We cater a wide range of technical and
                communication services to both local and international markets.
              </p>
            </div>
          </div>
        </div>

        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img src="/logos/impact_hub_logo.png" width="" height="10" alt="" uk-img />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                Impact Hub Dhaka brings together entrepreneurs, enablers, young talents and professionals from all across Bangladesh to create a vibrant community. We believe in creating a Bangladesh where everyone thrives when entrepreneurial, compassionate and committed individuals work towards a shared purpose. Impact Hub Dhaka is a part of a global network, offering the local experience of a global movement.
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img src="/logos/sbys.png" width="" height="" alt="" uk-img />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                The Social Business Youth Summit (SBYS) is a YY Ventures Ltd
                project, it is an attempt to gather and plunge youth from all
                over the globe into the world of Social Business via learning
                from and interacting with Social Business experts. Despite the
                disruption in day-to-day activities, SBYS believes it is time
                for innovation through greater connectivity both virtually and
                in person. SBYS seems to present a seamless networking
                opportunity through a fusion of face-to-face and digital
                meetings, varied investment, and networking opportunities,
                alongside inspiring knowledge sessions and conversations.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@large-down: ~"only screen and (max-width: 950px)";
@tablet-down: ~"only screen and (max-width: 800px)";


.media-container-header{
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
        bottom: 0;
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
#sub-brands {
  .company-logo-section {
    padding-left: 135px;
    @media @large-down {
      padding-left: 35px;
    }
    img {
      /* width: 25vw; */
      width: auto;
      /* height: auto; */
      margin-top: 12px;
    }
  }
  #studio {
    width: 500px !important;
  }
  .company-details-section {
    .company-name {
      font-size: 55px;
      font-weight: bold;
      font-family: "Graphik";
      color: #3a3b3a;
      margin-bottom: 20px;
    }
    .company-info {
      font-size: 18px;
      font-weight: bold;
      font-family: "Graphik";
      color: #3a3b3a;
      margin-top: 20px;
      p {
        font-weight: 300;
      }
    }
  }
}
</style>
