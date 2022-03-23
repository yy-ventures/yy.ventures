<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Meet the Top Innovators of the</h2> 
        <h2 class="highlight">WASH Innovation Challenge</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <!-- date -->
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>Bangladesh has made considerable progress towards providing access to improved</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              water sources, yet, in almost two out of five households, microbial quality of the drinking water worsened has from source to household, and other challenges to ensure quality drinking water nationwide has also increased. Each year about 45,000 children under 5 years old die from diarrhea, caused by dirty water and poor toilet facilities.
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/wash-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Innovation is essential to bring about better solutions, which can serve the people at the bottom of the pyramid with improved access to water, sanitation, and hygiene. This will lead to a significantly better quality of life for everyone, especially the future generations.  
          </p>
          <p>YY Ventures had partnered with Aqua for All, Bopinc, and GSMA for the first time to launch the WASH Innovation Challenge in Bangladesh. This program was launched with a collective mission to achieve Sustainable Development Goal 6- clean water and sanitation for all, by empowering the most promising WASH entrepreneurs and innovators in Bangladesh who are focused on improving access to clean water, hygiene, and sanitation for all. </p>
          <p>After an intensive selection process, 12 organizations had been selected to take on the WASH Innovation Challenge. The participating teams had the opportunity of attending a 3-day long boot camp and received tailored mentoring from seasoned WASH business experts. One winning team will get a cash prize at the end of the program, and top participants will gain the opportunity to apply for further funding. </p>
          <p class="meet-the-teams">Meet the teams</p>
          <p class="headline-bold">AKYAS </p>
          <p>AKYAS is an affordable, accessible, and rapidly deployable container-based sanitation solution that collects and treats fecal waste on-site. AKYAS can offer (i) toilet "back-end" system, (ii) "front-end" and (iii) a pathogen-killing tech. </p>
          <p class="headline-bold">Aqua Solve </p>
          <p>Costing at BDT 3.00, Aqua-solve is an affordable product that comes in a sachet form, made from the powder of moringa seeds and a copper wire. Only 5gm of this product can be used to purify 10 liters of water in 4 hours. </p>
          <p class="headline-bold">ASSEDO (Agriculture Sustainable & Socio-Economic Development Organization) </p>
          <p>ASSEDO has recognized the challenges faced by people using a typical pit-latrine and developed an innovative toilet model, Eco-Sun Toilet, which turns urine and feces into fertilizer. </p>
           <p class="headline-bold">DORP (Development Organisation of the Rural Poor) </p>
          <p>
            DORP’s product Uchash Sanitary Napkin is a low-cost & quality sanitary napkin aiming to make sanitary products accessible and combat menstruation health issues for women & girls in the semi-urban and rural areas who are deprived of the basic right of proper menstruation hygiene. 
          </p>
          <p class="headline-bold">Drinkwell </p>
          <p>
            Drinkwell is providing house-to-house pipe water that will deliver efficient and cost-effective safe drinking water to arsenic iron affected areas of Bangladesh. This ready-to-drink tap water will cost only about 1 taka per liter, the operational and maintenance cost will be borne by the organization as well. 
          </p>
          
        </div>
        <div class="bottom-grid-right">
           <p class="headline-bold">Hydroquo </p>
          <p>
            Hydroquo+, transforming the water industry to make water safe and sustainable for today and the future generations. They have automated mission-critical testing and monitoring processes that were traditionally manual, slow, and expensive. 
          </p>
          <p class="headline-bold">Raindrop  </p>
          <p>
            Raindrop has developed an artificial reservoir with a holding capacity of 15.6 million liters of rainwater and produces 32,00 liters of pure drinking water under a treatment plant founded beside the reservoir. 
          </p>
          <p class="headline-bold">Shapla  </p>
          <p>
            Shapla is Bangladesh’s first and only cashless sanitary vending machine that can dispense sanitary pads using a mobile application. The mobile application can also help raise hygiene and sanitation-based awareness and help with menstrual health management. 
          </p>
          <p class="headline-bold">Tetra  </p>
          <p>
            Tetra’s innovative device, Solar Still, can simultaneously desalinate and purify water by using sunlight. A single device can purify 10 liters of drinking water in 24 hours to support the needs of a family of four to five members in low-income and marginalized communities. 
          </p>
          <p class="headline-bold">Trishna: Rural Enterprise Model (TREM)  </p>
          <p>
            Project Trishna is a social venture designed to holistically address the drinking water challenge in Bangladesh. TREM integrates the elements of centralized water purification and digitalization of purchase and delivery of safe water using smartphones in solving the water crisis in rural communities. 
          </p>
          <p class="headline-bold">Uttaran   </p>
          <p>
            Uttaran provides low-cost drinking water for the most marginalized communities in hard-to-reach areas of southwest Bangladesh. They provide portable water through a deep tube well, overhead tank, pipeline, and a local entrepreneur-based water transportation system.  
          </p>
          <p class="headline-bold">Wreetu    </p>
          <p>
           Wreetu aims to design and transform the existing public toilets into women and period-friendly toilets, with separate chambers equipped with menstrual facilities and accessibility features for menstruators with disabilities in urban slums.  
          </p>
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
