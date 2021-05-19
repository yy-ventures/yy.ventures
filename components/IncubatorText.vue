<template>
  <div id="about-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Created for early-stage social business entrepreneurs
        </h3>

        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-bold">
              YY Goshthi is a social business incubator by YY Ventures that
              helps socially & environmentally conscious entrepreneurs to launch
              their minimum viable product and raise the needed seed capital.
            </p>
          </div>
          <div>
            <p class="text-light">
              YY Goshthi was created in 2016 as the first Social Business
              incubator in Bangladesh that offers rapid, intense, and immersive
              education to early-stage Social Businesses. As the prime social
              business incubator in Bangladesh YY Goshthi’s goal is to support
              young social entrepreneurs while they transform their communities
              by building social businesses.
            </p>
            <p class="text-light">
              We empower social entrepreneurs with world-class training,
              mentoring, community, coworking space, and access to investors,
              enabling them to navigate their way towards launching a minimum
              viable product and raising the needed seed capital. We have
              prominently incubated 64 startups, notably Avijatrik Tourism,
              Wizkit, GARBAGEMAN, Broque, TransEnd, Max TapWater, AmarLab that
              have been working to solve some of the wicked social challenges.
              We are one of the most ‘Globally Connected’ local ecosystems in
              Bangladesh that are driven by social and environmental
              consciousness.
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
