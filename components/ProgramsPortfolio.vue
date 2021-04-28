<template>
  <div id="programs-portfolio">
    <h1>Notable Startups</h1>
    <div id="content">
      <img id="content__image" src="~assets/images/programs/garbagemen.png" />
      <div id="description">
        <h2>GARBAGEMAN</h2>
        <div class="tag">Waste Management</div>
        <div class="tag">2018</div>
        <p>
          GARBAGEMAN primarily works to create an efficient, affordable and smooth waste management system by "Upcycling" waste into resources.  They aim to change the socio-economic stance on the system and inspire as well as engage communities in the process.
        </p>

        <img src="~assets/images/programs/community_small.png" />
        <img src="~assets/images/programs/climate.png" />
        <a
          class="uk-icon-button social-icons single-icon"
          uk-icon="twitter"
        ></a>
        <a
          class="uk-icon-button social-icons single-icon"
          uk-icon="facebook"
        ></a>
        <a
          class="uk-icon-button social-icons single-icon"
          uk-icon="instagram"
        ></a>
        <a
          class="uk-icon-button social-icons single-icon"
          uk-icon="linkedin"
        ></a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
h1,
h2,
h3,
p {
  font-family: 'Graphik';
  color: #3a3b3a;
}

h1 {
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 3rem;
}

h2 {
  /* font-weight: 600; */
  font-size: 45px;
}

p {
  margin-top: 3rem;
  margin-bottom: 5rem;
}

.tag {
  background: #2ba4c5;
  display: inline-block;
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  font-weight: bold;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
}

#programs-portfolio {
  /* margin: 0 3rem; */
  padding: 7rem 5rem;
}

#content {
  display: flex;
  align-items: flex-start;

  & > * {
    flex: 1;
  }
  &__image {
    width: 50%;
  }
  img {
    width: 50px;
  }
}

#description {
  padding: 2rem;
}
</style>
