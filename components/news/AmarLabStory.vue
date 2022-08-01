<template>
  <div>
    <div class="east-africa-container">
      <div class="east-africa-header">
        <div class="header_content">
          <h2 class="highlight">Amarlab: Diagnostics at Your Doorstep</h2>
        </div>
      </div>
      <div class="east-africa-body">
        <div class="top-grid">
          <div class="top-grid-left">
            <h2>The pandemic was an opportunity in disguise for many</h2>
            <div class="sub-text">
              <!-- <p>Distributing Face Sheild to health workers: </p> -->
              <p>
                entrepreneurs to scale up numerous start-ups with the aid of advancing technologies. The scenario is no
                different for Amarlab as well. During the COVID-19 pandemic when people of all walks of life struggled
                regarding safe travelling and access to basic healthcare facilities, Amarlab stepped in as a pioneer to
                address the issue by building bridges between patients and different diagnostic centres. Although
                Amarlab has been providing at-home diagnostic services since 2017, they gained popularity during the
                peak of the COVID-19 pandemic.
              </p>
            </div>
          </div>
          <div class="top-grid-right">
            <img src="~/assets/images/news/amarlab_2.jpg" alt="" />
          </div>
        </div>
        <div class="bottom-grid">
          <div class="bottom-grid-left">
            <p>
              Tazin Shahid was inspired to start Amarlab when he experienced the limitations of Bangladesh's healthcare
              sector very closely due to his mother's unexpected illness. He found that there are only 6 doctors for
              every 10,000 people; for every 73,000 people, there is only 1 medical technologist. He realised that the
              issue this sector encountered was an uphill struggle for people of all backgrounds regardless of their
              income.
            </p>
            <p>
              Tazin moved forward with the vision of establishing a value-driven organisation, through which trained
              staff would go door-to-door, collecting samples and providing necessary medical help. Amarlab supports
              patients who face difficulty in travelling to receive healthcare facilities for several reasons including
              inaccessible transport, disability, old age, or busy schedules.
            </p>
            <p>
              Amarlab went under the YY Goshthi Incubation Program and Accelerating Asia, a Singapore based accelerator
              and startup fund, which helped them to successfully spread out their web of services. Today, Amarlab is
              serving in 4 different areas-. Telemedicine, Diagnostic tests, Prescription drug delivery, and. Health
              data- a digital solution for patients to keep track of their health. They have more than 14 premium lab
              partners with 2,500 registered doctors in the telemedicine platform, and 70 doctors with digital chambers.
            </p>
          </div>
          <div class="bottom-grid-right">
            <p>
              Amarlab strongly believes in providing top-notch customer experience and ensuring high quality services
              consistently. They have been maintaining WHO (World Health Organization) standards for developing their
              sample kits. Recently they have developed the 5th version of their kit in collaboration with PUM- a
              Netherlands based organisation working with SMEs across the world. They own a unique sample collection kit
              with a built-in waste management system that they have been planning to patent. They have also acquired
              On-call Medico, a health-tech company that compliments their vision. The collaboration has ensured
              advanced solutions for doctors in terms of digital chambers (appointments, consultations, digital
              prescriptions, fees, etc.)
            </p>
            <p>
              Till date, they have ensured 5,000 recurring customers, and have received more than 12,000 test orders.
              They have demonstrated an impressive month-to-month growth rate of 140%. To be the first of its kind with
              nothing but organic approaches, Amarlab has become a reliable name. Amarlab is planning to expand their
              services across the country, and they have already onboarded 4 labs in Chittagong. They have been dealing
              with remote testing in collaboration with Dr. Lal Pathlabs, an India-based diagnostic centre that ensures
              high-end tests. Moreover, with the telemedicine partner Spreeha, serving the people of remote areas looks
              like a dream come true where Rohingya population may become great beneficiaries.
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
import axios from "axios";
import { toggle_class_on_focus, add_class_on_focus } from "@/assets/scripts/dom_utils";

import RelatedNews from "~/components/news/RelatedNews.vue";

export default {
  data: () => ({
    newsData: [],
  }),
  components: {
    RelatedNews,
  },
  methods: {
    getData() {
      axios.get("https://yyv.yyventures.org/api/get-stories-data").then((response) => console.log(response));
    },
  },
  mounted: function () {
    // Fetch API
    this.getData();
    // Active Class addition
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
    background-image: url("~/assets/images/news/amarlab_1.jpg");
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
    .date-p {
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
      .bottom-grid-left,
      .bottom-grid-right {
        padding-right: 10%;
        @media screen and (max-width: 601px) {
          padding-right: 2.5%;
        }
        p {
          color: #333;
          font-size: calc(12px + 1vmin);
          line-height: 1.2;
        }
        .headline-bold {
          font-weight: 700;
        }
      }
    }
  }
  .east-africa-footer {
    padding: 2.5%;
    @media screen and (max-width: 601px) {
      padding: 5%;
    }
    a {
      text-decoration: none;
      color: #333;
      padding: 10px 36px;
      border: 2px solid #999;
      margin-top: 2.5%;
    }
  }
}
</style>
