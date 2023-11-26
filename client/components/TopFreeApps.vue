<template>
<div>
    <!-- apps first view part start here  -->
    <div class="apps_first">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <a href="category.html" class="t_link">Top Free Apps <i class="fa-solid fa-angle-right"></i></a>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="apps_f_grid">

                                <div class="apps_box_one" v-for="product in products" :key="product.id">
                                    <nuxt-link :to="'/category/download?slug=' + product.pro_slug">
                                        <div class="aap_fst_tle">
                                            <div class="img_box"><img :src="product.thumnail_img" class="img-fluid" loading="lazy" alt="">
                                            </div>
                                            <div class="m_align">
                                                <h3>{{ product.product_name }}</h3>
                                                <p><span>{{ product.category_name }}</span></p>
                                                <!-- <p>4.5 GB </p> -->
                                            </div>
                                            <div>
                                                <!-- <button class="btn_download">Download</button> -->
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>

                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="ads_sec">
                                <div class="ads_img_long">
                                    <a href="https://pec-shopping.com">
                                        <img src="/images/Neutral_Modern Elegant_Watch_Instagram_Post.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- apps first view part end here  -->
</div>
</template>

<script>
import TopBar from '~/components/TopBar.vue';
import Support from '~/components/Support.vue';
import Footer from '~/components/Footer.vue';

export default {

    components: {
        TopBar,
        Support,
        Footer
    },
    data() {
        return {
            products: [],

        };
    },

    mounted() {
        this.fetchData();

    },
    methods: {
        async fetchData() {
            try {
                const response = await this.$axios.get('/unauthenticate/defaultShowingProduct');
                this.products = response.data;

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
        //end 
    },
    computed: {

    },

};
</script>
