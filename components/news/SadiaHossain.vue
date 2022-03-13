<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Sadia Hossain Joins YY Ventures Limited </h2> 
        <h2 class="highlight">as the Chief Operating Officer (COO)</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>YY Ventures Limited has onboarded Sadia Hossain as the </h2>
          <div class="sub-text">
            <p>
              Chief Operating Officer (COO) on March 01, 2022. Sadia is a business development and talent acquisition expert who brings in 10+ years of leadership experience into the company. Sadia’s expertise lies in scaling businesses up, out, and deep, building high-performing teams, and delivering great results by driving innovation through people-centered processes, structures, and systems. 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/sadia_2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Prior to joining YY Ventures, Sadia was working as the Director, Fellowship Recruitment and Selection at Teach For Bangladesh- a fast-growing, international education start-up. At Teach For Bangladesh, she and her team designed and delivered mass recruitment campaigns to hire 485 highly qualified graduates with diverse backgrounds from 30+ universities in Bangladesh, USA, UK, Malaysia, and India for the prestigious TFB Fellowship program, and placed 5 cohorts of Fellows for 2018-2022 programs to expand educational opportunities for 18,000+ underprivileged students across Dhaka and Chattogram. Her achievements include achieving 5x growth in the volume of Fellowship candidates, and established TFB as a top graduate employer in Bangladesh.   
          </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            Sadia has the experience of working on human development programs with cross-cutting themes addressing education, youth leadership, livelihoods, gender, climate change, public health, hygiene, and sanitation, at organizations such as Teach For Bangladesh; Concern Worldwide, a global humanitarian aid agency tackling extreme poverty; and GlaxoSmithKline, a multinational Fortune 500 company in the pharmaceutical industry. Sadia is a lifelong learner who thrives in impact-driven organisations focused on achieving equity. At YY Ventures, Sadia will oversee functional departments to drive results, spur growth, and increase the company's overall efficiency. She will lead organizational and team development, operations, innovation, culture, and DEI initiatives.
          </p>
          <p>We believe that a more equitable and just world is possible if we foster ‘Social Business’ while leveraging young people’s talents and ideas. Since 2016, we have supported 64 entrepreneurs who have improved the lives of 150,633 people. By 2030 we want to improve the lives of two million people by investing in Social Businesses in emerging countries. Therefore, Sadia’s expertise in scaling businesses and vision to scale up and impact social businesses in Bangladesh and beyond is exactly what we need for YY Ventures.</p>
        </div>
      </div>
    </div>
    <div class="east-africa-footer">
        <a href="/news-views-more">Back</a>
    </div>
  </div>
  <RelatedNews/>
  </div>
</template>

<script>
import {
  toggle_class_on_focus,
  add_class_on_focus,
} from "@/assets/scripts/dom_utils";

import RelatedNews from "~/components/news/RelatedNews.vue";

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
      RelatedNews,
  }
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
    height: 75vh;
    background-image: url("~/assets/images/news/sadia_1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
      .bottom-grid-left,  .bottom-grid-right{
        padding-right: 10%;
        @media screen and (max-width: 601px) {
          padding-right: 2.5%;
        }
        p {
            color: #333;
            font-size: calc(12px + 1vmin);
            line-height: 1.2;
          }
      }
    }
  }
  .east-africa-footer{
      padding: 2.5%;
      @media screen and (max-width: 601px) {
          padding: 5%;
      }
      a{
          text-decoration: none;
          color: #333;
          padding: 10px 36px;
          border: 2px solid #999;
          margin-top: 2.5%;
      }
  }
}
</style>
