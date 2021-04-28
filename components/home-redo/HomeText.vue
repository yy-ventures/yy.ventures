<template>
  <div id="home-text">
    <div
      class="uk-section text-section"
      uk-scrollspy="cls:text-section-narrow; hidden:false;  delay:500; repeat:false"
    >
      <div class="uk-container uk-container-large">
        <!-- <h3 class="section-heading">Our Vision</h3> -->

        <div class="uk-flex text-section-inner">
          <div class="uk-width-1-2@m">
            <div class="value-points">
              <div class="point-text">
                <div id="poverty" v-if="this.count >= 0">
                  <vue-typed-js
                    :strings="['We envision a more']"
                    @onComplete="countUp()"
                    :typeSpeed="100"
                    :showCursor="false"
                  >
                    <span class="typing"></span>
                  </vue-typed-js>
                </div>
                <div id="unemployment" v-if="this.count >= 1">
                  <vue-typed-js
                    :strings="['equitable and just']"
                    @onComplete="countUp()"
                    :typeSpeed="100"
                    :showCursor="false"
                  >
                    <span class="typing"></span>
                  </vue-typed-js>
                </div>
                <div class="carbon" v-if="this.count >= 2">
                  <vue-typed-js
                    :strings="['world']"
                    @onComplete="countUp()"
                    :typeSpeed="100"
                    :showCursor="false"
                  >
                    <span class="typing"></span>
                  </vue-typed-js>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-width-1-2@m">
            <p class="text-light">
              We believe that a more equitable and just world is possible if we
              foster ‘Social Business’ while leveraging young people’s talents
              and ideas.
            </p>

            <p class="text-light">
              Endless possibility dies the moment when aspiring social
              entrepreneurs back off from their incredible ideas because of
              being clueless on how to materialize them or due to lack of access
              to resources like capital. Without needed resources and guidance,
              innovation is barred. This is unacceptable to us!
            </p>

            <p class="text-light">
              We invest in socially and environmentally conscious entrepreneurs
              who are solving crucial issues of our times benefitting the
              underserved communities. We are building our first social business
              fund to invest in pre-seed and seed-stage social businesses and
              actively assist portfolio companies navigating the path to notable
              social business funds, venture investors, partners, and clients.
            </p>

            <p class="text-light">
              Our journey started with the creation of Bangladesh’s first social
              business incubator YY Goshthi in 2016 that has backed 54
              entrepreneurs to date who have improved the lives of 107,756
              Bangladeshis. By 2030 we want to improve the lives of two million
              people by investing in social businesses in emerging countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTypedJs } from 'vue-typed-js';
export default {
  data() {
    return {
      count: -1,
      repeat: false,
    };
  },
  methods: {
    countUp() {
      this.count++;
      if (this.count > 3 && this.repeat) {
        setTimeout(() => {
          this.count = -1;
        }, 1000);

        setTimeout(() => {
          this.count = 0;
        }, 1000);
      }
    },
  },
  mounted() {
    UIkit.util.on('#home-text', 'inview', () => {
      this.count = 0;
    });
  },
  components: {
    VueTypedJs,
  },
};
</script>

<style lang="less">
#home-text {
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
      font-size: 40px;
    }
  }
  .text-bold {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 600;
    font-size: 25px;
  }
  .text-light {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 400;
    font-size: 16px;
    padding: 5px;
  }
  .value-points {
    margin-left: -30px;
    .point-text {
      span {
        font-size: 40px;
        line-height: 55px;
        font-weight: 900;
        display: block;
        color: #3a3b3a;
        padding-left: 30px;
      }
    }
  }
}
</style>
