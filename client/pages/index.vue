<template>
    <div>

        <TopBar />
        <Slider />
        <!-- <NewsSlider /> -->
        <!-- <TopFreeApps /> -->
        <!-- <EssentialApps /> -->
        <Videos />
        <!-- <Courses /> -->
        <Support />
        <Footer />
    </div>
</template>

<script>
import Slider from '~/components/Slider.vue';
import NewsSlider from '~/components/NewsSlider.vue';
import TopFreeApps from '~/components/TopFreeApps.vue';
import Loader from '~/components/Loader.vue';
import TopBar from '~/components/TopBar.vue';
import EssentialApps from '~/components/EssentialApps.vue';
import Videos from '~/components/Videos.vue';
import Courses from '~/components/Courses.vue';
import Support from '~/components/Support.vue';
import Footer from '~/components/Footer.vue';

export default {
    components: {
        Slider,
        Loader,
        NewsSlider,
        TopFreeApps,
        TopBar,
        EssentialApps,
        Videos,
        Courses,
        Support,
        Footer
    },
    async asyncData({ $axios }) {
        try {
            const response = await $axios.get('/meta');
            console.log("response", response.data);
            return {
                meta: response.data, // Save API response
            };
        } catch (error) {
            console.error('Error fetching meta data:', error);
            return {
                meta: {}, // Provide a default value if the API call fails
            };
        }
    },
    head() {
        const meta = this.meta || {}; // Ensure `this.meta` is not undefined
        return {
            title: meta.title || "Welcome to FunflixHD", // Dynamically set title
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    hid: "description",
                    name: "description",
                    content: meta.description || `Dive into the world of entertainment and education at FunFlixHD.com! 
                Explore the latest movies, cutting-edge software, thrilling games, 
                and enriching courses. Your gateway to endless possibilities for leisure and learning awaits!`,
                },
                { name: "format-detection", content: "telephone=no" },
            ],

        };
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>