<template>
  <div id="portfolio-investments" class="uk-section">
    <div id="title">
      <h1 class="inner-span">How we help</h1>
    </div>

    <div class="uk-container">
      <div class="portfolio-holder">
        <div uk-grid>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <div id="training">
              <p>
                YY Goshthi creates a space for promising startups to accelerate
                their business to the next level. The participants can draw
                guidelines and construct their business idea in the presence of
                world reputed business trainers. Our boot camp prepares the
                participants with different aspects of launching a successful
                business.
              </p>
            </div>
            <div class="portfolio-title">
              <h3><span>1</span>world class training</h3>
            </div>
          </div>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <img src="~assets/images/programs/mentoring.png" alt="" />
            <div class="portfolio-title">
              <h3><span>2</span>mentoring</h3>
            </div>
          </div>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <img src="~assets/images/programs/investor_network.png" alt="" />
            <div class="portfolio-title">
              <h3><span>3</span>Investor Network</h3>
            </div>
          </div>
        </div>
        <div uk-grid>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <img src="~assets/images/programs/office_space.png" alt="" />
            <div class="portfolio-title">
              <h3><span>4</span>office space</h3>
            </div>
          </div>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <img src="~assets/images/programs/business_service.png" alt="" />
            <div class="portfolio-title">
              <h3><span>5</span>business service</h3>
            </div>
          </div>
          <div class="uk-width-1-3@m uk-inline portfolio-box">
            <img src="~assets/images/programs/community.png" alt="" />
            <div class="portfolio-title">
              <h3><span>6</span>community</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title';
export default {
  components: {
    Title,
  },
};
</script>

<style lang="less" scoped>
#title {
  text-align: center;
  h1 {
    display: inline-block;
    color: #3a3b3a;
    font-size: 50px;
  }
}

#training {
  background: #f8d23a;
  height: 100%;
  padding: 2rem;

  p {
    color: #3a3b3a;
  }
}

h3 {
  text-transform: uppercase;
  font-family: 'Graphik';
  font-size: 20px;
  font-weight: 600 !important;
}

#portfolio-investments {
  background: white;
  .section-title {
    h2 {
      color: #3a3b3a;
      font-family: 'Graphik';
      font-weight: 900;
      font-size: 60px;
    }
  }
  .portfolio-holder {
    margin-bottom: 40px;
    .portfolio-box {
      margin-top: 80px;
    }
    .portfolio-title {
      position: absolute;
      bottom: -120px;
      @media @small-down {
        bottom: -90px;
      }

      h3 {
        color: #3a3b3a;
        /* font-weight: 900; */
        @media @small-down {
          font-size: 14px;
        }

        span {
          color: #3a3b3a;
          font-size: 150px;
          font-weight: 900;
          font-family: 'Graphik';
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: grey;
          -webkit-text-fill-color: transparent;
          @media @small-down {
            font-size: 100px;
          }
        }
      }
    }
  }
}

.inner-span {
  height: 50%;
  background: linear-gradient(to top, #efd30a 40%, transparent 0);
}
</style>
