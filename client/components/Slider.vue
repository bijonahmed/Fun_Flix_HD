<template>
<div>

    <!-- slider part start here  -->
    <div class="slider_sec">
        <div id="loader-main" v-show="showLoader">
            <div id="loader">
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <br/>
                    <div class="carousel_slider">
                        <div class="owl-carousel _slide">
                            <div v-for="(slide, index) in slides" :key="index" class="img_slide">
                                <img :src="slide.images" class="img-fluid" alt="" loading="lazy" @click="sliderVideoWatch()">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- slider part end here  -->
</div>
</template>

<script>
export default {
    data() {
        return {
            showLoader: true,
            slides: [],
        };
    },
    // name: 'Slider', // Make sure the name is specified

    mounted() {
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        //inializae 
        this.getSlides();
        // Initialize Owl Carousel
        this.$nextTick(() => {
            $('.owl-carousel').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                margin: 8,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1,

                    },
                    768: {
                        items: 2,

                    },
                    992: {
                        items: 3,
                    },
                    1200: {
                        items: 6,
                    },
                    1500: {
                        items: 6,
                    }
                }
            });
        });
    },
    methods: {
        sliderVideoWatch(){
           console.log("slider...");
        },
        async getSlides() {
            /*
            const response = await this.$axios.get('/unauthenticate/sliders');
            return this.slides = response.data;
            this.slides = response.data;
            */
            return this.slides = [{
                    href: "videos/watch?slug=Movie-1",
                    images: "/slider_image/01.jpg"
                },
                {
                    href: "/videos/watch?slug=Movie-2",
                    images: "/slider_image/02.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/03.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/04.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/05.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/06.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/07.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/08.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/09.jpg"
                },
                {
                    href: "details.html",
                    images: "/slider_image/10.jpg"
                },

                // ... add more slides as needed
            ];

        },
    }
};
</script>
