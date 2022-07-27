<template>
  <div id="about-values" data-uk-scrollspy="">
    <div class="uk-section text-section" uk-height-viewport="offset-bottom: 0">
      <div class="uk-container uk-container-large">
        <h3 class="section-heading">Our Values</h3>

        <div class="" uk-grid>
          <div class="value-points">
            <div class="point-text">
              <div id="happyness" v-if="this.count >= 0">
                <vue-typed-js :strings="['HappYYness']" @onComplete="countUp()" :typeSpeed="150" :showCursor="false">
                  <span class="typing"></span>
                </vue-typed-js>
              </div>
              <div id="equality" v-if="this.count >= 1">
                <vue-typed-js :strings="['Equity']" @onComplete="countUp()" :typeSpeed="150" :showCursor="false">
                  <span class="typing"></span>
                </vue-typed-js>
              </div>

              <div id="sustainability" v-if="this.count >= 2">
                <vue-typed-js
                  :strings="['Sustainability']"
                  @onComplete="countUp()"
                  :typeSpeed="150"
                  :showCursor="false"
                >
                  <span class="typing"></span>
                </vue-typed-js>
              </div>

              <div class="transparency" v-if="this.count >= 3">
                <vue-typed-js :strings="['Transparency']" @onComplete="countUp()" :typeSpeed="150" :showCursor="false">
                  <span class="typing"></span>
                </vue-typed-js>
              </div>

              <div class="empathy" v-if="this.count >= 4">
                <vue-typed-js :strings="['Empathy']" @onComplete="countUp()" :typeSpeed="150" :showCursor="false">
                  <span class="typing"></span>
                </vue-typed-js>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueTypedJs } from "vue-typed-js";
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
    UIkit.util.on("#about-values", "inview", () => {
      this.count = 0;
    });
  },
  components: {
    VueTypedJs,
  },
};
</script>

<style lang="less">
#about-values {
  height: 900px;
  background-image: url("~assets/svg/about-values-bg.svg");
  background-size: cover;
  background-position: right;
  .section-heading {
    font-size: 60px;
    line-height: 50px;
    font-weight: 900;
    display: block;
    color: #3a3b3a;
    padding-left: 30px;
    @media @tablet-down {
      font-size: 40px;
      line-height: 40px;
    }
    @media @small-down {
      font-size: 30px;
      line-height: 30px;
      padding-left: 10px;
    }
  }
  .value-points {
    padding-top: 60px;
    .point-text {
      span {
        font-family: "Graphik";
        font-size: 80px;
        font-weight: bold;
        display: block;
        color: #3a3b3a;
        @media @tablet-down {
          font-size: 80px;
          line-height: 80px;
        }
        @media @small-down {
          font-size: 50px;
          line-height: 60px;
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
