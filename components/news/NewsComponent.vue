<template>
  <div>
    <div class="east-africa-container">
      <div class="east-africa-header">
        <img :src="`https://yyv.yyventures.org/${bannerImg}`" />
        <div class="header_content">
          <h2 class="highlight">{{ title }}</h2>
        </div>
      </div>
      <div class="east-africa-body" v-html="description"></div>
      <div class="east-africa-footer">
        <a href="/news-views-more">Back</a>
      </div>
    </div>
    <!-- <RelatedNews/> -->
  </div>
</template>

<script>
import axios from "axios";

import { toggle_class_on_focus, add_class_on_focus } from "@/assets/scripts/dom_utils";

import RelatedNews from "~/components/news/RelatedNews.vue";

export default {
  components: {
    RelatedNews,
  },

  props: ["bannerImg", "title", "description"],

  data: () => ({
    newsData: [],
  }),

  methods: {
    getData() {
      axios
        .get("https://yyv.yyventures.org/api/get-news-data")
        .then((response) => (this.newsData = response.data.data));
    },
  },

  mounted: function () {
    this.getData();

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
.east-africa-container {
  margin: 0 auto;
  width: 96%;
  padding: 5% 0;
  font-family: "Graphik";
  .east-africa-header {
    margin-top: 5%;
    height: 85vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    position: relative;
    @media screen and (max-width: 601px) {
      height: 350px;
      margin-top: 10%;
    }
    .header_content {
      position: absolute;
      bottom: 5%;
      left: 5%;
      h2 {
        color: white;
        font-weight: 900;
        font-size: clamp(24px, 3vw, 4vw);
        margin: 0;
      }
    }
  }
  .east-africa-body {
    padding: 2.5%;
    margin-top: 2%;
    background-color: #f1f2f2;
    position: relative;
    .date-p {
      color: #999;
      position: absolute;
      bottom: 0;
      left: 2.5%;
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
    }
    .top-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      @media screen and (max-width: 601px) {
        grid-template-columns: 1fr;
      }
      .top-grid-left {
        padding-right: 10%;
        @media screen and (max-width: 601px) {
          padding-right: 2.5%;
        }
        h2 {
          font-weight: 900;
          font-size: calc(24px + 2vw);
        }
        p {
          font-weight: 600;
          color: #333;
          font-size: calc(14px + 1.5vmin);
          line-height: 1.2;
        }
      }
      .top-grid-right {
        img {
          width: 100%;
        }
      }
    }
    .bottom-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 5% 0;
      @media screen and (max-width: 601px) {
        grid-template-columns: 1fr;
      }
      .bottom-grid-left,
      .bottom-grid-right {
        padding-right: 10%;
        @media screen and (max-width: 601px) {
          padding-right: 2.5%;
        }
        p {
          color: #333;
          font-size: calc(12px + 1vmin);
          line-height: 1.2;
        }
        .headline-bold {
          font-weight: 700;
        }
      }
    }
  }
  .east-africa-footer {
    padding: 2.5%;
    @media screen and (max-width: 601px) {
      padding: 5%;
    }
    a {
      text-decoration: none;
      color: #333;
      padding: 10px 36px;
      border: 2px solid #999;
      margin-top: 2.5%;
    }
  }
}
</style>
