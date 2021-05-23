<template lang="pug">
#application
  application-hero

  form(@submit.prevent="submit()")

    .h3 Section A: Team details
    
    .h5 1. Please mention you team/enterprise name
    input(type="text" required v-model="a01")
    
    .h5 2. How would you like to apply to this challenge?
    .option
      input(type="radio" id="a2_a" v-model="a02" value="As an individual/group with a WASH solution" required name="a02")
      label(for="a2_a")
        .p a. As an individual/group with a WASH solution
    .option
      input(type="radio" id="a2_b" v-model="a02" value="An existing WASH enterprise/organisation with a new WASH solution" name="a02")
      label(for="a2_b")
        .p b. An existing WASH enterprise/organisation with a new WASH solution
    .option
      input(type="radio" id="a2_c" v-model="a02" value="An existing enterprise/organisation, from a different industry, with a new WASH solution" name="a02")
      label(for="a2_c")
        .p c. An existing enterprise/organisation, from a different industry, with a new WASH solution

    .h5 3. If you have chosen b or c, tell us about the mission and vision of your enterprise? (80-150 words)
    input(type="text" v-model="a03a")

    .h5 4. If you have chosen b or c, tell us the type of your business entity
    .option
      input(type="radio" id="a03b_a" v-model="a03b" value="Public limited")
      label(for="a03b_a")
        .p Public limited
    .option
      input(type="radio" id="a03b_b" v-model="a03b" value="Private limited")
      label(for="a03b_b")
        .p Private limited
    .option
      input(type="radio" id="a03b_c" v-model="a03b" value="Sole proprietorship")
      label(for="a03b_c")
        .p Sole proprietorship
    .option
      input(type="radio" id="a03b_d" v-model="a03b" value="Not for profit")
      label(for="a03b_d")
        .p Not for profit
    .option
      input(type="radio" id="a03b_e" v-model="a03b" value="Not registered")
      label(for="a03b_e")
        .p Not registered
    .option
      input(type="radio" id="a03b_f" v-model="a03b" value="Registered abroad with a local partner in Bangladesh")
      label(for="a03b_f")
        .p Registered abroad with a local partner in Bangladesh
    .option
      input(type="radio" id="a03b_g" v-model="a03b" value="Other" name="a03b")
      label(for="a03b_g")
        .p Other
    
    .h5 5. How big (in number) is your founding/leadership team?
    input(type="number" v-model="a04" required)
    
    .h5 6a. Member 1 name
    input(type="text" v-model="a05a")
    .h5 6b. Member 1 role
    input(type="text" v-model="a05b")
    .h5 6c. Member 1 social media handle
    input(type="url" v-model="a05c")
    
    .h5 7a. Member 2 name
    input(type="text" v-model="a06a")
    .h5 7b. Member 2 role
    input(type="text" v-model="a06b")
    .h5 7c. Member 2 social media handle
    input(type="url" v-model="a06c")
    
    .h5 8a. Member 3 name
    input(type="text" v-model="a07a")
    .h5 8b. Member 3 role
    input(type="text" v-model="a07b")
    .h5 8c. Member 3 social media handle
    input(type="url" v-model="a07c")
    
    .h5 9. Team leader’s name
    input(type="text" v-model="a08" required)
    .h5 10. Team leader’s contact number
    input(type="tel" v-model="a09" required)
    .h5 11. Team leader’s email
    input(type="email" v-model="a10" required)
    .h5 12. Team leader’s social media handle
    input(type="url" v-model="a11")
    
    .h3 Section B: Your Solution
    
    .h5 13. What WASH (water, sanitation and hygiene) problem are you solving?
    .option
      input(type="checkbox" id="b1_a" v-model="b1" name="b1" value="Water")
      label(for="b1_a")
        .p Water
    .option
      input(type="checkbox" id="b1_b" v-model="b1" name="b1" value="Sanitation")
      label(for="b1_b")
        .p Sanitation
    .option
      input(type="checkbox" id="b1_c" v-model="b1" name="b1" value="Hygiene")
      label(for="b1_c")
        .p Hygiene
    
    .h5 14. What is your solution(s)? (50-100 words)
    textarea(v-model="b2")
    .h5 15. What is unique about your innovation? Do you have any digital elements in your solution e.g. digital payment, digital marketing of services or any other digital tools? (50-100 words)
    textarea(v-model="b3")
    
    .h5 16. Which of the following best reflects the stage of your innovation?
    .option
      input(type="radio" id="b4_a" v-model="b4" name="b4" required value="Research / Feasibility Stage:  We are in the process of studying the feasibility of our idea")
      label(for="b4_a")
        .p a. Research / Feasibility Stage:  We are in the process of studying the feasibility of our idea
    .option
      input(type="radio" id="b4_b" v-model="b4" name="b4" value="Startup: We have launched our business and have been running for less than a year")
      label(for="b4_b")
        .p b. Startup: We have launched our business.
    .option
      input(type="radio" id="b4_c" v-model="b4" name="b4" value="Scale-up: We have generated initial revenues from our solution and are preparing for scaling")
      label(for="b4_c")
        .p c. Scale-up: We have generated initial revenues from our solution and are preparing for scaling

    .h5 17. If you have chosen b, specify the timeline of your innovation's existance
    .option
      input(type="radio" id="b5_a" v-model="b5" name="b5" value="0-6 months")
      label(for="b5_a")
        .p 0-6 months
    .option
      input(type="radio" id="b5_b" v-model="b5" name="b5" value="6-12 months")
      label(for="b5_b")
        .p 6-12 months
    .option
      input(type="radio" id="b5_c" v-model="b5" name="b5" value="1-2 years")
      label(for="b5_c")
        .p 1-2 years
    .option
      input(type="radio" id="b5_d" v-model="b5" name="b5" value="More than 2 years")
      label(for="b4_d")
        .p More than 2 years

    .h5 18. If you have chosen c, please specify the amount of your initial revenue
    .option
      input(type="radio" id="b6_a" v-model="b6" name="b6" value="BDT 0-50,000")
      label(for="b6_a")
        .p BDT 0-50,000
    .option
      input(type="radio" id="b6_b" v-model="b6" name="b6" value="BDT 50,000-100,000")
      label(for="b6_b")
        .p BDT 50,000-100,000
    .option
      input(type="radio" id="b6_c" v-model="b6" name="b6" value="BDT 100,000-200,000")
      label(for="b6_c")
        .p BDT 100,000-200,000
    .option
      input(type="radio" id="b6_d" v-model="b6" name="b6" value="More than BDT 200,000")
      label(for="b6_d")
        .p More than BDT 200,000
    
    .h3 Section C: Impact of your solution
    .h5 19. What is your current impact? How do you measure it? (50- 100 words)
    textarea(v-model="c1")
    .h5 20. Please tell us about the WASH community you are providing service to? (20-50 words)
    textarea(v-model="c2")
    .h5 21. Who are you building the business with or for? (20- 50 words)
    textarea(v-model="c3")
    .h5 22. Do you have any other stakeholders apart from consumers/customers? (Please mention names of any affiliated NGOs, Non-profit organisations etc.) 
    textarea(v-model="c4")
    
    .h3 Section D: Purpose of Your Participation
    
    .h5 23. What does change look like for you? (30-100 words)
    textarea(v-model="d1")
    .h5 24. What do you want to achieve in 2030 for your community through your enterprise? (30-100 words)
    textarea(v-model="d2")
    
    .h5 25. Why do you wish to join our innovation challenge? (20-50 words)
    textarea(v-model="d6")
    
    .h5 26. Keeping the current pandemic in consideration, will you be able to attend the boot camp in June 2021 physically in Dhaka for 3 days?
    .option
      input(type="radio" id="d4_a" v-model="d4" name="d4" required value="Yes")
      label(for="d4_a")
        .p Yes
    .option
      input(type="radio" id="d4_b" v-model="d4" name="d4" value="No")
      label(for="d4_b")
        .p No
    //- .option
    //-   input(type="radio" id="d4_c" v-model="d4" name="d4" value="Depends")
    //-   label(for="d4_c")
    //-     .p Depends
    
    .h5 27. Which of these topics will you benefit knowing the most about
    .option
      input(type="radio" id="d5_a" v-model="d5" name="d5" required value="how to improve my value proposition")
      label(for="d5_a")
        .p how to improve my value proposition
    .option
      input(type="radio" id="d5_b" v-model="d5" name="d5" value="how to find the right revenue model")
      label(for="d5_b")
        .p how to find the right revenue model
    //- .option                                                                                  */
    //-   input(type="radio" id="d5_c" v-model="d5" name="d5" value="regulations in Bangladesh") */
    //-   label(for="d5_c")                                                                      */
    //-     .p regulations in Bangladesh                                                         */
    .option
      input(type="radio" id="d5_c" v-model="d5" name="d5" value="what are the business-related regulations in Bangladesh & how they work")
      label(for="d5_c")
        .p what are the business-related regulations in Bangladesh & how they work
    .option
      input(type="radio" id="d5_d" v-model="d5" name="d5" value="how to select metrics that will help scale my business")
      label(for="d5_d")
        .p how to select metrics that will help scale my business
    .option
      input(type="radio" id="d5_e" v-model="d5" name="d5" value="how to get selected by investors & receive the funding my business needs")
      label(for="d5_e")
        .p how to get selected by investors & receive the funding my business needs

    .option
      input(type="radio" id="d5_c" v-model="d5" name="d5" value="other")
      label(for="d5_d")
        .p other

    .h5 28. Why do you wish to join our boot camp?
    .option
      input(type="radio" id="d3_a" v-model="d3" name="d3" required value="to improve my value proposition")
      label(for="d3_a")
        .p to improve my value proposition
    .option
      input(type="radio" id="d3_b" v-model="d3" name="d3" value="to find the right revenue model")
      label(for="d3_b")
        .p to find the right revenue model
    .option
      input(type="radio" id="d3_c" v-model="d3" name="d3" value="to reach my consumers")
      label(for="d3_c")
        .p to reach my consumers
    .option
      input(type="radio" id="d3_d" v-model="d3" name="d3" value="to create a sustainable business model")
      label(for="d3_d")
        .p to create a sustainable business model
    .option
      input(type="radio" id="d3_e" v-model="d3" name="d3"  value="to create a winning pitch")
      label(for="d4_e")
        .p to create a winning pitch
    .option
      input(type="radio" id="d3_f" v-model="d3" name="d3"  value="other")
      label(for="d4_f")
        .p other
    
    .h3 Section E: Additional Information
    
    .h5 Do you have a pitch deck? (Share the link)
    input(type="text" v-model="e1")

    //- .h5 29. Do you have a pitch deck? (Upload here)
    //- input(type="file")

    .h5 30. Where can we find more information on your WASH venture? (Please provide links to your website/ social media page/ both.  Write N/A if you do not have any.)
    input(type="text" v-model="e2")
    
    .h5 31. How were you informed about this challenge?
    .option
      input(type="radio" id="e3_a" v-model="e3" name="e3" required value="Search engine")
      label(for="e3_a")
        .p Search engine
    .option
      input(type="radio" id="e3_b" v-model="e3" name="e3" value="Youth organisation website")
      label(for="e3_b")
        .p Youth organisation website
    .option
      input(type="radio" id="e3_c" v-model="e3" name="e3" value="Social media")
      label(for="e3_c")
        .p Social media
    .option
      input(type="radio" id="e3_d" v-model="e3" name="e3" value="Peers & colleagues")
      label(for="e3_d")
        .p Peers & colleagues
    .option
      input(type="radio" id="e3_e" v-model="e3" name="e3" value="other")
      label(for="e3_e")
        .p other
    
    input(id="consent" type="checkbox" required)
    label(for="consent")
      .p I agree to the 
      .tooltip
        .tooltip__title &nbsp terms of service
        .tooltip__content
          .p I give my consent for using my personal information* and photographs and videos taken of me during the WASH Innovation Challenge in Bangladesh, including its boot camps and related activities held between April 18 2021 and June 30 2021 for Aqua for All’s internal and external communications, marketing and promotional purposes, both offline and online.   
          .p *Personal information was provided in the registration/ application form, teaser application or any other means and is relevant to my professional relationship with Aqua for All.  
          .p Signing the statement of consent is not compulsory. Not signing the statement of consent does not affect your participation in this meeting, your relationship with Aqua for All or any of its partners. Without granting consent, we will not be able to feature or endorse you or your company. 
          .p You can withdraw your consent at any time by sending an e-mail to info@aquaforall.org without providing any explanation as such on the withdrawal.


    input(type="submit")

    .h5.message(v-if="this.show_message") The form was submitted succesfully. Redirecting to Home.
</template>

<script>
import ApplicationHero from '~/components/ApplicationHero';
import { post } from '@/assets/scripts/api';

export default {
  components: {
    ApplicationHero,
  },
  methods: {
    submit: async function () {
      this.show_message = true;
      const body = {
        records: [
          {
            fields: {
              a01: this.a01,
              a02: this.a02,
              a03a: this.a03a,
              a03b: this.a03b,
              a04: this.a04,
              a05a: this.a05a,
              a05b: this.a05b,
              a05c: this.a05c,
              a06a: this.a06a,
              a06b: this.a06b,
              a06c: this.a06c,
              a07a: this.a07a,
              a07b: this.a07b,
              a07c: this.a07c,
              a08: this.a08,
              a09: this.a09,
              a10: this.a10,
              a11: this.a11,
              b1: this.b1.toString(),
              b2: this.b2,
              b3: this.b3,
              b4: this.b4,
              b5: this.b5,
              b6: this.b6,
              c1: this.c1,
              c2: this.c2,
              c3: this.c3,
              c4: this.c4,
              c5: this.c5,
              d1: this.d1,
              d2: this.d2,
              d3: this.d3,
              d4: this.d4,
              d5: this.d5,
              d6: this.d6,
              e1: this.e1,
              e2: this.e2,
              e3: this.e3,
            },
          },
        ],
      };
      const result = await post(
        'https://api.airtable.com/v0/app97k1gKWMzS1gAb/wash?maxRecords=3&view=Grid%20view',
        body,
        'keyeO9hj3se3riNda'
      );
      setTimeout(() => {
        window.location.href = 'https://yy.ventures';
      }, 3000);
    },
  },
  data: () => ({
    a01: '',
    a02: '',
    a03a: '',
    a03b: '',
    a04: '',
    a05a: '',
    a05b: '',
    a05c: '',
    a06a: '',
    a06b: '',
    a06c: '',
    a07a: '',
    a07b: '',
    a07c: '',
    a08: '',
    a09: '',
    a10: '',
    a11: '',
    b1: [],
    b2: '',
    b3: '',
    b4: '',
    b5: '',
    b6: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    d5: '',
    d6: '',
    e1: '',
    e2: '',
    e3: '',
    fields: {
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6a: '',
      q6b: '',
      q6c: '',
      q7a: '',
      q7b: '',
      q7c: '',
      q8a: '',
      q8b: '',
      q8c: '',
      q9: '',
      q10: '',
      q11: '',
      q12: '',
      q13: '',
      q14: '',
      q15: '',
      q16: '',
      q17: '',
      q18: '',
      q19: '',
      q20: '',
      q21: '',
      q22: '',
      q23: '',
      q24: '',
      q25: '',
      q26: '',
      q27: '',
      q28: '',
      q29: '',
      q30: '',
      q31: '',
    },
    show_message: false,
  }),
};
</script>

<style lang="sass">
#application
  form
    padding: clamp(25px, 5vw, 50px)
    border-radius: 15px
    box-shadow: 0 0 3px 3px grey
    margin: 50px auto

    width: 95%
    @media (min-width: 601px)
      width: 75%

    .h5, .h3
      color: $fg_dark_title

    .h5
      margin: 15px 0

    .h3
      margin: 25px 0

    input[type='text'],
    input[type='number'],
    input[type='submit'],
    input[type='email'],
    input[type='tel'],
    input[type='url'],
    input[type='file'],
    textarea
      width: 100%
      border: 1px solid lightgrey
      padding: 10px
      border-radius: 10px
    textarea
      height: 100px

    input[type='submit']
      font-family: "Graphik"
      font-weight: bold
      font-size: clamp(16px, 2.1vw, 18px)
      color: $fg_light_title
      background: $yy_magenta
      &:hover
        filter: brightness(90%)
        cursor: pointer

    .p
      color: $fg_dark_text
      display: inline-block
      margin-left: 5px

    #consent
      margin: 25px 0
      margin-right: 5px

    .message
      color: green
</style>
