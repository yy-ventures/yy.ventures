<template>
    <div>
    <div class="yunus-news-container">
        <div class="yunus-news-header">
            <div class="header-left">
                <div>
                    <h1 class="highlight">Tips for a good pitch</h1>
                </div>
                <div>
                    <p>I have often been asked to judge pitches of start-ups. In a good pitch the entrepreneur explains what the problem is the start-up focuses on and how she or he wants to solve it. In this context I always advise that for a good pitch to work, make it personal. </p>
                </div>
                <div class="author">
                    <h5>Akkie Okma </h5>
                    <p>Technical Advisor, YY Ventures </p>
                </div>
            </div>
            <div class="header-right">
                
            </div>
        </div>
        <div class="yunus-news-body">
            <div class="body-block">
                <p>A few days ago, I watched a documentary about a production of a new dance performance. It started with a charming introduction of the choreographer. We see him while he is walking his dog in the park. He tells – as he throws a stick for his dog to catch – that he has been a dancer his whole life. He performed in productions of major choreographers in big theaters. As a kid he had been an introvert and was very shy. His mother suggested to him to take ballet lessons. Since the moment he started to dance, he realized he loved it. Ever since, it brought him so much joy and ultimately it has become his way to express himself to the world. During his walk in the park he stretches himself and he practices dance movements. The dog follows him, happily running with the stick in his mouth. </p>
                <p>I wish for anyone who is preparing to give a pitch about him or herself would have been able to watch this documentary. Because this pitch is so perfect, the image is clear; this man is a ballet dancer, it means everything to him and it’s the joy of his life. It doesn’t surprise us that this man is nowadays a world-renowned choreographer. There is no light between the introduction and the rest of the movie, as it is convincingly aligned with the story it conveys. </p>
                <p>I have often been asked to judge pitches of start-ups. In a good pitch the entrepreneur explains what the problem is the start-up focuses on and how she or he wants to solve it. In this context I always advise that for a good pitch to work, make it personal. Tell something about yourself, your education and your experiences. Because if you do so, you will find out that it is easier to make a connection with your audience. Make it specific, by telling something about your childhood or the values your parents brought you up with. Share with the audience what you are curious about and what you would like to find out. Share your dreams about the future. </p>
            </div>
        </div>
        <div class="yunus-news-footer">
            <a href="/news-views-more">Back</a>
        </div>
    </div>
    <!-- <RelatedNews/> -->
    </div>
</template>

<script>
import {
  toggle_class_on_focus,
  add_class_on_focus,
} from "@/assets/scripts/dom_utils";
import News from '~/components/news/News.vue';
import RelatedNews from "~/components/news/RelatedNews.vue";
export default {
  mounted: () => {
    toggle_class_on_focus({
      [".highlight"]: "scale",
    });

    add_class_on_focus({
      [".faded_out"]: "fade_in",
      ["#program #top_section"]: "scale_down",
    });
  },
  components: {
      RelatedNews,
      News
  }
};
</script>

<style lang="scss" scoped>
    .yunus-news-container{
        margin: 0 auto;
        width: 96%;
        padding: 5% 0;
        font-family: "Graphik";
        @media screen and (max-width: 601px) {
            width: 90%;
        }
        .yunus-news-header{
            height: 700px;
            margin-top: 5%;
            background-image: url("~/assets/images/news/okki-bg.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            grid-template-columns: 1fr 1fr;
            @media screen and (min-width: 1441px) {
                height: 800px;
            }
            @media screen and (max-width: 601px) {
                grid-template-columns: 1fr;
                background-image: url("~/assets/images/news/okki-mobile.jpg");
            }
            .header-left{
                padding: 10% 0 5% 5%;
                h1{
                    margin: 0;
                    font-size: calc(32px + 2vw);
                    color: #fff;
                }
                p{
                    padding: 10% 5% 5% 0;
                    font-weight: bold;
                    font-size: calc(10px + 1vw);
                    margin: 0;
                    color: #fff;
                }
                .author{
                    h5{
                        margin: 0;
                        font-size: 14px;
                        font-weight: 900;
                        color: #fff;
                        @media screen and (max-width: 601px) {
                            font-size: 10px;
                        }
                    }
                    p{
                        padding: 0;
                        font-size: 14px;
                        font-weight: 400;
                        @media screen and (max-width: 601px) {
                            font-size: 10px;
                        }
                    }
                }
            }
            .header-right{
                position: relative;
                img{
                    width: 90%;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    @media screen and (max-width: 601px) {
                        position: relative;
                        margin-left: 5%;
                    }
                }
            }
        }
        .yunus-news-body{
            margin-top: 5%;
            padding: 2.5% 2.5%;
            background: #f1f2f2;
            @media screen and (max-width: 601px) {
                padding: 2.5% 5%;
            }
            .body-block{
                margin-top: 2.5%;
                h2{
                    font-weight: 900;
                    margin: 0;
                }
                p{
                    color: #333;
                    .text-bold{
                        font-weight: 700;
                    }
                }
                img{
                    width: 100%;
                }
                .space-top{
                    margin-top: 2.5%;
                }
            }
            .body-block-grid{
                padding: 5% 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                @media screen and (max-width: 601px) {
                    grid-template-columns: 1fr;
                }
                .body-block-left{
                    img{
                        width: 100%;
                    }
                }
                .body-block-right{
                    padding: 0 5%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    @media screen and (max-width: 601px) {
                        padding: 5% 0;
                    }
                    h1{
                        margin: 0;
                        font-size: calc(32px + 2vw);
                        color: #333;
                    }
                    p{
                        padding: 10% 5% 0 0;
                        font-weight: bold;
                        font-size: calc(10px + 1vw);
                        margin: 0;
                    }
                }
            }
        }
        .yunus-news-footer{
            padding: 2.5% 0;
            a{
                padding: 8px 32px;
                border: 2px solid #999;
                color: #333;
            }
        }
    }
</style>