<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Discussion Forum held on Opportunities &</h2>
        <h2 class="highlight">Challenges of Social Entrepreneurship in Bangladesh. </h2> 
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>YY Ventures and the Embassy of the Netherlands in Bangladesh,</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              organised a discussion forum on the theme ‘Opportunities & Challenges of Social Entrepreneurship in Bangladesh’ on November 16, 2021, hosted at Impact Hub Dhaka. The objective of this forum was to create an open forum for discussing opportunities that Bangladesh and its local entrepreneurship ecosystem offers, and the challenges faced by entrepreneurs while building businesses.  
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/forum-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Orange Corners embarked on this journey with the Embassy of the Netherlands in Bangladesh to support them in the research of the local entrepreneurial ecosystem. Orange Corners is managed by the Netherlands Enterprise Agency at the request of the Dutch Ministry of Foreign Affairs. The Youth Employment and Entrepreneurial Team works closely together with the Embassy of the Kingdom of the Netherlands and local partners in each programme country. 
          </p>
          <p>
            YY Ventures had invited promising brilliant entrepreneurs from their network to the discussion forum on ‘Opportunities & Challenges of Social Entrepreneurship in Bangladesh.’ During the interactive forum Bas Blauuw, First Secretary at Embassy of the Kingdom of the Netherlands to Bangladesh; Theodore Klouvas, Programme Manager, Orange Corners; and Mike Sips, Youth Employment and Youth Entrepreneurship Advisor, Rijksdienst Voor Ondernemend Nederland (RVO); moderated the program and engaged the diligent social entrepreneurs present in an interactive round table discussion. The entrepreneurs highlighted the hurdles and obstacles they face during their entrepreneurial journey in the ecosystem. 
          </p>
        </div>
        <div class="bottom-grid-right">
          
          <p>Participants in the roundtable discussion contributed to an ecosystem mapping of the business environment for startups and young entrepreneurs in Dhaka. Similar mappings have already been done by Orange Corners in several countries in Africa and the Middle East. The mapping enabled the Netherlands Embassy in Bangladesh and Orange Corners to understand the dynamics in the ecosystem and consider what activities could enhance enabling environment for young entrepreneurs in Bangladesh.   </p>
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
    background-image: url("~/assets/images/news/forum-1.jpg");
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
