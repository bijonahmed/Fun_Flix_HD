<template>
<div>

    <div id="loader-main" v-show="showLoader">
        <div id="loader">
        </div>
    </div>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="carousel_slider">
                    <div class="owl-carousel _slide" ref="owlCarousel">
                        <div v-for="(slide, index) in slides" :key="index" class="img_slide">
                            <nuxt-link :to="'/videos/watch?slug=' + slide.redirect_url">
                                <img :src="slide.images" class="img-fluid" :alt="slide.id">
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import 'owl.carousel/dist/assets/owl.carousel.css';

export default {
    data() {
        return {
            showLoader: false,
            slides: [],
            owlCarouselInstance: null,
        };
    },
    async mounted() {
        await this.getSlides();

        if (process.client) {
            this.initOwlCarousel();
        }
    },
    methods: {
        async getSlides() {
            this.showLoader = true;
            try {
                const response = await this.$axios.get('/unauthenticate/sliders');
                this.slides = response.data;
            } catch (error) {
                console.error('Error fetching slides:', error);
            } finally {
                this.showLoader = false; // Hide loader after response or error
            }
        },
        initOwlCarousel() {
            this.$nextTick(() => {
                this.owlCarouselInstance = $(this.$refs.owlCarousel).owlCarousel({
                    items: 3,
                    loop: true,
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 5,
                        },
                    },
                });
            });
        },
    },
    beforeDestroy() {
        if (this.owlCarouselInstance) {
            this.owlCarouselInstance.trigger('destroy.owl.carousel').removeClass('owl-loaded');
            this.owlCarouselInstance.find('.owl-stage-outer').children().unwrap();
        }
    },
};
</script>
