<template>
  <section class="home-brand-section">
    <div class="home-brand-collection">
      <div class="brand-collection-header">
        <h2 class="highlight">our partners</h2>
      </div>
      <div class="brand-collcetion-body">
        <img src="~/assets/images/home-brands/yunus-center.png" alt="" />
        <img src="~/assets/images/home-brands/rvo.png" alt="" />
        <img src="~/assets/images/home-brands/ihd.png" alt="" />
        <img src="~/assets/images/home-brands/afa.png" alt="" />
        <img src="~/assets/images/home-brands/bopinc.png" alt="" />
        <img src="~/assets/images/home-brands/undp.png" alt="" />
        <img src="~/assets/images/home-brands/gcl.png" alt="" />
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
      margin-top: 2rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(4, 1fr);
      justify-self: center;
      align-items: center;
      img {
        height: 50%;
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
        img {
          margin-top: 2rem;
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
        img {
          margin-top: 2rem;
        }
      }
    }
  }
}
</style>