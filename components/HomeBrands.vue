<template>
  <section class="home-brand-section">
    <div class="home-brand-collection">
      <div class="brand-collection-header">
        <h2 class="highlight">We Are in Good Company</h2>
      </div>
      <div class="brand-collection-body">
        <div class="brand-collection-body-image yc-image">
          <img src="~/assets/images/home-brands/yunus-center.png" alt="" />
        </div>
        <div class="brand-collection-body-image rvo-image">
          <img src="~/assets/images/home-brands/rvo.png" alt="" />
        </div>
        <div class="brand-collection-body-image impact-image">
          <img src="~/assets/images/home-brands/ihd.png" alt="" />
        </div>
        <div class="brand-collection-body-image">
          <img src="~/assets/images/home-brands/afa.png" alt="" />
        </div>
        <div class="brand-collection-body-image bopinc-image">
          <img src="~/assets/images/home-brands/bopinclogo.png" alt="" />
        </div>
        <div class="brand-collection-body-image">
          <img src="~/assets/images/home-brands/undp.png" alt="" />
        </div>
        <div class="brand-collection-body-image gcl-image">
          <img src="~/assets/images/home-brands/gcl.png" alt="" />
        </div>
        <div class="brand-collection-body-image communications-image">
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
        font-size: 3rem;
        color: #3a3b3a;
      }
    }
    .brand-collection-body {
      text-align: center;
      margin-top: 2rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
      .brand-collection-body-image{
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 35%;
          object-fit: contain;
        }
      }
      .rvo-image{
        img{
          height: 55%;
        }
      }
      .impact-image{
        img{
          height: 50%;
        }
      }
      .communications-image{
        img{
          height: 30%;
        }
      }
      .gcl-image{
        img{
          height: 40%;
        }
      }
      .bopinc-image{
        img{
          height: 45%;
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
                font-size: 2.5rem;
            }
        }
      .brand-collection-body {
        grid-template-columns: repeat(2, 1fr);
        .brand-collection-body-image{
          img {
            margin-top: 2rem;
            height: 35%;
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
                font-size: 2rem;
            }
        }
      .brand-collection-body {
        grid-template-columns: repeat(2, 1fr);
        .brand-collection-body-image{
          img {
            margin-top: 2rem;
            height: 35%;
          }
        }
      }
    }
  }
}
</style>