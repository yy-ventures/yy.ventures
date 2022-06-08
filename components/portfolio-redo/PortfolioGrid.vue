<template>
  <div class="portfolio-grid-container">
    <!-- closed -->
    <!-- first layer -->
    <!-- <div class="fostering-sb-container">
      <div class="portfolio-grid-content">
        <div class="portfolio-grid-title">
          <h2 class="highlight">Impact Hub Dhaka Ltd.</h2>
        </div>
        <div class="portfolio-grid-buttons">
          <nuxt-link to="/investments/impact-hub" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
        </div>
      </div>
    </div> -->

    <!-- second layer -->

    <!-- <div class="sbdc-sfdc-container">
      <div class="sbdc-grid portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">YY Studio</h2>
          </div>
          <div class="portfolio-grid-buttons"> -->
    <!-- <a href="#" target="_blank">
              <button class="btn-route">learn more</button>
            </a> -->
    <!-- </div>
        </div>
      </div>
      <div class="sfdc-grid portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">YY Goshthi</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="https://incubator.yy.ventures" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </div> -->

    <!-- closed -->

    <!-- quote portfolio -->
    <QuotePortfolioDark />

    <!-- third layer -->
    <div class="waste2resource-container">
      <div class="portfolio-grid-content">
        <div class="portfolio-grid-title">
          <h2 class="highlight">Shishir Water</h2>
        </div>
        <div class="portfolio-grid-buttons">
          <nuxt-link to="/investments/shishir-water" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- fourth layer -->

    <div class="fourth-container">
      <div class="central-africa-grid portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Avijatrik Tourism Ltd.</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/investments/avijatrik" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="dkc-grid portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Impact Hub Dhaka.</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="https://dhaka.impacthub.net/" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Founder Through Programs -->

    <!-- quote portfolio -->
    <QuotePortfolio />

    <!-- first layer -->
    <div class="waste2resource-container shapla">
      <div class="portfolio-grid-content">
        <div class="portfolio-grid-title">
          <h2 class="highlight">Shapla</h2>
        </div>
        <div class="portfolio-grid-buttons">
          <nuxt-link to="/investments/shishir-water" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- second layer -->

    <div class="fourth-container">
      <div class="dream-water portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Dream Water</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/investments/avijatrik" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-grid go-green">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Go Green Bangladesh</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="https://dhaka.impacthub.net/" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- third layer -->
    <div class="waste2resource-container best-aid">
      <div class="portfolio-grid-content">
        <div class="portfolio-grid-title">
          <h2 class="highlight">Best Aid</h2>
        </div>
        <div class="portfolio-grid-buttons">
          <nuxt-link to="/investments/shishir-water" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- fourth layer -->

    <div class="left-container">
      <div class="transend portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">TransEnd</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/investments/avijatrik" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="tetra portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Tetra</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="https://dhaka.impacthub.net/" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- fifth layer -->
    <div class="waste2resource-container mb-2 wreetu">
      <div class="portfolio-grid-content">
        <div class="portfolio-grid-title">
          <h2 class="highlight">Wreetu</h2>
        </div>
        <div class="portfolio-grid-buttons">
          <nuxt-link to="/investments/shishir-water" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  toggle_class_on_focus,
  add_class_on_focus,
} from "@/assets/scripts/dom_utils";

import QuotePortfolioDark from "~/components/QuotePortfolioDark.vue";
import QuotePortfolio from "~/components/QuotePortfolio.vue";
export default {
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#program #top_section"]: "scale_down",
    });
  },
  components: {
    QuotePortfolioDark,
    QuotePortfolio,
  },
};
</script>

<style lang="scss">
.portfolio-grid-container {
  width: 96%;
  margin: 0 auto;
  // padding: 5% 0 1% 0;
  font-family: "Graphik";
  @media screen and (max-width: 601px) {
    padding: 5% 0 5% 0;
  }
  .fostering-sb-container {
    height: 80vh;
    position: relative;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/portfolio-grid/impact-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 601px) {
      height: 350px;
      background-position: right;
      padding: 5% 0 5% 0;
    }
  }

  // sbdc-sfdc-container

  .sbdc-sfdc-container {
    display: grid;
    grid-template-columns: 8fr 4fr;
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 1% 0;
      margin-top: 3%;
    }
    gap: 0 1%;
    margin-top: 1%;
    .portfolio-grid {
      height: 80vh;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .sbdc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/studio-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sfdc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/goshthi-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .waste2resource-container {
    margin-top: 1%;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 601px) {
      height: 350px;
      margin-top: 5%;
    }
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/portfolio-grid/shishir-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .best-aid {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/portfolio-grid/best-aid-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .wreetu {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/portfolio-grid/wreetu.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .shapla {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/portfolio-grid/shapla.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .mb-2 {
    margin-bottom: 1%;
  }

  // layer four

  .fourth-container {
    display: grid;
    grid-template-columns: 8fr 4fr;
    @media screen and (max-width: 920px) {
      grid-template-columns: 6fr 6fr;
    }
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 2% 0;
      margin-top: 3%;
    }
    gap: 0 1%;
    margin-top: 1%;
    .portfolio-grid {
      height: 80vh;
      background: #ddd;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .central-africa-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/avijatrik-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .dream-water {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Dreamwater.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .go-green {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Go-Green.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .best-aid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Go-Green.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .dkc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/office-space.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  // left layout
  .left-container {
    display: grid;
    grid-template-columns: 4fr 8fr;
    @media screen and (max-width: 920px) {
      grid-template-columns: 6fr 6fr;
    }
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 2% 0;
      margin-top: 3%;
    }
    gap: 0 1%;
    margin-top: 1%;
    .portfolio-grid {
      height: 80vh;
      background: #ddd;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .central-africa-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/avijatrik-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .transend {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/transEnd.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .dkc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/office-space.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .tetra {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Tetra.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  // grid common design
  .portfolio-grid-content {
    position: absolute;
    bottom: 5%;
    left: 5%;
    .portfolio-grid-title {
      h2 {
        color: white;
        font-weight: 900;
        font-size: clamp(24px, 3vw, 4vw);
        margin: 0;
      }
    }
    .portfolio-grid-buttons {
      margin-top: 5%;
      button {
        outline: none;
        border: none;
        padding: 10px 24px;
        font-size: calc(8px + 0.5vw);
        text-transform: capitalize;
        cursor: pointer;
        font-family: "Graphik";
        @media screen and (max-width: 601px) {
          font-size: calc(12px + 0.5vw);
        }
      }
      .btn-route {
        background-color: white;
        color: #c7265b;
      }
      .btn-ongoing {
        background-color: #333;
        border: 1px solid #333;
        color: #fff;
      }
    }
  }
}
</style>
