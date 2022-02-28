<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2 class="highlight">Kick the virus: Fighting the Pandemic</h2> 
      </div>
    </div>
    <div class="east-africa-body">
      <!-- date -->
      <p class="date-p">Originally Published in June 2020</p>
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>Here’s how our tribe is fighting the pandemic: </h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              YY Ventures has joined forces with EMK Centre and 3D Printer to produce face shields for distributing to front-line medical staff, waste collectors etc. The design blueprint was collected from our friends at NWTF, Philippines. On April 02, 2020, the first batch of these gears was distributed to healthcare professionals at Spreeha Healthcare Center and AmarLab, followed by distribution to public hospitals like BSMMU, Kurmitola General Hospital. 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/kick-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p class="headline-bold">Backing Crowdfunding platform Choloshobai.com: </p>
          <p>
            YY Ventures is working as the technology partner of CholoShobai, which has created an online crowdfunding platform that enables anyone across Bangladesh to raise funds for a good social and humanitarian cause. We feel this fundraised through a transparent digital system from hundreds and thousands of local citizens will help organizations and individuals accelerate the good work they're doing to fight the Covid-19 situation. YY Ventures’ design consultancy arm ‘Jamroll’, has developed the technology platform for CholoShobai in an unprecedented timeline to address the current Coronavirus situation.  
          </p>
          <p class="headline-bold">
            Our Incubees are taking care of their communities by raising awareness: 
          </p>
          <p>Many of our incubated projects like Garbageman, Positive Bangladesh, Peacemaker Studios are very active in raising awareness in the digital platforms.  </p>
        </div>
        <div class="bottom-grid-right">
            <p class="headline-bold">Distributing Food to 3000 Families in Mirpur:</p>
          <p>
            YY Ventures has joined forces with Grameen Healthcare Trust and Queen Sofia Foundation to distribute 28 metric tons of food to needy communities of Mirpur in Dhaka. Several schools and the local volunteer network were engaged while we distributed food enough to feed a family of 4-5 members for two weeks. 3,000 families have received the food package while we reach an approximate number of 11,000 people. 
          </p>
          <p> Give a shoutout to our team at <a href="info@yy.ventures">info@yy.ventures</a> if you are willing to join forces to fight the pandemic. </p>
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
    background-image: url("~/assets/images/news/kick-1.jpg");
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
