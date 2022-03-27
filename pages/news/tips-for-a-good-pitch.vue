<template>
    <div>
       <GoodPitch/> 
    </div>
</template>

<script>
import GoodPitch from "~/components/news/GoodPitch.vue"
export default{
  components: {
    GoodPitch,
  },
  head: {
    title: 'Tips for a good pitch',
    meta: [
      {
        hid: 'og:title', 
        name: 'og:title', 
        content:  'Tips for a good pitch' 
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'I have often been asked to judge pitches of start-ups. In a good pitch the entrepreneur explains what the problem is the start-up focuses on and how she or he wants to solve it. In this context I always advise that for a good pitch to work, make it personal.'
      },
      { 
        hid: 'og:image', 
        property: 'og:image', 
        content: '/okki-bg.jpg' 
      }
    ],
  }
}
</script>