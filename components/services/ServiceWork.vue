<template>
  <section class="service-work-container">
    <div class="service-work-header">
      <h2 class="headline_1">Work</h2>
      <h2 class="headline_2">With Us</h2>
    </div>
    <div class="service-work-body">
      <div class="content_left">
        <h4>
          We look forward to hearing about your Social Business agenda!
        </h4>
      </div>
      <div class="content_right">
        <h4>
          To learn more about what we do and discuss scope of work, please contact.
        </h4>
        <div class="content_right_contact">
          <h6>Shazeeb M Khairul Islam</h6>
          <p>Founder & Managing Director</p>
          <p>shazeeb@yy.ventures</p>
          <a href="mailto:shazeeb@yy.ventures" target="_blank">
              <h5 class="highlight">contact now</h5>
          </a>
        </div>
      </div>
    </div>
  </section>
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
.service-work-container {
  overflow-x: hidden;
  width: 96%;
  margin: 0 auto;
  padding: 2.5%;
  background-color: #f1f2f2;
  height: auto;
  margin-bottom: 1%;
  font-family: "Graphik";
  @media screen and (max-width: 601px) {
    height: auto;
    margin-bottom: 5%;
  }
  .service-work-header {
    padding: 2.5% 0;
    .headline_1,
    .headline_2 {
      font-weight: 900;
      font-size: calc(24px + 6vmin);
      margin-bottom: 0;
    }
    .headline_1 {
      transform: translateX(40%);
      @media screen and (max-width: 601px) {
        transform: translateX(25%);
      }
    }
    .headline_2 {
      margin-top: 0;
      transform: translateX(45%);
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 2px #222;
      @media screen and (max-width: 601px) {
        transform: translateX(25%);
        -webkit-text-stroke: 1px #222;
      }
    }
  }
  .service-work-body {
    padding: 2.5% 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
    }
    .content_left {
      padding: 2.5% 5%;
      h4 {
        font-weight: 900;
        font-size: calc(10px + 2vmin);
        margin: 0;
        @media screen and (min-width: 601px) {
          width: 85%;
        }
      }
    }
    .content_right {
      padding: 2.5% 5%;
      h4 {
        font-weight: 900;
        font-size: calc(10px + 2vmin);
        margin: 0;
        @media screen and (min-width: 601px) {
          width: 85%;
        }
      }
      .content_right_contact {
        margin-top: 7.5%;
        h6 {
          font-weight: 900;
          font-size: calc(2px + 2vmin);
          margin-bottom: 0;
          @media screen and (max-width: 601px) {
            font-size: calc(8px + 2vmin);
          }
        }
        p{
            margin: 0;
            color: #444;
        }
        a{
            text-decoration: none;
        }
        h5{
            font-weight: 900;
            margin-top: 7.5%;
            font-size: calc(4px + 2vmin);
            text-transform: capitalize;
            @media screen and (max-width: 601px) {
                font-size: calc(8px + 2vmin);
            }
        }
      }
    }
  }
}
</style>