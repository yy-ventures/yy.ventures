<template>
  <div id="company-overview">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">Company Description</h3>

        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-right">
              YY Ventures is an incubation and investment Social Business founded in partnership with 'Yunus Centre', the global think tank for Social Business created by Nobel Peace Prize Winner Professor Muhammad Yunus to advance the growth of social businesses. 
            </p>
          </div>
          <div>
            <p class="text-left">
             We believe that a more equitable and just world is possible if we foster ‘Social Business’ while leveraging young people’s talents and ideas. 
            </p>
            <p class="text-left">
              Our incubation programs and investments are an encouragement and support that we can offer to the people willing to be the agents of change, a change we collectively envision. Our subsidiaries and portfolio companies use entrepreneurial capacity and innovative means to achieve social and environmental objectives with a sustained impact. These companies are actively working with global agendas such as SDGs; with their sustainable model and impactful objectives, they spill over into new and promising partnerships, initiatives, ideas, and innovation. 
            </p>
            <p class="text-left">YY Ventures and its subsidiaries leverage the 40+ years of ‘Grameen’ experience while undertaking major activities like - incubation program design & management, investment, community & coworking space, creative design and web services, hybrid/physical events and venture building. </p>
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
    font-weight: 700;
    font-size: 22px;
    line-height: 1.5;
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
