<template>
  <div id="conditions">
    <div id="condition_1">
      <h1>Eligibility</h1>
      <h3>Legal status of business:</h3>
      <p>
        The program has primarily been designed for the needs of social
        businesses; however, non-profits, for-profits, co-operatives, and
        community contribution businesses are all eligible as long as they serve
        the purpose and they incorporate a sustainable revenue model.
      </p>
    </div>

    <div id="condition_2">
      <h3>Stage of ventures:</h3>
      <p>
        The program is geared towards those at an early stage of development,
        who have an idea they are willing to invest in. Ideally, applicants have
        completed some measure of feasibility assessment and can see themselves
        moving to launch in 4-6 months. Those who have already launched but need
        support to refine their business plan and scale up operations are also
        encouraged to apply.
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
#conditions {
  margin: 3rem;

  h3,
  p {
    font-family: 'Graphik';
    /* margin: 0; */
  }

  h3 {
    font-weight: bold;
    font-size: 20px;
  }

  #condition_1,
  #condition_2 {
    padding: 2rem;
  }

  #condition_1 {
    h1,
    h3,
    p {
      color: white;
    }

    h1 {
      font-weight: 600;
      font-size: 39px;
      letter-spacing: -1px;
    }

    background: #2ca4c5;
  }
  #condition_2 {
    h3,
    p {
      color: #3a3b3a;
    }
    background: #f8d23a;
  }
}
</style>
