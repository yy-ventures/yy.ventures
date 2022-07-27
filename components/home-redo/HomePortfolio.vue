<template>
  <div id="home-portfolio">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push">
      <div class="slide-container">
        <ul class="uk-slideshow-items ul-overflow-visible" uk-grid>
          <li class="">
            <img src="images/portfolio/covern.jpg" alt="" uk-cover />
            <div class="description uk-visible@m">
              <div class="slide-title uk-text-center">
                <h2 class="title"><span class="number">01</span>Avijatrik</h2>
                <h2 class="title">
                  <span class="light">A local tourism marketplace in Bangladesh.</span>
                </h2>
              </div>
            </div>
            <div>
              <span class="uk-hidden@s uk-position-bottom-center">Avijatrik</span>
            </div>
          </li>

          <li class="">
            <img src="images/portfolio/shishir.jpg" alt="" uk-cover />
            <div class="description uk-visible@m">
              <div class="slide-title uk-text-center">
                <h2 class="title"><span class="number">02</span>Shishir Water</h2>

                <h2 class="title">
                  <span class="light">Clean drinking water for all.</span>
                </h2>
              </div>
            </div>
            <div>
              <span class="uk-position-bottom-center uk-hidden@s">Shishir Water</span>
            </div>
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#home-portfolio {
  background: #3a3b3a;
  .slide-container {
    padding: 80px;
    .ul-overflow-visible {
      overflow: visible;
      li {
        overflow: visible;
      }
    }
  }
  .description {
    position: absolute !important;
    bottom: -120px;
    h2 {
      color: #d0d2d3;
      line-height: 1;
      .number {
        font-size: 150px;
        font-weight: 900;
        font-family: "Graphik";
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #d0d2d3;
        -webkit-text-fill-color: transparent;
      }
      .light {
        font-weight: 200;
      }
    }
  }
}
</style>
