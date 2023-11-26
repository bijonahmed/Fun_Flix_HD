<template>
<div>
    <TopBar />
    <br /> <br />
    <!-- banner part start here  -->
    <!-- banner part start here  -->
    <div class="essential_ cat_banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="essential_box" style="min-height: 30vh;display: block;">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row essential_d ">
                                    <!-- <div class=""> -->
                                    <div class="col-md-7 d-flex align-items-center">
                                        <h1 class="m-0 ms-3">{{ product_name }}</h1>
                                    </div>
                                    <div class="col-md-5 ">
                                        <div class="essential_d_store_link text-center">
                                            <a href="#"><img src="/images/Play.png" class="img-fluid" loading="lazy" alt=""></a>
                                            <a href="#"><img src="/images/Apple.png" class="img-fluid" loading="lazy" alt=""></a>
                                        </div>
                                        <p class="text-end me-3">Download FunFlix HD app for watching popular netflix
                                            movies and series for free.</p>
                                    </div>
                                    <!-- </div> -->
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- banner part end here  -->

    <!-- apps grid part start here  -->
    <div class="apps_second cat_apps_view apps_view_box app_page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="app_icon_details">
                        <br/>
                        <!-- <img :src="thumnail_img" class="img-fluid" loading="lazy" alt=""> -->
                        <!-- <h3>Media Encoder </h3> -->
                        <button type="button" class="_btn_share mt-3" data-bs-toggle="modal" data-bs-target="#share" @click="shareLink"><i class="fa-solid fa-share-nodes"></i>Share</button>
                        <!-- <a href="//telegram.org">Telegram.com</a> :href="download_link"-->
                        <a :href="download_link" class="btn_download" target="_blank">Download</a>
                        <span>Total Download: 9999</span>

                        <!-- Modal -->
                        <div class="modal fade" id="share" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div class="share_options">
                                            <div class="d-flex justify-content-end">
                                                <div>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                            </div>
                                            <div>
                                                <h6 style="color: #000;">Share this with your social Community</h6>
                                                <div class="socials">
                                                    <a href="https:/web.whatsapp.com" target="_blank"><img src="/images/whatsapp-100.png" alt=""></a>
                                                    <a href="https://www.messenger.com/" target="_blank"><img src="/images/facebook-messenger-100.png" alt=""></a>
                                                    <a href="https://web.telegram.org/" target="_blank"><img src="/images/telegram.png" alt=""></a>
                                                </div>
                                            </div>
                                            <div class="copy_link">
                                                <h6 style="color: #000;">Or copy link : </h6>
                                                <div class="input_box">
                                                    <input type="text" v-model="fullUrl">
                                                    <button type="button">Copy </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">

                    <div class="app_de">
                        <div class="card">
                            <div class="card-header">
                                <h5>Description</h5>
                            </div>
                            <div class="card-body">
                                <p class="description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="ads_img mt-3">
                        <img src="/images/ads_size/ads_long.jpeg" class="img-fluid" loading="lazy" alt="">
                    </div>
                    <div class="app_list_">
                        <h6>People also view </h6>
                        <div class="essential_grid _apps mb-2">

                            <div class="apps_box_two" v-for="product in popularCategorys" :key="product.id">
                                <nuxt-link :to="'/category/download?slug=' + product.pro_slug" target="_blank">
                                    <div class="s_img_box">
                                        <div class="blur_box" style=" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/media_encoder.jpg);">
                                        </div>

                                        <img :src="product.thumnail_img" class="img-fluid" loading="lazy" alt="">
                                    </div>
                                    <div class="d_box">
                                        <h3>{{ product.product_name }}</h3>
                                        <div class="d-flex  align-items-center">
                                            <!--<p>9.99 GB</p>-->
                                            <nuxt-link :to="'/category/download?slug=' + product.pro_slug" class="btn_download" target="_blank">Download</nuxt-link>
                                        </div>
                                    </div>

                                </nuxt-link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <Support />
    <Footer />
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
            popularCategorys: [],
            showLoader: false,
            product_name: '',
            description: '',
            thumnail_img: '',
            download_link: '',
            fullUrl: '',
        };
    },

    head: {
        title: 'Download Software',
    },
    mounted() {
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        const paramSlug = this.$route.query.slug;
        console.log("paramSlug: " + paramSlug);
        this.fetchData();

    },
    methods: {
        shareLink() {
            const path = window.location.href;
            // console.log(path);
            this.fullUrl = path;

        },
        async fetchData() {
            try {
                const response = await this.$axios.get('/unauthenticate/getProductrow', {
                    params: {
                        slug: this.$route.query.slug
                    },
                });
                this.product_name = response.data.product_name;
                this.thumnail_img = response.data.thumnail_img;
                this.download_link = response.data.download_link;
                $(".description").html(response.data.description);
                this.popularProduct(response.data.category_slug);

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },

        async popularProduct(category_slug) {
            console.log("caregory slug: " + category_slug);
            try {
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: category_slug
                    },
                });
                this.popularCategorys = response.data.result;

            } catch (error) {
                // console.error('Error fetching data:', error);
            }

        },

        //end 
    },
};
</script>
