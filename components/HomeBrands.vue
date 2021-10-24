<template>
  <section class="home-brand-section">
    <div class="home-brand-collection">
      <div class="brand-collection-header">
        <h2 class="highlight">our partners</h2>
      </div>
      <div class="brand-collcetion-body">
        <div class="brand-collcetion-body-image">
          <img src="~/assets/images/home-brands/yunus-center.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image rvo-image">
          <img src="~/assets/images/home-brands/rvo.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image">
          <img src="~/assets/images/home-brands/ihd.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image">
          <img src="~/assets/images/home-brands/afa.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image bopinc-image">
          <img src="~/assets/images/home-brands/bopinclogo.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image">
          <img src="~/assets/images/home-brands/undp.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image gcl-image">
          <img src="~/assets/images/home-brands/gcl.png" alt="" />
        </div>
        <div class="brand-collcetion-body-image communications-image">
          <img src="~/assets/images/home-brands/communications.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-brand-section {
  height: auto;
  padding: 5rem 2rem;
  background-color: #f1f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  .home-brand-collection {
    height: 80%;
    width: 90%;
    .brand-collection-header {
      h2 {
        font-weight: 900;
        text-transform: capitalize;
        font-size: 5rem;
        color: #3a3b3a;
      }
    }
    .brand-collcetion-body {
      text-align: center;
      margin-top: 2rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
      .brand-collcetion-body-image{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 50%;
        }
      }
      .rvo-image{
        img{
          height: 60%;
        }
      }
      .communications-image{
        img{
          height: 35%;
        }
      }
      .gcl-image{
        img{
          height: 45%;
        }
      }
      .bopinc-image{
        img{
          height: 60%;
        }
      }
    }
  }
}
@media screen and (max-width: 901px) {
  .home-brand-section {
    height: auto;
    .home-brand-collection {
        .brand-collection-header{
            h2{
                font-size: 3rem;
            }
        }
      .brand-collcetion-body {
        grid-template-columns: repeat(2, 1fr);
        .brand-collcetion-body-image{
          img {
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 601px) {
  .home-brand-section {
    height: auto;
    .home-brand-collection {
      .brand-collection-header{
            h2{
                font-size: 3rem;
            }
        }
      .brand-collcetion-body {
        grid-template-columns: repeat(1, 1fr);
        .brand-collcetion-body-image{
          img {
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
</style>