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

    <!-- Venture Investment -->

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

    <!-- Funded Through Programs start -->

    <!-- quote portfolio -->
    <QuotePortfolio />

    <!-- GRID LAYOUT START -->
    <div class="funded-container">
      <div class="portfolio-grid shapla">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Shapla</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/news/bold-innovations" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="portfolio-grid dream-water">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Dream Water</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/news/bold-innovations" target="_blank">
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
            <a href="/news/go-green" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="transend portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">TransEnd</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="https://www.transendbd.org/" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="best-aid portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Best Aid</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <nuxt-link to="/news/best-aid-ltd" target="_blank">
              <button class="btn-route">learn more</button>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="tetra portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Tetra</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a href="/news/bold-innovations" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
      <div class="wreetu portfolio-grid">
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">Wreetu</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <nuxt-link to="/news/bold-innovations" target="_blank">
              <button class="btn-route">learn more</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- GRID LAYOUT END -->
  </div>
</template>

<script>
import {
  toggle_class_on_focus,
  add_class_on_focus,
  update_scroll,
} from "@/assets/scripts/dom_utils";

import QuotePortfolioDark from "~/components/QuotePortfolioDark.vue";
import QuotePortfolio from "~/components/QuotePortfolio.vue";
export default {
  mounted: () => {
    update_scroll();
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
    // padding: 5% 0 5% 0;
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

  // FUNDED LAYOUT START
  .funded-container {
    margin-block: 20px;

    display: grid;
    grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
    grid-template-rows: repeat(3, [row-start] min-content [row-end]);
    gap: 20px;

    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
      grid-template-rows: repeat(4, [row-start] min-content [row-end]);
    }

    @media screen and (max-width: 601px) {
      grid-template-columns: [col-start] 1fr [col-end];
      grid-template-rows: repeat(7, [row-start] min-content [row-end]);
      gap: 10px;
    }

    .portfolio-grid {
      height: 80vh;
      background: #ddd;
      position: relative;
      @media screen and (max-width: 900px) {
        height: 500px;
      }
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .shapla {
      grid-column: col-start 1 / col-end 1;
      grid-row: row-start 1 / row-end 1;

      @media screen and (max-width: 920px) {
        grid-column: col-start 1 / col-end 1;
        grid-row: row-start 1 / row-end 1;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 1 / row-end 1;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/shapla.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .dream-water {
      grid-column: col-start 2 / col-end 3;
      grid-row: row-start 1 / row-end 1;

      @media screen and (max-width: 920px) {
        grid-column: col-start 2 / col-end 2;
        grid-row: row-start 1 / row-end 1;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 2 / row-end 2;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Dreamwater.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .go-green {
      grid-column: col-start 1 / col-end 1;
      grid-row: row-start 2 / row-end 2;

      @media screen and (max-width: 920px) {
        grid-column: col-start 1 / col-end 1;
        grid-row: row-start 2 / row-end 2;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 3 / row-end 3;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/Go-Green.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .transend {
      grid-column: col-start 2 / col-end 2;
      grid-row: row-start 2 / row-end 2;

      @media screen and (max-width: 920px) {
        grid-column: col-start 2 / col-end 2;
        grid-row: row-start 2 / row-end 2;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 4 / row-end 4;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/transEnd.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .best-aid {
      grid-column: col-start 3 / col-end 3;
      grid-row: row-start 2 / row-end 2;

      @media screen and (max-width: 920px) {
        grid-column: col-start 1 / col-end 1;
        grid-row: row-start 3 / row-end 3;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 5 / row-end 5;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/best-aid-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    .tetra {
      grid-column: col-start 1 / col-end 1;
      grid-row: row-start 3 / row-end 3;

      @media screen and (max-width: 920px) {
        grid-column: col-start 2 / col-end 2;
        grid-row: row-start 3 / row-end 3;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 6 / row-end 6;
      }

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
    .wreetu {
      grid-column: col-start 2 / col-end 3;
      grid-row: row-start 3 / row-end 3;

      @media screen and (max-width: 920px) {
        grid-column: col-start 1 / col-end 2;
        grid-row: row-start 4 / row-end 4;
      }

      @media screen and (max-width: 601px) {
        grid-column: col-start / col-end;
        grid-row: row-start 7 / row-end 7;
      }

      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/portfolio-grid/wreetu.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
  // FUNDED LAYOUT END

  // grid common design
  .portfolio-grid-content {
    position: absolute;
    bottom: 5%;
    left: 5%;
    .portfolio-grid-title {
      h2 {
        color: white;
        font-weight: 900;
        font-size: clamp(24px, 2.7vw, 4vw);
        margin: 0;
      }
    }
    .portfolio-grid-buttons {
      margin-top: 1rem;
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
