<template>
  <div class="portfolio-container">
    <!-- header -->
    <div class="portfolio-header">
      <div class="header-left">
        <div class="grid-display">
          <img :src="portfolio.logo" alt="">
          <p><span class="grid-title">Category:</span> {{portfolio.category}}</p>
          <p><span class="grid-title">Mission:</span> {{portfolio.mission}}</p>
          <p><span class="grid-title">Founding Year:</span> {{portfolio.year}}</p>
        </div>
      </div>
      <div class="header-right">
        <img :src="portfolio.featured" alt="">
      </div>
    </div>
    <!-- header -->
    <div class="portfolio-footer">
      <div class="header-left">
        
      </div>
      <div class="header-right">
        
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  props: ['portfolio']
}
</script>

<style lang="scss" scoped>

.portfolio-container{
  width: 96%;
  margin: 0 auto;
  padding: 5% 0 1% 0;
  font-family: "Graphik";
  .portfolio-header{
    margin-top: 2.5%;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 600px) {
      height: auto;
      grid-template-columns: 1fr;
    }
    .header-left{
      background: #eee;
      padding: 2.5%;
      .grid-display{
        p{
          color: #333;
        }
        .grid-title{
          font-weight: 700;
          color: #222;
        }
      }
    }
    .header-right{
      img{
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }
  .portfolio-footer{
    height: 500px;
    background: #222;
    margin-top: 2.5%;
  }
}

</style>
