<template>
  <div class="central-africa-container">
    <div class="central-africa-header">
      <div class="header_content">
        <h2>Agribusiness Incubator in</h2>
        <h2 class="highlight">Central African Republic</h2>
      </div>
    </div>
    <div class="central-africa-body">
      <div class="top-grid">
        <div class="top-grid-left">
          <h2>The root causes and drivers of</h2>
          <div class="sub-text">
            <p>
              the conflict in CAR is not yet meaningfully addressed at the local level. Some local structures exist but lack the skills and capacity to effectively prevent conflict and raise awareness on inter-religious dialogue and social cohesion activities.
            </p>
          </div>
        </div>
        <div class="top-grid-right">
          <img
            src="~/assets/images/service-grid/central-af.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="bottom-grid">
        <div class="bottom-grid-left">
          <p>
            Moreover, since the structures and efforts are often not linked to the local youth population and other community tensions, intergenerational gaps exist. Therefore, supporting these actors’ capacity offers significant potential to foster improved social cohesion and resilience to violence and discrimination and enhance social business and entrepreneurship models. 
          </p>
          
        </div>
        <div class="bottom-grid-right">
          <p>
            YY Ventures is collaborating with Yunus Centre and the Food & Agriculture Organisation of the United Nations to support FAO’s mission to build peace in Central African Republic by designing and implementing a Agribusiness Incubation Program to support 25 youth to help them understand the Social Business model, help create their own Social Business activity and help improve soft skills to successfully present their social business proposals to customers, their community and investors.
          </p>
        </div>
      </div>
    </div>
    <div class="central-africa-footer">
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
.central-africa-container {
  margin: 0 auto;
  width: 96%;
  padding: 5% 0;
  font-family: "Graphik";
  .central-africa-header {
    margin-top: 5%;
    height: 75vh;
    background-image: url("~/assets/images/service-grid/africa-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    @media screen and (max-width: 601px) {
      height: 350px;
      margin-top: 10%;
      background-position: right;
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
  .central-africa-body {
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
  .central-africa-footer{
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
