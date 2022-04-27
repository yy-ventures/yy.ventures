<template>
    <div>
       <BoldInnovations/> 
    </div>
</template>

<script>
import BoldInnovations from "~/components/news/BoldInnovations.vue"
export default{
  components: {
    BoldInnovations,
  },
  head: {
    title: 'Bold innovations to improve water and sanitation for all: The WASH Innovation Challenge',
    meta: [
      {
        hid: 'og:title', 
        name: 'og:title', 
        content:  'Bold innovations to improve water and sanitation for all: The WASH Innovation Challenge' 
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'YY Ventures had partnered with Aqua for All, Bopinc and GSMA to launch the WASH Innovation Challenge in April, 2021, with the collective mission to achieve Sustainable Development Goal 6 - Clean water and sanitation for all, by empowering the most promising WASH entrepreneurs working on improving the water, sanitation, and hygiene conditions of underserved communities in Bangladesh. '
      },
      { 
        hid: 'og:image', 
        property: 'og:image', 
        content: '/bold-2.jpg' 
      }
    ],
  }
}
</script>