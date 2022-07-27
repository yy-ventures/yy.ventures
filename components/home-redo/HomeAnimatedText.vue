<template>
  <div id="home-animated-text">
    <div class="hero-container">
      <div class="hero-text-container">
        <div id="born"></div>
        <div id="entrepreneurs"></div>

        <div class="bottom-text uk-text-center">
          <span class="text-bold">Professor Muhammad Yunus</span>
          <span class="text-light">Nobel Peace Prize Winner and Founder of Grameen Bank</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageY: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", function () {
      let pageY = window.pageYOffset;

      let born = document.querySelector("#born");
      let entrepreneurs = document.querySelector("#entrepreneurs");
      born.style.backgroundPosition = `${pageY * 0.55 - 1300}px`;
      entrepreneurs.style.backgroundPosition = `-${pageY * 0.7 - 1400}px  -50px`;
    });
  },
};
</script>

<style lang="less">
#home-animated-text {
  .hero-container {
    margin-top: 40px;
    padding: 0px;
  }
  .hero-text-container {
    #born {
      height: 250px;
      background-image: url("~assets/images/all-humans.png");
      background-size: cover;
      background-repeat: no-repeat;
    }
    #entrepreneurs {
      height: 250px;
      background-image: url("~assets/images/born.png");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .bottom-text {
      margin-bottom: 100px;
      .text-bold {
        font-family: "Graphik";
        font-weight: 600;
        display: block;
      }
      .text-light {
        font-family: "Graphik";
        font-weight: normal;
        display: block;
      }
    }
    .inner-span {
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-stroke: 2px #3a3b3a;
      text-transform: lowercase;
    }
    img {
      max-width: 100px;
    }

    h1 {
      color: #3a3b3a;
      font-size: 110px;
      line-height: 1.1 !important;
      text-transform: capitalize;
      @media @tablet-down {
        font-size: 80px;
        line-height: 80px;
        margin-bottom: -35px;
      }
      @media @small-down {
        font-size: 50px;
        line-height: 50px;
        padding-left: 10px;
        margin-bottom: -25px;
      }
    }
  }
}
</style>
