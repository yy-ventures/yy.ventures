<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Go Green Bangladesh Named the</h2> 
        <h2 class="highlight">Winner of Waste 2 Resources Program</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>Sustainable Solutions to Solid Waste Management </h2>
          <div class="sub-text">
            <p>
              project was initiated in 2018 by UNDP with funding from the Swedish International Development Agency (SIDA), in response to the growing Rohingya crisis in Bangladesh and the pressing Solid Waste Management (SWM) necessities. 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/undp-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            For the third cohort of the grant program in 2021, UNDP partnered up with YY Ventures along with SIDA, Practical Action, BRAC, and Garbageman, to find entrepreneurs in Bangladesh who are working with innovative solutions for Solid Waste Management. After a short yet rigorous application process, 26 applications were turned in, out of which 15 enterprises were shortlisted and interviewed. After the interviews, 5 promising teams- BD Recycle, Wastewear by Chol, MATI Organics Ltd, Bangla Bari, and Go Green Bangladesh, were onboarded into the Waste 2 Resources Program on December 9, 2021.   
          </p>
          <p>An orientation session and workshop later, a secondary selection was held. The top 5 enterprises reviewed their proposals and presented their pitch in front of a panel of judges. The judging panel then chose three enterprises, MATI Organics Ltd, Bangla Bari, and Go Green Bangladesh, to move forward to the next phase of the program. The top 3 participants were invited to a learning journey to Cox’s Bazaar on December 19,2021, following a technical session held on value chain analysis. After understanding and experiencing the existing value chain of Solid Waste Management over the field trip, the entrepreneurs were invited to present their respective proposals at the Pitch event organised at Impact Hub Dhaka. </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            During the Pitch event, Fazlur Rahman, President of Go Green Bangladesh, Khayrul Alam Bhuiyan, Solid Waste Management Expert, Managing Director of MATI Organics Ltd. and Fawaz Rob, CEO of Bangla Bari Ltd. presented their respective proposals. Each of the entrepreneurs were allocated five minutes to present and ten minutes to answer questions from the panel of judges. 
          </p>
          <p>After the pitch, the judges discussed amongst themselves and announced Go Green Bangladesh the winner of the Waste 2 Resources Program. Go Green Bangladesh is a Social Business working to provide sustainable alternatives of plastic to solve the plastic problem. They turn clothes and single-use plastics into bricks named CPB (Cloth Plastic Brick). CPB addresses both textile and plastic waste problems at once.</p>
          <p>The proposal by Fazlur Rahman from Go Green Bangladesh stood and seemed the most feasible. The proposed supply chain and the materials he would like to use to create the prototype was appreciated by the judges. Go Green Bangladesh has been offered USD 10,000, with further funding opportunities from UNDP once the prototype is ready for further development and mentorship from YY Ventures, to help him create the supply chain and prototype.  </p>
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
    background-image: url("~/assets/images/news/undp-2.jpg");
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
