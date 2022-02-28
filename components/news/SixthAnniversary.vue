<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>6th anniversary celebration of the </h2> 
        <h2 class="highlight">SDGs at the Embassy of the Netherlands in Bangladesh</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>The Embassy of the Netherlands in Bangladesh celebrated  </h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              the 6th anniversary of the Sustainable Development Goals (SDGs) by raising flag with four youth leaders from different sectors of Bangladesh. Prior to this, His Excellency Anne Van Leeuwen, Ambassador of the Kingdom of the Netherlands to Bangladesh met the youth leaders in gender, climate, agri-business and social enterprise sectors for a discussion session.  
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/sixth-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Sharika Sadaf, Head of Program & Partnerships at YY Ventures, was invited at the Embassy of the Netherlands in Bangladesh along with the three other youth leaders from different industries. The young leaders shared their biggest achievements and identified the bottlenecks that need to be addressed and overcome like lack of inclusion of youth policy process, lack of good governance, etc.   
          </p>
          <p>Sharika Sadaf gave an insight into the opportunities and challenges in the context of Social Business and discussed SDG 8- Decent Work and Economic Growth, during the session. She emphasized the need to redesign the current economic structure, allowing proper wealth distribution between the rich and the poor since the current system only benefits the richest 1% of the world’s population while the remaining 99% struggles. </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            Ambassador van Leeuwen pointed out that the 6th anniversary celebration of the SDGs means that there are now only 9 years left to achieve the set goals. He added, “We already have entered the Decade of Action for the SDGs. The SDGs are also an agenda for innovation. Innovations in technology, working methods and financing are needed to find new, integrated solutions, for example, in the transition to sustainable energy and a circular economy. Climate change adaptation is another high priority area to attend to as well.” 
          </p>
          <p> It was addressed that COVID-19 has slowed down the progress on the SDGs. In addition, the COVID-19 pandemic unveiled inequalities and inefficiencies that exist around us, in various sectors. The leaders recognized the need for a united front and collective effort to respond to and overcome all hurdles. </p>
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
    background-image: url("~/assets/images/news/sixth-1.jpg");
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
