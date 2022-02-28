<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2 class="highlight">A Bold Partnership Towards a World of Three Zeros</h2> 
      </div>
    </div>
    <div class="east-africa-body">
      <!-- date -->
      <p class="date-p">Originally Published on March 10, 2020</p>
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>YY Ventures has partnered with the Netherlands Enterprise Agency</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              to strengthen the Social Business and start-up ecosystem of Bangladesh and incubate startups that are working to create a Bangladesh free of Poverty, Unemployment and Carbon Emission. As part of the partnership, Netherlands Enterprise Agency, a governmental agency of the Kingdom of The Netherlands that is stimulating youth entrepreneurship across Africa, the Middle East, Latin America and Asia, will support YY Ventures’ effort to inspire and support young social entrepreneurs while they transform their communities by building scalable Social Businesses. 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/rvo-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            YY Ventures, an incubation and investment Social Business founded in partnership with 'Yunus Centre', the global think tank for Social Business created by Nobel Peace Prize Winner, Professor Muhammad Yunus to advance the growth of Social Businesses. Its incubation arm, YY Goshthi supports early-stage Social Businesses with world-class training, tailor-made consultation support, business services, coworking space, and access to investors, enabling them to navigate their way towards launching a minimum viable product and raising the needed seed capital. 
          </p>
          <p>Since 2016, YY Goshthi has supported 64 entrepreneurs who have improved the lives of 150,633 people. By 2030, it wants to improve the lives of two million people by investing in Social Businesses in emerging countries. </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            A study conducted by the General Economics Division during May and June in 2019 has shown that Bangladesh’s employment elasticity has fallen to 0.55 in 2005-06 to 0.25 in 2017-2018 even with a GDP Growth of 6.6%. Also, unemployment has been found to be higher amongst educated youth than youth with primary education. Number of unemployed females has also risen from 1.2 million in 2018 compared to 1 million in 2010. Entrepreneurship may enable the youth to not only add skills to their capabilities, but also produce a ripple effect and create more employment opportunities for those in need while contributing to the growing economy. We are proud to be working with Netherlands Enterprise Agency to address these challenges head on. 
          </p>
          <p> YY Ventures’ subsidiary brand Impact Hub Dhaka offers inspiring space, meaningful content and a thriving community to bold entrepreneurs. </p>
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
  components:{
    RelatedNews
  },
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
.east-africa-container {
  margin: 0 auto;
  width: 96%;
  padding: 5% 0;
  font-family: "Graphik";
  .east-africa-header {
    margin-top: 5%;
    height: 85vh;
    background-image: url("~/assets/images/news/rvo-1.jpg");
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
    position: relative;
    .date-p{
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
        .headline-bold{
            font-weight: 700;
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
