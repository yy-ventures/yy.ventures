<template>
  <div id="who-we-are">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Who We Are
        </h3>

        <div class="uk-grid-match  uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-right">
              YY Ventures is a social business company created in partnership with 'Yunus Centre', the global think tank for Social Business founded by Nobel laureate Professor Muhammad Yunus; to build, accelerate and invest in social businesses. 
            </p>
            <p class="text-right">
              Binding the world with the spirit of social business and innovation; we are the weavers of today’s social business world. As we knit through the gaps among people, groups, and organizations, we connect thoughts, ideas, and minds; opening doors to collective growth and realizing the essence of a truly global village. 
            </p>
          </div>
          <div>
            <p class="text-left">
              Our social business investment is an encouragement and support that we can offer to the people willing to be the agents of change, a change we collectively envision. Our social businesses use entrepreneurial capacity and innovative means to achieve social and environmental objectives that have a sustained impact. These companies are actively working with global agendas such as SDGs, with their sustainable model and impactful objectives, they spill over into new and promising partnerships, initiatives, ideas, and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#who-we-are {
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
