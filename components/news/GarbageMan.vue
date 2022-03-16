<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2 class="highlight">Waste or Opportunity? - A ground-breaking approach</h2>
        <h2>by GARBAGEMAN</h2> 
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>In an age of eco-conscious notion,</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              “not all heroes wear capes” serves an amazing example when we take a sincere look at Fahim Uddin Shuvo, Founder of GARBAGEMAN Limited. Based in Bangladesh, GARBAGEMAN is an eccentric enterprise that involves upcycling waste into resources. Fahim felt an obligation to address the suppressing issue of waste management giving it a structured form by means of a business model.    
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/garbage-3.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Fahim started GARBAGEMAN with a vision of making Dhaka a sustainable city, he later on pitched his business idea on Startup Bangladesh and came out as a winner. In 2017, when GARBAGEMAN received a grant from the ICT Division, it gave them a push essentially needed to scale their venture and its activities. In 2018, GARBAGEMAN graduated from the YY Goshthi Incubation Program by YY Ventures that helped him to fine tune his business model and introduced him to a group of like-minded entrepreneurs who are building Social Businesses in the region.   
          </p>
          <p>Today, GARBAGEMAN offers 4 kinds of services. Recycling platform (subscription-based)- a subscription-based recycling system of collecting recyclables from organisations. Recycling platform (household based)- free of charge service of collecting recyclables from households. Regen Vermicompost–a conversion of organic waste into compost that prevents 3 kgs of waste ending up in landfills. Zero waste consultancy- the service primarily aims to minimise internal waste and provide technical design support to organisations in need.  </p>
          <p>The GARBAGEMAN team has been working on a project in collaboration with United Nations Development Programme (UNDP) since 2019 where they have been trying to train, build up administrative capacity and provide financial diligence to the scrap dealers of Cox’s Bazar and Ukhiya. Since 2020, the team has also been working with the World Food Programme (WFP) as a technical support to develop the Standard Operating Procedure (SOP) of the upcycling centre based in Rohingya Camp 15. </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            Till date, 30 tons of waste has been collected, 99% of which has already been recycled. GARBAGEMAN has successfully impacted 47,000 people of all walks of life throughout the whole journey. The Rohingya refugees have been a great beneficiary. The upcycling centres of Cox’s Bazar, Teknaf and Ukhiya represent their direct involvement in the upcycling process through training and employment.  
          </p>
          <p>Since their inception, GARBAGEMAN has been conducting Regular Collection Drive. In addition, GARBAGEMAN initiates several workshops and activities on different venues. From 16th December 2021, GARBAGEMAN has been conducting a campaign of cleaning up the national zoo and botanical garden, located in Mirpur, Dhaka, every thursday. This year on 7th January 2022, GARBAGEMAN organised a brilliant event titled “Books for Plastic”, which focused on giving away books in exchange for plastic waste of minimum 250 grams.  </p>
          <p>Till today, GARBAGEMAN has received around 11 awards and grants altogether. They were awarded the Peer Review Award and Audience Choice Award by YGAP Bangladesh. In 2021, GARBAGEMAN was named as an honorary mention in Bangabandhu Innovation Grant.  </p>
          <p>From starting from scratch at home to collaborating projects with UNDP, Garbageman has come along a long way. “We have reached our Minimum Viable Product (MVP) in terms of recycling platform and consultancy platform. We are now planning to expand our business focusing on infrastructural capacity building. From now on, our prime focus would be to ensure digital solutions such as a mobile application for future operations.” remarked Fahim Uddin Shuvo, himself.  </p>
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
    background-image: url("~/assets/images/news/garbage-2.jpg");
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
