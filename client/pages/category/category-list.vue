<template>
<div>
    <TopBar />
    <br><br>
    <!-- Banner part starts here -->
    <div class="essential_ cat_banner">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="essential_box eseheight">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row essential_d">
                                    <div class="col-md-7 d-flex align-items-center">
                                        <h1 class="m-0 ms-3">{{ categoryname }}</h1>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="essential_d_store_link text-center">
                                            <a href="#"><img src="/images/Play.png" class="img-fluid" loading="lazy" alt=""></a>
                                            <a href="#"><img src="/images/Apple.png" class="img-fluid" loading="lazy" alt=""></a>
                                        </div>
                                        <p class="text-end me-3">Download FunFlix HD app for watching popular Netflix movies and series for free.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Banner part ends here -->
    <!-- new apps part start here  -->
    <section class="n_apps">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10">
                    <div id="loader-main" v-show="showLoader">
                        <div id="loader"></div>
                    </div>
                    <div class="n_apps_grid">

                        <div class="n_apps_view" v-for="(item, index) in items" :key="index">
                            <img :src="item.thumnail_img" class="img-fluid v_app_img" loading="lazy" alt="">
                            <div class="n_view">
                                <nuxt-link :to="'/category/download?slug=' + item.pro_slug">{{ item.p_name }}</nuxt-link>
                                <div class="m_apps_btns">
                                    <div class="btn-group ">
                                        <div class="">
                                            <!-- <a href="" type="button" class="btn_download btn-sm"><img src="/images/btn_download.png" alt=""> </a> -->
                                            <nuxt-link :to="'/category/download?slug=' + item.pro_slug" type="button" class="btn_download btn-sm"><img src="/images/btn_download.png" alt=""> </nuxt-link>

                                        </div>
                                        <div class=""><button type="button" data-bs-toggle="modal" data-bs-target="#share" class="btn_search btn-sm share_btns"><img src="/images/share-100.png" alt=""> </button></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div class="text-center">
                        <button @click="loadMore" :disabled="loading" class="load-more-btn text-center">
                            <span v-if="!loading">Load More</span>
                            <span v-else>Loading...</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="ads_sec mt-0 cat_page_ads" style="padding-right: 40px; position: relative;">
                        <div class="ads_img">

                            <a href="#">
                                <img src="/images/Neutral_Modern Elegant_Watch_Instagram_Post.png" alt="">
                            </a>
                        </div>
                       
                        <div class="ads_img">
                            <iframe src="//s0.2mdn.net/dfp/1754321/4628264607/1695719733125/300 x 250/index.html" width="300" height="250" frameborder="0" scrolling="no" allowfullscreen="true" style="width: 300px; height: 250px;"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- new apps part end here  -->

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
            loading: false,
            showLoader: false,
            categoryname: '',
            page: 1,
            items: [],

        };
    },
    watch: {
        async $route(to, from) {
            try {
                //const slug = this.$route.query.slug;
                this.showLoader = true;
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: this.$route.query.slug
                    },
                });
                this.showLoader = false;
                this.items = response.data.result;
                this.categoryname = response.data.categoryname;

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
    },
    head: {
        title: 'Category List',
    },
    async mounted() {
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
      //  const paramSlug = this.$route.query.slug;
       // console.log("paramSlug: " + paramSlug);
        await this.loadMore();
        this.fetchcatData();

    },
    methods: {
        async fetchcatData() {
            try {
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: this.$route.query.slug
                    },
                });
                this.items = response.data.result;

                this.categoryname = response.data.categoryname;

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
        async loadMore() {
            if (this.loading) return;
            try {
                this.loading = true;
                const response = await this.$axios.get('/unauthenticate/catloadMorePagination', {
                    params: {
                        slug: this.$route.query.slug,
                        page: this.page + 1
                    },
                });

                this.items = this.items.concat(response.data.data); // Assuming your data is nested under 'data' property
                this.page++;
            } catch (error) {
                console.error('Error loading more data', error);
            } finally {
                this.loading = false;
            }
        },
        shareLink() {
            const path = window.location.href;
            // console.log(path);
            this.fullUrl = path;

        },

        //end 
    },

};
</script>

<style scoped>
.eseheight {
    min-height: 30vh;
    display: block
}

.load-more-btn {
    background-color: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.load-more-btn:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
}

.load-more-btn span {
    display: inline-block;
    transition: opacity 0.3s;
}

.load-more-btn:disabled span:first-child {
    opacity: 0;
}

.load-more-btn:disabled span:last-child {
    opacity: 1;
}
</style>
