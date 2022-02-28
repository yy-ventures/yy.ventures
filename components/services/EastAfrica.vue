<template>
  <div class="east-africa-container">
    <div class="east-africa-header">
      <div class="header_content">
        <h2>Fostering Social Business</h2>
        <h2 class="highlight">Entrepreneurship in East Africa</h2>
      </div>
    </div>
    <div class="east-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>It goes beyond words that</h2>
          <div class="sub-text">
            <p>
              the youth are at the pinnacle in the contemporary environment of
              social change. With the world as it is, it is the utmost
              responsibility of the youth to embrace the altruistic persona
              within them, to ensure widespread benefit for the global
              population in the future.
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/service-grid/east-africa-women.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            A mass majority of 80% of East Africans excluding South Sudan, are
            below the age of 35, with a median age ranging from between 16-19
            years; therefore, in essence, the East African region (EAR), like
            many other regions, have the potential to capitalize their
            demographic dividends (In this case, their youth population) to
            solve pressing social issues rooting from the region while also
            driving economic development.
          </p>
          <p>
            YY Ventures is collaborating with Yunus Centre, Yunus & You- The YY
            Foundation and the Catholic University of Zimbabwe to design and
            implement Social Business ecosystem building activities at East
            African Campuses. We are undertaking several initiatives to cater to
            aspiring social business entrepreneurs and fresh graduates from
            academic institutions and universities in East Africa, e.g. creative
            workshops, design sprints, competitions and roundtables.
          </p>
        </div>
        <div class="bottom-grid-right">
          <p>
            Our year-long project is designed in a unique way to host 15 on-site
            and online sessions and 2 creative competitions to promote and
            nurture social business ideas in 5 East African University campuses
            to begin with. Approximately 200 Students and academicians
            participating in the workshops or competitions under this program
            will get access to these events. They can connect with seasoned
            social business entrepreneurs, exchange knowledge and initiate joint
            projects to foster collaboration.
          </p>
        </div>
      </div>
    </div>
    <div class="east-africa-footer">
        <a href="/services">Back</a>
    </div>
  </div>
</template>

<script>
import {
  toggle_class_on_focus,
  add_class_on_focus,
} from "@/assets/scripts/dom_utils";

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
};
</script>

<style lang="scss">
.east-africa-container {
  margin: 0 auto;
  width: 96%;
  padding: 5% 0;
  font-family: "Graphik";
  .east-africa-header {
    margin-top: 5%;
    height: 75vh;
    background-image: url("~/assets/images/service-grid/east-africa-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
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
