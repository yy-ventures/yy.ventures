<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2 class="highlight">YY Ventures Invests in Best Aid Limited</h2> 
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>YY Ventures officially announced its investment in Best Aid Limited</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              a promising health care organisation in Bangladesh. On January 23, 2022, Mir Hasib Mahmud, CEO of Best Aid and Shazeeb M Khairul Islam, Founder & Managing Director at YY Ventures, signed the agreement at the YY Ventures office, located at the Grameen Telecom Bhaban in Mirpur, Dhaka.
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/best-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Best Aid Limited is a telehealth organisation based on one-stop digital healthcare. This concept provides 24/7 online consultancy using audio and video platforms with specialist doctors, catering to patients’ needs. Best Aid Limited has been working on digital healthcare since 2020 and were one of the top teams of the 2020/21 Cohort of SIMcubator- a healthcare incubator by the students from Master of Arts HSG in Strategy and International Management at the University of St. Gallen in Switzerland, funded by HP Foundation, and in partnership with YY Ventures.   
          </p>
          <p>
            As a Social Business, YY Ventures will not take any dividend from Best Aid (A social business is a non-dividend paying business to solve social problems).  Our investment philosophy allows us to treat profit as retained earnings, which is the standard practice. As a result, it will not create any liability for the enterprise. Thereby, it enhances the financial strength of the enterprise. To meet the expenses of the company, the entrepreneur may draw from the retained earning, which grows cumulatively as we will never claims its share of profit from the company. As part of the investment deal, we will continuously disinvest in a pre-agreed equal monthly tranche in order to provide the entrepreneurs with increasing ownership.  
          </p>
        </div>
        <div class="bottom-grid-right">
          <p> YY Ventures is using its own capital and philanthropic money to finance promising Social Businesses. Apart from capital, it supports its portfolio companies in vision setting, creating theory of change, and measuring & managing impact. Currently, YY Ventures is raising money for its first venture fund to finance early-stage Social Businesses that are innovating across broad categories such as education, healthcare, technology access, sports, environment, tourism and gender equality.  </p>
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
    background-image: url("~/assets/images/news/best-1.jpg");
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
