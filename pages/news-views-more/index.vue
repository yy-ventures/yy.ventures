<template>
    <div>
        <NewsHero/>
        <NewsContainer/>
        <ViewsContainer/>
        <StoriesContainer/>
    </div>
</template>
    
<script>
import NewsHero from "~/components/news-views-more/NewsHero.vue";
import NewsContainer from "~/components/news-views-more/NewsContainer.vue";
import ViewsContainer from "~/components/news-views-more/ViewsContainer.vue";
import StoriesContainer from "~/components/news-views-more/StoriesContainer.vue";


export default {
  components: {
    NewsHero,
    NewsContainer,
    ViewsContainer,
    StoriesContainer,
  },
};
</script>

<style>
</style>