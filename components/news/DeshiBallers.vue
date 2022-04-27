<template>
  <div>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2 class="highlight">Deshi Ballers: Empowering women through sports</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>Despite the economic and social progress of Bangladesh,</h2>
          <div class="sub-text">
            <!-- <p>Distributing Face Sheild to health workers: </p> -->
            <p>
              women still struggle with issues like gender equality. Inequality in the sports field is a hurdle faced by most female athletes across the world. Facing similar hurdles and challenges in the sports field in Bangladesh, Gulnahar Mahbub Monika and Ashreen Mridha, Co-founders of Deshi Ballers decided to address this pressing problem with ‘Deshi Ballers.’ 
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/news/ballers-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Deshi Ballers is a female-led sports development organization. Monika and Ashreen started Deshi Ballers, to empower and inspire women in Bangladesh to play sports and invest the skills learned through sports to become leaders in other spheres of life. They do this by organizing training camps, tournaments, leagues, outreach programs and grooming of future female sports leaders. They believe that sports is not just about medals, rather sports teaches how to compete, how to respect opponents, how to deal with successes and setbacks, and most importantly, how to live up to the true spirit of sportsmanship on and off the field. 
          </p>
          <p>Although Deshi Ballers started off as a Facebook community, it has now emerged as a popular platform for female basketball players all around Bangladesh. The journey of Deshi Ballers started with a basketball tournament in 2016, which was open to girls of all ages. After the tournament, many girls approached the team, expressing their interest in playing basketball. The girls had also mentioned that the lack of opportunity and training were the two factors holding them back. Deshi Ballers started basketball trainings and tournaments for only women to overcome these hurdles, but today, they have set a true example of breaking gender stereotypes with their recent coed segments and tournaments for women and men.</p>
        </div>
        <div class="bottom-grid-right">
          <p>
           Currently, ‘Deshi Ballers’ organizes several initiatives throughout the year, such as — Car-Free Street, Youth Basketball Camp, Annual Basketball Tournament, Outreach Program, Bootcamp Workout, Live Diction Session etc. Deshi Ballers has received several sponsorships from organizations like American Entrepreneur Academy (AEA), SHAPE, Ispahani Foods Limited, Hossain Clothing Limited, Pledge Harbor International School, Save & Serve Foundation, etc, to organize their events. Deshi Ballers had also undergone the YY Goshthi Incubation Program by YY Ventures, Powered by Rijksdienst voor Ondernemend Nederland (RVO), to incorporate a business model into their initiative.
          </p>
          <p>Deshi Ballers has made a number of remarkable achievements till date. They participated in a number of international games - including the first FIBA South Asian Women's Basketball Championship held in Nepal in 2016. They were also recognized with the Joy Bangla Youth Award in 2020, Plan International Equality Award, Scholarship for participation in Course Leadership for Gender Equality Program in 2021, The Queen's Commonwealth Trust, and U.S. Department of State recognition. They also won a gold medal at the 9th Bangabandhu Bangladesh Game's 2021 in Chattogram Division, Gulnahar Mahbub Monika was also a recipient of The Diana Award 2021.</p>
          <p>Deshi Ballers moves forward with a vision to create educational institutions for sports as Bangladesh lacks a prominent sports educational institution. They also look forward to creating more opportunities for girls of all ages to play sports, enabling them to adopt it as a profession too. Their goal is to inaugurate the first National Women’s Basketball League in Bangladesh by 2024.</p>
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
    background-image: url("~/assets/images/news/ballers-1.jpg");
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
