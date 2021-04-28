<template>
  <div id="title">
    <span class="background-accent"
      ><span
        class="inner-span"
        uk-scrollspy="cls:inner-span-animate; hidden:false;  delay:1000; repeat:true"
        ><slot></slot></span
    ></span>
  </div>
</template>
<style lang="less" scoped>
#title {
  font-size: 50px;
  font-family: 'Graphik';
  font-weight: bold;
  color: #3a3b3a;
  text-align: center;
}
.inner-span {
  display: inline;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    width: 0;
    bottom: 10px;
    background: #efd30a;
    height: 25px;
    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    @media @small-down {
      bottom: 0px;
    }
  }
}
.inner-span-animate {
  &::after {
    left: 0;
    right: auto;
    width: 100%;
  }
}
</style>
