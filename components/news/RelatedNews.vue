<template>
    <!-- news slider -->
    <div class="news-slider">
        <h2 class="highlight">Related</h2>
        <VueSlickCarousel v-bind="settings">
            <div class="new-slide-card">
                <nuxt-link to="/news/go-green"><img src="../../assets/images/news/slider/undp-2.jpg" alt=""></nuxt-link>
                <h3>Go Green Bangladesh Named the Winner of Waste 2 Resources Program</h3>
                <p>Sustainable Solutions to Solid Waste Management project was initiated in 2018 by UNDP with funding from the Swedish International Development Agency (SIDA)...</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="/news/sixth-anniversary"><img src="../../assets/images/news/slider/sixth-1.jpg" alt=""></nuxt-link>
                <h3>6th anniversary celebration of the SDGs at the Embassy of the Netherlands in Bangladesh</h3>
                <p>The Embassy of the Netherlands in Bangladesh celebrated the 6th anniversary of the Sustainable Development Goals (SDGs) by raising flag with four youth leaders from different sectors of Bangladesh...</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="/news/best-aid-ltd"><img src="../../assets/images/news/slider/best-1.jpg" alt=""></nuxt-link>
                <h3>YY Ventures Invests in Best Aid Limited</h3>
                <p>YY Ventures officially announced its investment in Best Aid Limited a promising health care organisation in Bangladesh. On January 23, 2022, Mir Hasib Mahmud, CEO of Best Aid and Shazeeb M Khairul Islam...</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="/news/discussion-forum"><img src="../../assets/images/news/slider/forum-2.jpg" alt=""></nuxt-link>
                <h3>Discussion Forum held on Opportunities & Challenges of Social Entrepreneurship in Bangladesh</h3>
                <p>YY Ventures and the Embassy of the Netherlands in Bangladesh, organised a discussion forum on the theme ‘Opportunities & Challenges of Social Entrepreneurship in Bangladesh...</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="/news/bold-partnership"><img src="../../assets/images/news/slider/rvo-1.jpg" alt=""></nuxt-link>
                <h3>A Bold Partnership Towards a World of Three Zeros</h3>
                <p>YY Ventures has partnered with the Netherlands Enterprise Agency to strengthen the Social Business and start-up ecosystem of Bangladesh and incubate startups that are working...</p>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    import {
        toggle_class_on_focus,
        add_class_on_focus,
    } from "@/assets/scripts/dom_utils";

    export default {
        data(){
            return {
                visible: false,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll:1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                        breakpoint: 768,
                        settings: {
                                arrows: false,
                                slidesToShow: 2
                            }
                        },
                        {
                        breakpoint: 600,
                        settings: {
                                arrows: false,
                                slidesToShow: 1
                            }
                        }
                    ]
                }
            }
        },
        components:{
            VueSlickCarousel 
        },
        mounted: () => {
            toggle_class_on_focus({
            [".highlight"]: "scale",
            });

            add_class_on_focus({
            [".faded_out"]: "fade_in",
            ["#program #top_section"]: "scale_down",
            });
        },
    }

</script>

<style lang="scss" scoped>
    // slider
    .news-slider{
        width: 96%;
        margin: 2.5% auto;
        background: #333;
        padding: 2.5% 5%;
        h2{
            color: #f1f2f2;
            font-weight: 900;
            font-size: calc(24px + 2vw);
            margin: 2.5% 0 5% .5%;
        }
        .new-slide-card{
            padding: 0 2.5%;
            img{
                width: 100%;
                object-fit: cover;
                height: 300px;
            }
            h3{
                color: #f1f2f2;
                font-size: calc(10px + 1vw);
                font-weight: 700;
            }
            p{
                color: #f1f2f2;
            }
        }
    }
</style>