<template>
  <div id="about-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Take your social impact agenda forward with us
        </h3>

        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-bold">
              YY Ventures offers a full range of corporate services including
              incubator/accelerator design & management, venture building,
              impact measurement, and investment readiness.
            </p>
          </div>
          <div>
            <p class="text-light">
              We help family foundations, impact funds, corporations,
              development agencies, and government agencies to use the powerful
              model of Social Business to take their innovation and social
              impact agenda forward.
            </p>
            <p class="text-light">
              We offer complete and end-to-end acceleration design and
              management support for setting up of incubation/accelerator
              program, initiated by a development agency, corporate, or
              government to be the agent of change and promote Social Business.
              We are proud to be consultants to the UNDP’s Digital Khichuri
              Challenge and Social Business such as AmarLab, GARBAGEMAN and
              Powwater, Inc. We also support Social Business and entrepreneurs
              to navigate impact management metrics, manage the investment
              portfolio and generate insights with the intent to contribute to
              the achievement of measurable social, economic and environmental
              objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#about-text {
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
    color: #d0d2d3;
    font-family: 'Graphik';
    font-weight: 900;
    font-size: 60px;
    @media @small-down {
      font-size: 30px;
      line-height: 50px;
    }
  }
  .text-bold {
    color: #d0d2d3;
    font-family: 'Graphik';
    font-weight: 600;
    font-size: 25px;
    @media @small-down {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .text-light {
    color: #d0d2d3;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 16px;
    @media @small-down {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
