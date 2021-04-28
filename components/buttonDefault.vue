<template>
  <div id="button-default">
    <button
      class="uk-button uk-button-default yyv-cta-button"
      @click="$router.push('/about')"
    >
      Learn More
      <span uk-icon="arrow-right"></span>
    </button>
  </div>
</template>

<style lang="less">
.yyv-cta-button {
  background-color: #ffffff;
  border-radius: 50px;

  span {
    border-radius: 50%;
    background-color: #c4125b;
    color: white;
    margin-left: 10px;
  }
}
</style>
