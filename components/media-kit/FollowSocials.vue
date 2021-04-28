<template>
  <div id="follow-socials">
    <div class="uk-section text-section">
      <div class="uk-container text-main">
        <h3 class="section-heading">
          Follow Our Socials
        </h3>
        <div class="uk-child-width-expand@s social-container" uk-grid>
            <div>
                <div class="company-heading">YY Ventures</div>
                <span class="text-info">Facebook<a href="https://www.facebook.com/yyventures">@yyventures</a></span>
                <span class="text-info">Twitter<a href="https://twitter.com/yyventures">@yyventures</a></span>
                <span class="text-info">Instagram<a href="https://www.instagram.com/yy.ventures/">@yy.ventures</a></span>
                <span class="text-info">LinkedIn<a href="https://www.linkedin.com/company/yyventures/">@yyventures</a></span>
            </div>
            <div>
                <div class="company-heading">YY Goshthi</div>
                <span class="text-info">Facebook<a href="https://www.facebook.com/yygoshti">@yygoshti</a></span>
                <span class="text-info">Twitter<a href="https://twitter.com/yygoshti">@yygoshti</a></span>
                <span class="text-info">Instagram<a href="https://www.instagram.com/yygoshti/">@yygoshti</a></span>
            </div>
            <div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#follow-socials {
  margin-top: 40px;
  .text-section {
    transition: margin 0.5s;
    transition-timing-function: ease-in;
    margin: 0px;
    .text-main {
      width: 85vw;
      @media @small-down {
        width: 80vw;
      }
    }
  }
  .social-container{
    .company-heading{
      font-size: 22px;
      font-weight: 600;
      font-family: 'Graphik';
      color: #3a3b3a;
    }
    .text-info {
      font-size: 18px;
      font-weight: 400;
      font-family: 'Graphik';
      color: #3a3b3a;
      margin-top: 10px;
      display: block;
      a {
        margin-left: 5px;
        font-weight: 300;
      }
    }
  }
  .section-heading {
    color: #3a3b3a;
    font-family: 'Graphik';
    font-weight: 600;
    font-size: 40px;
    @media @small-down {
      font-size: 30px;
      line-height: 35px;
    }
  }
}
</style>
