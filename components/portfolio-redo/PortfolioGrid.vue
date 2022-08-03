<template>
  <div class="portfolio-grid-container">
    <!-- Venture Investment -->

    <!-- quote portfolio -->
    <QuotePortfolioDark />

    <div class="fourth-container">
      <div class="waste2resource-container portfolio-grid">
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
      <div class="portfolio-grid" v-for="({ title, image, link }, index) in portfolioData" :key="index">
        <div class="portfolio-grid-image-container">
          <img :src="`/_nuxt/assets/images/portfolio-grid/${image}`" alt="" />
        </div>
        <div class="portfolio-grid-content">
          <div class="portfolio-grid-title">
            <h2 class="highlight">{{ title }}</h2>
          </div>
          <div class="portfolio-grid-buttons">
            <a :href="`${link}`" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- GRID LAYOUT END -->
  </div>
</template>

<script>
// Static Data
import portfolioData from "./portfolioData";
// Component
import QuotePortfolioDark from "./QuotePortfolioDark.vue";
import QuotePortfolio from "./QuotePortfolio.vue";
// Highlight Class
import { toggle_class_on_focus, add_class_on_focus, update_scroll } from "@/assets/scripts/dom_utils";

export default {
  data: () => ({
    portfolioData,
  }),
  mounted: function () {
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
  font-family: "Graphik";

  // layer four

  .fourth-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: dense;
    gap: 1%;
    margin-top: 1%;

    @media screen and (max-width: 920px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 2% 0;
      margin-top: 3%;
    }

    .portfolio-grid {
      height: 80vh;
      background: #ddd;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }

      &:nth-child(3n + 1) {
        grid-column: span 3;

        @media screen and (max-width: 920px) {
          grid-column: span 2;
        }
        @media screen and (max-width: 601px) {
          grid-column: span 1;
        }
      }

      &:nth-child(3n + 2) {
        grid-column: span 2;
        @media screen and (max-width: 920px) {
          grid-column: span 1;
        }
      }
    }
    .waste2resource-container {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("~/assets/images/portfolio-grid/shishir-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .central-africa-grid {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("~/assets/images/portfolio-grid/avijatrik-bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .dkc-grid {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
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

      .portfolio-grid-image-container {
        position: relative;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;

          width: 100%;
          height: 100%;

          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
        }
      }

      @media screen and (max-width: 920px) {
        grid-column: span 1;
      }
      @media screen and (max-width: 900px) {
        height: 500px;
      }
      @media screen and (max-width: 601px) {
        height: 350px;
        grid-column: col-start / col-end;
      }

      &:nth-child(5n + 2) {
        grid-column: span 2;
        @media screen and (max-width: 920px) {
          grid-column: span 1;
        }

        @media screen and (max-width: 601px) {
          grid-column: col-start / col-end;
        }
      }
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
