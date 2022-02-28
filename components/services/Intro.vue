<template>
  <div id="about-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large text-main">
        <h3 class="section-heading">
          Take your social impact <br> agenda forward with us
        </h3>

        <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
          <div>
            <p class="text-bold">
              YY Ventures offers a full range of corporate services including design and management of innovation programs like incubators, accelerators, innovation challenges, design sprints and venture building.
            </p>
            <p class="text-light">
              We help family foundations, impact funds, corporations, development agencies, and government agencies to use the powerful model of Social Business to take their innovation and social impact agenda forward in the field of entrepreneurship development, reducing poverty and fighting climate change.
            </p>
          </div>
          <div>
            <p class="text-light">
              Our consulting arm offers design and implementation of a range of innovation programs including accelerators, incubators and innovation challenges. Our world-class Accelerator facilitators can help you connect to bankable startups and tailored mentoring opportunities. We have experience in launching & managing 15+ innovation programs for social entrepreneurs in the Asia Pacific and Africa. Our services were trusted by groups like United Nations Development Program, Yunus Centre, Aqua For All, and The Food and Agriculture Organization of the United Nations.
            </p>
            <p class="text-light">
              We systematically bring Social Businesses into existence by means of their own resources. Our venture-building team develops all ideas in-house as we build the core structure and a component of a Social Business from the ground up. We follow a tested protocol from identifying business ideas, building teams to launching products, and helping Social Businesses create their legal and governance structures.
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
    // color: #d0d2d3;
    color: white;
    font-family: 'Graphik';
    font-weight: 900;
    font-size: calc(24px + 3vw);
    @media @small-down {
      // font-size: 40px;
      // line-height: 70px;
    }
  }
  .text-bold {
    color: #fff;
    font-family: 'Graphik';
    font-weight: 500;
    font-size: 25px;
    @media @small-down {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .text-light {
    color: #fff;
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
