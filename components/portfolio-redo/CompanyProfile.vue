<template>
  <div class="portfolio-container">
    <!-- header -->
    <div class="portfolio-header">
      <div class="header-left">
        <div class="grid-display">
          <img :src="portfolio.logo" alt="" />
          <p>
            <span class="grid-title">Category:</span> {{ portfolio.category }}
          </p>
          <p>
            <span class="grid-title">Mission:</span> {{ portfolio.mission }}
          </p>
          <p>
            <span class="grid-title">Founding Year:</span> {{ portfolio.year }}
          </p>
        </div>
      </div>
      <div class="header-right">
        <img :src="portfolio.featured" alt="" />
      </div>
    </div>
    <!-- footer -->
    <div class="portfolio-footer">
      <div class="footer-header">
        <h2 class="highlight">{{ portfolio.title }}</h2>
      </div>
      <div class="footer-body">
        <div class="grid-left">
          <h3>{{ portfolio.tagline }}</h3>
        </div>
        <div class="grid-right portfolio-grid-buttons">
          <p>{{ portfolio.description }}</p>
          <a :href="portfolio.website" target="_blank"> learn more </a>
        </div>
      </div>
    </div>

    <!-- backward -->
    <div class="backward-btn">
      <nuxt-link to="/investments">Back</nuxt-link>
    </div>
  </div>
</template>

<script>
import {
  add_class_on_focus,
  toggle_class_on_focus,
} from "@/assets/scripts/dom_utils";

export default {
  props: ["portfolio"],
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#program #top_section"]: "scale_down",
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio-container {
  width: 96%;
  margin: 0 auto;
  padding: 5% 0 1% 0;
  font-family: "Graphik";
  .portfolio-header {
    margin-top: 2.5%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 600px) {
      height: auto;
      grid-template-columns: 1fr;
    }
    .header-left {
      background: #eee;
      padding: 2.5% 5%;
      .grid-display {
        p {
          color: #333;
        }
        .grid-title {
          font-weight: 700;
          color: #222;
        }
      }
    }
    .header-right {
      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }
  .portfolio-footer {
    height: 450px;
    @media screen and (max-width: 600px) {
      height: auto;
    }
    background: #333;
    margin-top: 2.5%;
    .footer-header {
      padding: 2.5%;
      h2 {
        color: #f2f2f2;
        font-weight: 900;
        font-size: calc(18px + 4vmin);
      }
    }
    .footer-body {
      padding: 5% 2.5%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }
      .grid-left {
        h3 {
          color: #f2f2f2;
          font-weight: 700;
          font-size: calc(14px + 2vmin);
        }
      }
      .grid-right {
        p {
          color: #f2f2f2;
        }
      }
      .portfolio-grid-buttons {
        margin-top: 1rem;
        a {
          outline: none;
          border: none;
          padding: 10px 24px;
          font-size: calc(8px + 0.5vw);
          text-transform: capitalize;
          cursor: pointer;
          font-family: "Graphik";
          background-color: white;
          color: #c7265b;
          text-decoration: none;
          @media screen and (max-width: 601px) {
            font-size: calc(12px + 0.5vw);
          }
        }
      }
    }
  }
  .backward-btn {
    padding: 2.5%;
    a {
      border: 1px solid;
      padding: 10px 36px;
      text-decoration: none;
      color: #333;
      border: 2px solid #999;
    }
  }
}
</style>
