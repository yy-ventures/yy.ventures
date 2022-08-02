<template>
  <div>
    <NewsComponent
      :bannerImg="newsDetails && newsDetails.banner_image"
      :title="newsDetails && newsDetails.title"
      :description="newsDetails && newsDetails.long_description"
    />
  </div>
</template>

<script>
import axios from "axios";
import NewsComponent from "~/components/news/NewsComponent.vue";
export default {
  components: {
    NewsComponent,
  },

  async asyncData({ params }) {
    const { id } = params;

    const response = await axios.get("https://yyv.yyventures.org/api/get-news-data");
    const data = await response.data.data;

    // This Part Of the code must be removed once we have the api for single news details
    // const filteredData = data.filter(({ id }) => id === Number(slug));
    // const newsDetails = filteredData[0];
    const newsDetails = data.find((el) => el.id === Number(id));
    // This Part Of the code must be removed once we have the api for single news details

    return { newsDetails };
  },
};
</script>
