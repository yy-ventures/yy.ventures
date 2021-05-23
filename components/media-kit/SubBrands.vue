<template>
  <div id="sub-brands" class="uk-section">
    <div class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
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
                YY Goshthi is a brand of YY ventures Ltd that was created in
                2016 as the first independent social business incubator of
                Bangladesh. We are part of YY Ventures Limited that is
                established in partnership with Nobel Laureate Professor
                Muhammad Yunus to build, accelerate, and invest in social
                businesses. Our four-month-long program is designed by social
                business leaders and investors to help early-stage social
                entrepreneurs be ready to launch their minimum viable product
                and raise the needed seed capital. In four years, 54 youth from
                our Goshthi (family) has improved the lives of 107, 756
                Bangladeshis. Now we want to change the lives of a million!
              </p>
            </div>
          </div>
        </div>

        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img src="logos/yy_studios.png" width="" height="" alt="" uk-img />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                YY Studios is a project of YY Ventures Ltd that helps socially
                and environmentally conscious organizations take their impact
                agenda forward by utilizing the power of design and technology.
                We exist to mold design and tech to build and scale digital
                experiences for organizations. We are inspired by the
                forever-changing world of design and innovation where we promise
                never to slow down evolving the customer experience to always
                ensure a strong gravity in the design & tech world. As we go
                forward, our commitment to our clients stays simple; we make
                your imagination better than yesterday as we illustrate your
                brands and design your solutions.
              </p>
            </div>
          </div>
        </div>

        <div class="" uk-grid>
          <div class="uk-width-1-3@m company-logo-section uk-inline" uk-grid>
            <img src="/logos/sbys.png" width="" height="" alt="" uk-img />
          </div>
          <div class="uk-width-2-3@m company-details-section uk-inline">
            <div class="company-info">
              <p>
                The Social Business Youth Summit (SBYS) is a YY Ventures Ltd
                project, it is an attempt to gather and plunge youth from all
                over the globe into the world of social business via learning
                from and interacting with social business experts. Despite the
                disruption in day-to-day activities, SBYS believes it is time
                for innovation through greater connectivity both virtually and
                in person. SBYS seems to present a seamless networking
                opportunity through a fusion of face-to-face and digital
                meetings, varied investment, and networking opportunities,
                alongside inspiring knowledge sessions and conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@large-down: ~'only screen and (max-width: 950px)';
@tablet-down: ~'only screen and (max-width: 800px)';

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
      p {
        font-weight: 300;
      }
    }
  }
}
</style>
