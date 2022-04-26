<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Bold innovations to improve water and sanitation for all:</h2> 
        <h2 class="highlight">The WASH Innovation Challenge</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <!-- date -->
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>YY Ventures had partnered with Aqua for All, Bopinc, and GSMA to </h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              to launch the WASH Innovation Challenge in April, 2021, with the collective mission to achieve Sustainable Development Goal 6- Clean water and sanitation for all, by empowering the most promising WASH entrepreneurs working on improving the water, sanitation, and hygiene conditions of underserved communities in Bangladesh. 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/bold-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            After an intensive selection process, 12 teams were selected to participate in the WASH Innovation Challenge, who had the opportunity of attending 3-day long boot camps, and received tailored mentoring from seasoned WASH experts. By the end of this program, Uttaran was named the winner of the WASH Innovation Challenge for their work on providing low-cost drinking water for the most marginalized communities and was rewarded with a cash prize of €2.500 for their initiative to provide affordable safe water in hard-to-reach areas of southwest Bangladesh.
          </p>
          <p>Aqua for All supports local entrepreneurs on their scaling pathway and is continuing to support four enterprises that participated in this WASH Innovation Challenge - Shapla, Wreetu, Tetra, and Dreamwater, to enable them to test their models from April-October 2022 before they launch as full-scaled businesses. Each team of entrepreneurs will receive a seed funding of €10.500 from Aqua for All, undergo training and receive piloting support from Bopinc. Read along to learn more about each of these enterprises trying to bring bold innovations in the WASH sector in Bangladesh:</p>

          <p class="headline-bold">Tetra</p>
          <p>Tetra is working to improve the lives of rural people who are affected by salinity in the coastal areas of Bangladesh. To combat the issue of salinity, they aim to install innovative water purifiers called Solar Still which can simultaneously desalinate and purify water by using sunlight. A single device can purify 10 liters of drinking water in 24 hours to support the needs of a family of four to five members in low-income and marginalized communities. Tetra will receive support from Bopinc with their marketing strategy to develop and scale their business idea. Want to learn more about Tetra? Click <a href='https://www.linkedin.com/company/tetra-bd/' target='_blank'>here</a></p>
          <p class="headline-bold">Dreamwater</p>
          <p>Dreamwater aims to convert polluted flood water into pure drinking water by using a mechanical portable filter. Surface water is processed by the filter and then sold to rural households through micro entrepreneurs. Dreamwater will receive support to develop 30 portable filters, and establish partnerships with 30 local entrepreneurs and shops across two sub-districts in Faridpur. Learn more about Dreamwater <a href='https://www.footstepsbd.org/' target='_blank'>here</a> </p>
          <p class="headline-bold">Wreetu</p>
          <p>Wreetu is working on transforming existing public toilets in Bangladesh into women and period-friendly toilets, with separate chambers equipped with menstrual facilities and accessibility features for menstruators with disabilities in urban slums. Wreetu will receive support to promote their facilities in local communities to assess the market demand for their initiative, in addition to monitoring and evaluation of their output. Learn more about Wreetu <a href='https://www.facebook.com/Wreetu.Book/' target='_blank'>here</a> </p>
        </div>
        <div class="bottom-grid-right">
            <p class="headline-bold">Shapla</p>
          <p>Shapla has created Bangladesh’s first and only cashless sanitary vending machine which can dispense sanitary pads using a mobile application. The mobile application can also help raise hygiene and sanitation-based awareness, and help with menstrual health management. Shapla will receive support with enhancing their customer reach, and  strategizing their development and scaleup opportunities. Learn more about Shapla <a href='https://shapla.org/' target='_blank'>here</a> </p>
          <p class="headline-bold">Shapla</p>
          <p>Shapla has created Bangladesh’s first and only cashless sanitary vending machine which can dispense sanitary pads using a mobile application. The mobile application can also help raise hygiene and sanitation-based awareness, and help with menstrual health management. Shapla will receive support with enhancing their customer reach, and  strategizing their development and scaleup opportunities. Learn more about Shapla <a href='https://shapla.org/' target='_blank'>here</a> </p>
        </div>
      </div>
    </div>
    <div class="east-africa-footer">
        <a href="/news-views-more">Back</a>
    </div>
  </div>
  <!-- <RelatedNews/> -->
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
    background-image: url("~/assets/images/news/wash-1.jpg");
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
        .meet-the-teams{
            color: #c7265b;
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
