<template>
  <div class="service-grid-container">
    <!-- first layer -->
    <div class="fostering-sb-container">
      <div class="service-grid-content">
        <div class="service-grid-title">
          <h2>Fostering Social Business</h2>
          <h2 class="highlight">Entrepreneurship in East Africa</h2>
        </div>
        <div class="service-grid-buttons">
          <nuxt-link to="/east-africa" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
          <button class="btn-ongoing">ongoing</button>
        </div>
      </div>
    </div>

    <!-- second layer -->

    <div class="sbdc-sfdc-container">
      <div class="sbdc-grid service-grid">
        <div class="service-grid-content">
          <div class="service-grid-title">
            <h2>Social Business</h2>
            <h2 class="highlight">Design Competition</h2>
          </div>
          <div class="service-grid-buttons">
            <a href="http://competitions.yunuscentre.org/sbdc" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
            <button class="btn-ongoing">ongoing</button>
          </div>
        </div>
      </div>
      <div class="sfdc-grid service-grid">
        <div class="service-grid-content">
          <div class="service-grid-title">
            <h2>Social Fiction</h2>
            <h2 class="highlight">Design Competition</h2>
          </div>
          <div class="service-grid-buttons">
            <a href="http://competitions.yunuscentre.org/sfdc" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
            <button class="btn-ongoing">ongoing</button>
          </div>
        </div>
      </div>
    </div>

    <!-- third layer -->
    <div class="waste2resource-container">
      <div class="service-grid-content">
        <div class="service-grid-title">
          <h2 class="highlight">Waste 2 Resources Program</h2>
        </div>
        <div class="service-grid-buttons">
          <nuxt-link to="/w2r" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
          <button class="btn-ongoing">ongoing</button>
        </div>
      </div>
    </div>

    <!-- fourth layer -->

    <div class="fourth-container">
      <div class="central-africa-grid service-grid">
        <div class="service-grid-content">
          <div class="service-grid-title">
            <h2>Agribusiness Incubator in</h2>
            <h2 class="highlight">Central African Republic</h2>
          </div>
          <div class="service-grid-buttons">
            <a href="/car-sb" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
            <button class="btn-ongoing">ongoing</button>
          </div>
        </div>
      </div>
      <div class="dkc-grid service-grid">
        <div class="service-grid-content">
          <div class="service-grid-title">
             <h2>Digital Khichuri</h2>
            <h2 class="highlight">Challenge</h2>
          </div>
          <div class="service-grid-buttons">
            <a href="https://digitalkhichuribd.org/" target="_blank">
              <button class="btn-route">learn more</button>
            </a>
            <button class="btn-ongoing">closed</button>
          </div>
        </div>
      </div>
    </div>

    <!-- third layer -->
    <div class="wash-innovation-container">
      <div class="service-grid-content">
        <div class="service-grid-title">
          <h2>WASH Innovation</h2>
          <h2 class="highlight">Challenge</h2>
        </div>
        <div class="service-grid-buttons">
          <nuxt-link to="/washic" target="_blank">
            <button class="btn-route">learn more</button>
          </nuxt-link>
          <button class="btn-ongoing">closed</button>
        </div>
      </div>
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
.service-grid-container {
  width: 96%;
  margin: 0 auto;
  padding: 5% 0 1% 0;
  font-family: "Graphik";
  @media screen and (max-width: 601px) {
      padding: 5% 0 5% 0;
  }
  .fostering-sb-container {
    height: 80vh;
    position: relative;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/service-grid/yunus-picture.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 601px) {
      height: 350px;
      background-position: right;
      padding: 5% 0 5% 0;
    }
  }

  // sbdc-sfdc-container

  .sbdc-sfdc-container {
    display: grid;
    grid-template-columns: 8fr 4fr;
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 1% 0;
      margin-top: 3%;
    }
    gap: 0 1%;
    margin-top: 1%;
    .service-grid {
      height: 80vh;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .sbdc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/service-grid/sbdc-bg.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .sfdc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/service-grid/sfdc-bg.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .waste2resource-container {
    margin-top: 1%;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 601px) {
      height: 350px;
      margin-top: 4%;
    }
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/service-grid/waste.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  // layer four

  .fourth-container {
    display: grid;
    grid-template-columns: 8fr 4fr;
    @media screen and (max-width: 601px) {
      grid-template-columns: 1fr;
      gap: 1% 0;
      margin-top: 3%;
    }
    gap: 0 1%;
    margin-top: 1%;
    .service-grid {
      height: 80vh;
      background: #ddd;
      position: relative;
      @media screen and (max-width: 601px) {
        height: 350px;
      }
    }
    .central-africa-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/service-grid/africa.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .dkc-grid {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
        ),
        url("~/assets/images/service-grid/dkc.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }


  // layer five

  .wash-innovation-container {
    margin-top: 1%;
    height: 80vh;
    position: relative;
    @media screen and (max-width: 601px) {
      height: 350px;
      margin-top: 4%;
    }
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url("~/assets/images/service-grid/wash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }



  // grid common design
  .service-grid-content {
    position: absolute;
    bottom: 5%;
    left: 5%;
    .service-grid-title {
      h2 {
        color: white;
        font-weight: 900;
        font-size: clamp(24px, 3vw, 4vw);
        margin: 0;
      }
    }
    .service-grid-buttons {
      margin-top: 5%;
      button {
        outline: none;
        border: none;
        padding: 10px 24px;
        font-size: calc(8px + 0.5vw);
        text-transform: capitalize;
        cursor: pointer;
        font-family: "Graphik";
        @media screen and (max-width: 601px) {
          font-size: calc(12px + 0.5vw);
        }
      }
      .btn-route {
        background-color: white;
        color: #c7265b;
      }
      .btn-ongoing {
        background-color: #333;
        border: 1px solid #333;
        color: #fff;
      }
    }
  }
}
</style>