<template>
  <div id="conditions">
    <div id="condition_1">
      <h1>Eligibility</h1>
      <h3>Legal status of business:</h3>
      <p>
        The program is only open to enterprises that are registered in
        Bangladesh or that can demonstrate they will register their business
        within the next 3 months.
      </p>
    </div>

    <div id="condition_2">
      <h3>Stage of ventures:</h3>
      <p>
        We welcome ideas from both enterprises that are in their early stages as
        well those that are more mature. As long as your application shows a
        unique solution
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
