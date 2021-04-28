<template>
  <div id="programs-cta">
    <div class="uk-container hero-container">
      <div class="hero-text-container">
        <h1 class="uk-text-center@m cta-text">
          <div>
            <span class="background-accent"
              ><span class="inner-span">Got A Social Business?</span></span
            >
          </div>
        </h1>

        <h3 id="subtitle" class="uk-text-center">
          join our incubator in dhaka
        </h3>

        <h3 id="text" class="uk-text-center">
          Application for Fall 2021 Cohort will open in May 2021
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
h3 {
  font-family: 'Graphik';
}

#subtitle {
  margin-top: 5rem;
  font-size: 30px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

#text {
  margin-top: 7rem;
  font-size: 20px;
  font-weight: bold;
  color: #d92d58;
}

@small-down: ~'only screen and (max-width: 480px)';
#programs-cta {
  background: #f1f2f2;

  .uk-cover-container {
    overflow: visible;
  }
  .hero-container {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .hero-text-container {
    .cta-text {
      font-family: 'Graphik';
      font-weight: bold;
      font-size: 50px;
      line-height: 50px;
      @media @small-down {
        font-size: 40px;
        line-height: 40px;
      }
      .inner-span {
        height: 50%;
        background: linear-gradient(to top, #efd30a 40%, transparent 0);
      }
    }
    .arrow-image {
      padding-top: 80px;
    }
    img {
      max-width: 100px;
    }
    img:hover {
      position: relative;
      animation: moveimg 0.4s;
      animation-timing-function: ease-in;
    }
    @keyframes moveimg {
      from {
        left: 5px;
      }
      to {
        left: 10px;
      }
    }
    padding-left: 40px;
    h1 {
      margin-top: 10px;
      color: #3a3b3a;
      font-size: 110px;
      line-height: 100px;

      margin-bottom: -45px;
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
