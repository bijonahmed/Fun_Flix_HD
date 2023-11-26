<template>
<div>
    <TopBar />
    <br /> <br />
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
                                        <h1 class="m-0 ms-3">{{ categoryname }}</h1>
                                    </div>
                                    <div class="col-md-5 ">
                                        <div class="essential_d_store_link text-center">
                                            <a href="#"><img src="///images//Play.png" class="img-fluid" loading="lazy" alt=""></a>
                                            <a href="#"><img src="///images//Apple.png" class="img-fluid" loading="lazy" alt=""></a>
                                        </div>
                                        <p class="text-end me-3">Download FunFlix HD app for watching popular netflix movies and series for
                                            free.</p>
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
    <!-- apps grid part end here  -->
    <!-- start  -->
    <!-- apps grid part start here  -->
    <div class="apps_second cat_apps_view app_page cat_page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10">
                    <div class="table_content">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" :key="item.id">
                                    <th scope="row"><img src="/images/file-explorer-new-100.png" class="img-fluid me-2" loading="lazy" width="20px" alt="">
                                       {{ item.p_name }}</th>
                                    <td>Web Development</td>

                                    <td>3.5 GB</td>
                                    <td>
                                        <div class="btn-group ">
                                            <div class=""><a :href="item.download_link" target="_blank" type="button" class="btn_download btn-sm"><img src="/images/rom-cloud-100(3).png" alt=""> </a></div>
                                            <div class=""><button type="button" data-bs-toggle="modal" data-bs-target="#share" class="btn_search btn-sm"><img src="/images//share-100.png" alt=""> </button></div>
                                        </div>

                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div class="text-center"> <button @click="loadMore" :disabled="loading" class="load-more-btn text-center">
                                <span v-if="!loading">Load More</span>
                                <span v-else>Loading...</span>
                            </button></div>
                    </div>

                </div>
                <div class="col-md-2">
                    <div class="ads_sec mt-0 cat_page_ads" style="padding-right: 40px; position: relative;">
                        <div class="ads_img">

                            <a href="https://pec-shopping.com">
                                <img src="/images/Neutral_Modern Elegant_Watch_Instagram_Post.png" alt="">
                            </a>
                        </div>
                        <div class="ads_img">

                            <a href="https://pec-shopping.com">
                                <img src="/images//300x600.png" class="img-fluid" loading="lazy" alt="">
                            </a>
                        </div>
                        <div class="ads_img">
                            <iframe id="200_268_dfa7banner_html_inpage_0.if" src="//s0.2mdn.net/dfp/1754321/4628264607/1695719733125/300 x 250/index.html" width="300" height="250" frameborder="0" scrolling="no" allowfullscreen="true" style="width: 300px; height: 250px;" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:300,&quot;h&quot;:250,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1125}" bis_id="fr_zj07gcw0csd6ebqbqx5b59" bis_depth="1" bis_chainid="10"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- apps grid part end here  -->

    <!-- apps grid part end here  -->
    <!-- end  -->
    <Support />
    <Footer />
</div>
</template>

<script>
import TopBar from '~/components/TopBar.vue';
import Support from '~/components/Support.vue';
import Footer from '~/components/Footer.vue';
import Videos from '~/components/Videos.vue';

export default {

    components: {
        TopBar,
        Support,
        Footer,
        Videos
    },
    data() {
        return {
            categoryname: '',
            popularCategorys: [],
            showLoader: false,
            fullUrl: '',
            loading: false,
            page: 1,
            items: [],
        };
    },

    head: {
        title: 'Course',
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

    async mounted() {
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        const paramSlug = this.$route.query.slug;
        console.log("paramSlug: " + paramSlug);
        await this.loadMore();
        this.fetchcatData();

    },
    methods: {
        async fetchcatData() {
            this.showLoader = true;
            try {
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: this.$route.query.slug
                    },
                });
                this.showLoader = false;
                this.categoryname = response.data.categoryname;
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
                const response = await this.$axios.get('/unauthenticate/videoLoadMorePagination', {
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
