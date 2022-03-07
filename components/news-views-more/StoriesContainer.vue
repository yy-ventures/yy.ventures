<template>
    <div>
        <div class="news-container">
            <!-- news grid -->
            <div class="news-grid">
                <div class="news-grid-left">
                    <div class="img-header">
                        <img src="~/assets/images/news/kick-1.jpg" alt="">
                    </div>
                    <div>
                        <h2>stories</h2>
                    </div>
                </div>
                <div class="news-grid-right">
                    <div class="news-grid-card">
                        <div class="card-header">
                            <h5>Kick the virus - Here’s how our tribe is fighting the pandemic </h5>
                        </div>
                        <div class="card-footer">
                            <nuxt-link to="/news/kick-the-virus">Read More</nuxt-link>
                        </div>
                    </div>
                    <div class="news-grid-card">
                        <div class="card-header">
                            <h5>Waste or Opportunity? - A ground-breaking approach by GARBAGEMAN</h5>
                        </div>
                        <div class="card-footer">
                            <nuxt-link to="/news/waste-opportunity">Read More</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- news footer -->
            <!-- <div class="news-footer" id="btn-1">
                <button v-on:click="visible = !visible">{{ !visible ? 'load more' : 'show less' }}
                    <span v-if="visible" class="arrow-down"><img src="~/assets/images/downArrowRev.svg" alt=""></span>
                    <span v-else class="arrow-down"><img src="~/assets/images/downArrow.svg" alt=""></span>
                </button>
            </div> -->
            <!-- news slider -->
            <!-- <div class="news-slider" v-if="visible">
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
            </div> -->
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default{
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
        }
    }
</script>

<style lang="scss" scoped>
    .news-container{
        padding: 10% 5%;
        height: auto;
        background: #333;
        width: 96%;
        margin: 0 auto 2.5% auto;
        @media screen and (min-width: 601px) {
            padding: 5% 5%;
        }
        // news grid
        .news-grid{
            display: grid;
            grid-template-columns: 1fr;
            gap: 4%;
            @media screen and (min-width: 601px) {
                grid-template-columns: 1fr 1fr;
            }
            .news-grid-left{
                position: relative;
                height: 400px;
                @media screen and (min-width: 1441px) {
                    height: 500px;
                }
                .img-header{
                    height: 100%;
                    width: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                h2{
                    font-size: 80px;
                    font-weight: 900;
                    text-transform: capitalize;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    margin: 0;
                    -webkit-text-fill-color: transparent;
                    -webkit-text-stroke: 1px #f1f2f2;
                    @media screen and (min-width: 601px) {
                        font-size: 140px;
                        bottom: -70px;
                        -webkit-text-stroke: 2px #f1f2f2;
                    }
                }
            }
            .news-grid-right{
                padding: 2.5%;
                overflow-y: hidden;
                height: 400px;
                @media screen and (min-width: 1441px) {
                    height: 500px;
                }
                .news-grid-card{
                    padding: 2.5% 1%;
                    box-shadow: 2px 2px 5px rgba($color: #000000, $alpha: 0.1);
                    margin-top: 4%;
                    h5{
                        color: #f1f2f2;
                        font-size: calc(10px + 1vw);
                        font-weight: 700;
                    }
                    .card-footer{
                        text-align: right;
                        a{
                            padding: 1% 2%;
                            border: 1px solid #f1f2f2;
                            color: #c7265b;
                        }
                    }
                }
            }
        }
        // news footer
        .news-footer{
            padding: 2.5%;
            margin-top: 2.5%;
            text-align: center;
            button{
                @media screen and (max-width:600px) {
                    margin-top: 10%;
                }
                outline: 0;
                padding: 0.5% 1%;
                width: 170px;
                border: 1px solid #c7265b; 
                background: inherit;
                text-transform: capitalize;
                color: #f1f2f2;
                font-size: 16px;
                cursor: pointer;
                .arrow-down{
                    img{
                        height: 12px;
                        margin-left: 2.5%;
                    }
                }
            }
            p{
                color: #f1f2f2;
            }
        }
        // slider
        .news-slider{
            animation: visibleAnimate 0.3s linear;
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
    }
    @keyframes visibleAnimate {
        0%{
            transform: translateY(-10%);
        }
        100%{
            transform: translateY(0);
        }
    }
</style>