<template>
  <div>
    <div class="news-container">
      <!-- news grid -->
      <div class="news-grid">
        <div class="news-grid-left">
          <div class="img-header">
            <img src="~/assets/images/news/bold-2.jpg" alt="" />
          </div>
          <div>
            <h2>news</h2>
          </div>
        </div>
        <div class="news-grid-right">
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                14 enterprises graduate from YY Goshthi Incubation program.
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/enterprises-graduate">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                Bold innovations to improve water and sanitation for all: The
                WASH Innovation Challenge
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/bold-innovations">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                Sadia Hossain Joins YY Ventures Limited as the Chief Operating
                Officer (COO)
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/sadia-hossain">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                Go Green Bangladesh Named the Winner of Waste 2 Resources
                Program
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/go-green">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                6th anniversary celebration of the SDGs at the Embassy of the
                Netherlands in Bangladesh
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/sixth-anniversary">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>YY Ventures Invests in Best Aid Limited</h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/best-aid-ltd">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>
                Discussion Forum held on Opportunities & Challenges of Social
                Entrepreneurship in Bangladesh
              </h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/discussion-forum">Read More</nuxt-link>
            </div>
          </div>
          <div class="news-grid-card">
            <div class="card-header">
              <h5>A Bold Partnership Towards a World of Three Zeros</h5>
            </div>
            <div class="card-footer">
              <nuxt-link to="/news/bold-partnership">Read More</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- news footer -->
      <div class="news-footer" id="btn-1">
        <button v-on:click="visible = !visible">
          {{ !visible ? "load more" : "show less" }}
          <span v-if="visible" class="arrow-down"
            ><img src="~/assets/images/downArrowRev.svg" alt=""
          /></span>
          <span v-else class="arrow-down"
            ><img src="~/assets/images/downArrow.svg" alt=""
          /></span>
        </button>
      </div>
      <!-- news slider -->
      <div class="news-slider" v-if="visible">
        <VueSlickCarousel v-bind="settings">
          <div class="new-slide-card">
            <nuxt-link to="/news/bold-innovations"
              ><img src="../../assets/images/news/slider/bold-1.jpg" alt=""
            /></nuxt-link>
            <h3>
              Bold innovations to improve water and sanitation for all: The WASH
              Innovation Challenge
            </h3>
            <p>
              YY Ventures had partnered with Aqua for All, Bopinc, and GSMA to
              launch the WASH Innovation Challenge in April...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/sadia-hossain"
              ><img src="../../assets/images/news/slider/sadia_2.jpg" alt=""
            /></nuxt-link>
            <h3>
              Sadia Hossain Joins YY Ventures Limited as the Chief Operating
              Officer (COO)
            </h3>
            <p>
              YY Ventures Limited has onboarded Sadia Hossain as the Chief
              Operating Officer (COO) on March 01, 2022. Sadia is a business
              development and talent...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/go-green"
              ><img src="../../assets/images/news/slider/undp-2.jpg" alt=""
            /></nuxt-link>
            <h3>
              Go Green Bangladesh Named the Winner of Waste 2 Resources Program
            </h3>
            <p>
              Sustainable Solutions to Solid Waste Management project was
              initiated in 2018 by UNDP with funding from the Swedish
              International Development Agency (SIDA)...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/sixth-anniversary"
              ><img src="../../assets/images/news/slider/sixth-1.jpg" alt=""
            /></nuxt-link>
            <h3>
              6th Anniversary Celebration of the SDGs at the Embassy of the
              Netherlands in Bangladesh
            </h3>
            <p>
              The Embassy of the Netherlands in Bangladesh celebrated the 6th
              anniversary of the Sustainable Development Goals (SDGs) by raising
              flag with four youth leaders from different sectors of
              Bangladesh...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/best-aid-ltd"
              ><img src="../../assets/images/news/slider/best-1.jpg" alt=""
            /></nuxt-link>
            <h3>YY Ventures Invests in Best Aid Limited</h3>
            <p>
              YY Ventures officially announced its investment in Best Aid
              Limited a promising health care organisation in Bangladesh. On
              January 23, 2022, Mir Hasib Mahmud, CEO of Best Aid and Shazeeb M
              Khairul Islam...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/discussion-forum"
              ><img src="../../assets/images/news/slider/forum-2.jpg" alt=""
            /></nuxt-link>
            <h3>
              Discussion Forum Held on Opportunities & Challenges of Social
              Entrepreneurship in Bangladesh
            </h3>
            <p>
              YY Ventures and the Embassy of the Netherlands in Bangladesh,
              organised a discussion forum on the theme ‘Opportunities &
              Challenges of Social Entrepreneurship in Bangladesh...
            </p>
          </div>
          <div class="new-slide-card">
            <nuxt-link to="/news/bold-partnership"
              ><img src="../../assets/images/news/slider/rvo-1.jpg" alt=""
            /></nuxt-link>
            <h3>A Bold Partnership Towards a World of Three Zeros</h3>
            <p>
              YY Ventures has partnered with the Netherlands Enterprise Agency
              to strengthen the Social Business and start-up ecosystem of
              Bangladesh and incubate startups that are working...
            </p>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  data() {
    return {
      visible: false,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style lang="scss" scoped>
.news-container {
  padding: 10% 5%;
  height: auto;
  background: #333;
  width: 96%;
  margin: 0 auto;
  @media screen and (min-width: 601px) {
    padding: 5% 5%;
  }
  // news grid
  .news-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4%;
    @media screen and (min-width: 601px) {
      grid-template-columns: 1fr 1fr;
    }
    .news-grid-left {
      position: relative;
      height: 400px;
      @media screen and (min-width: 1441px) {
        height: 500px;
      }
      .img-header {
        height: 100%;
        width: 100%;

        position: relative;

        &::before {
          content: "";
          display: block;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.5),
            transparent 40%
          );

          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h2 {
        font-size: 100px;
        font-weight: 900;
        text-transform: capitalize;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px #f1f2f2;
        @media screen and (min-width: 601px) {
          font-size: 170px;
          bottom: -85px;
          -webkit-text-stroke: 2px #f1f2f2;
        }
        @media screen and (max-width: 600px) {
          bottom: -55px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .news-grid-right {
      padding: 2.5%;
      overflow-y: scroll;
      height: 400px;
      @media screen and (min-width: 1441px) {
        height: 500px;
      }
      @media screen and (max-width: 600px) {
        margin-top: 2rem;
      }
      .news-grid-card {
        padding: 2.5% 1%;
        box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.1);
        margin-top: 4%;
        h5 {
          color: #f1f2f2;
          font-size: calc(10px + 1vw);
          font-weight: 700;
        }
        .card-footer {
          text-align: right;
          a {
            padding: 1% 2%;
            border: 1px solid #f1f2f2;
            color: #c7265b;
          }
        }
      }
    }
  }
  // news footer
  .news-footer {
    padding: 2.5%;
    margin-top: 2.5%;
    text-align: center;
    button {
      @media screen and (max-width: 600px) {
        margin-top: 10%;
      }
      outline: 0;
      padding: 0.5% 1%;
      width: 170px;
      border: 1px solid #c7265b;
      background: inherit;
      text-transform: capitalize;
      color: #f1f2f2;
      font-size: 16px;
      cursor: pointer;
      .arrow-down {
        img {
          height: 12px;
          margin-left: 2.5%;
        }
      }
    }
    p {
      color: #f1f2f2;
    }
  }
  // slider
  .news-slider {
    animation: visibleAnimate 0.3s linear;
    .new-slide-card {
      padding: 0 2.5%;
      img {
        width: 100%;
        object-fit: cover;
        height: 300px;
      }
      h3 {
        color: #f1f2f2;
        font-size: calc(10px + 1vw);
        font-weight: 700;
      }
      p {
        color: #f1f2f2;
      }
    }
  }
}
@keyframes visibleAnimate {
  0% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
