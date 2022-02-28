<template>
    <!-- news slider -->
    <div class="news-slider">
        <h2 class="highlight">Related</h2>
        <VueSlickCarousel v-bind="settings">
            <div class="new-slide-card">
                <nuxt-link to="#"><img src="../../assets/images/news/slider/slideTest.jpg" alt=""></nuxt-link>
                <h3>Meet The Top Innovators At WASH Innovation Challenge</h3>
                <p>a full range of corporate services including design and management of innovation programs like incubators, accelerators, innovation challenges, design sprints and venture building.</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="#"><img src="../../assets/images/news/slider/slideTest.jpg" alt=""></nuxt-link>
                <h3>Meet The Top Innovators At WASH Innovation Challenge</h3>
                <p>a full range of corporate services including design and management of innovation programs like incubators, accelerators, innovation challenges, design sprints and venture building.</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="#"><img src="../../assets/images/news/slider/slideTest.jpg" alt=""></nuxt-link>
                <h3>Meet The Top Innovators At WASH Innovation Challenge</h3>
                <p>a full range of corporate services including design and management of innovation programs like incubators, accelerators, innovation challenges, design sprints and venture building.</p>
            </div>
            <div class="new-slide-card">
                <nuxt-link to="#"><img src="../../assets/images/news/slider/slideTest.jpg" alt=""></nuxt-link>
                <h3>Meet The Top Innovators At WASH Innovation Challenge</h3>
                <p>a full range of corporate services including design and management of innovation programs like incubators, accelerators, innovation challenges, design sprints and venture building.</p>
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