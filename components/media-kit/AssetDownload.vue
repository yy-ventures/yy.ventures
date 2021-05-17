<template>
  <div id="asset-download">
    <div class="uk-section text-section uk-padding-remove-vertical">
      <div class="uk-container text-main">
        <h3 class="section-heading">Download Brand Assets</h3>
        <p uk-margin>
          <a
            class="uk-button btn-yyv"
            target="_blank"
            href="/logos/yy_ventures.png"
            download
            >YY Ventures Logo</a
          >
          <a
            class="uk-button btn-yyg"
            target="_blank"
            href="/logos/yy_goshthi.png"
            download
            >YY Goshthi Logo</a
          >

          <a
            class="uk-button btn-yys"
            target="_blank"
            href="/logos/yy_studio.svg"
            download
            >YY Studio Logo</a
          >

          <a
            class="uk-button btn-yys"
            target="_blank"
            href="/logos/sbys.png"
            download
            >SBYS Logo</a
          >

          <!--             <a class="uk-button btn-ihd" target="_blank" href="#">Impact Hub Dhaka Logo</a> -->
          <a
            class="uk-button btn-team"
            target="_blank"
            href="/images/team_avatars.zip"
            download
            >Team Headshots</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less">
#asset-download {
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
      .btn-yyv {
        background: #cb215b;
        color: #fff;
        font-family: 'Graphik';
        font-weight: 500;
      }
      .btn-yyg {
        background: #0b9bbf;
        color: #fff;
        font-family: 'Graphik';
        font-weight: 500;
      }
      .btn-yys {
        background: #8ccc00;
        color: #fff;
        font-family: 'Graphik';
        font-weight: 500;
      }
      .btn-ihd {
        background: #802a26;
        color: #fff;
        font-family: 'Graphik';
        font-weight: 500;
      }
      .btn-team {
        background: #efd30a;
        color: #fff;
        font-family: 'Graphik';
        font-weight: 500;
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

  a {
    font-weight: 600 !important;
  }

  a[href*='sbys'] {
    background: #848484 !important;
  }
}
</style>
