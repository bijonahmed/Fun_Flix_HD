<template lang="en">
<div>

    <TopBar />
    <Slider />
    <!-- <NewsSlider /> -->
    <TopFreeApps />
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

};
</script>
