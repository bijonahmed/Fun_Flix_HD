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
                                                <a href="#"><img src="//images/Play.png" class="img-fluid"
                                                        loading="lazy" alt=""></a>
                                                <a href="#"><img src="//images/Apple.png" class="img-fluid"
                                                        loading="lazy" alt=""></a>
                                            </div>
                                            <p class="text-end me-3">Download FunFlix HD app for watching popular
                                                netflix
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

        <!-- start -->
        <!-- video section start start here  -->
        <div class="apps_second cat_apps_view apps_view_box app_page mt-0">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-md-8">
                        <div class="video_player">
                            <iframe width="640" height="360" frameborder="0" :src="download_link"
                                allowfullscreen></iframe>

                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="ads_sec m-0 p-0">

                            <div class=" v_slide">
                                <div class="ads_img">
                                    <img :src="thumnail_img" alt="Loading...">
                                </div>
                                <div class="d-flex my-3">
                                    <a href="#"><img src="/images/Play.png" class="img-fluid" loading="lazy" alt=""></a>
                                    <a href="#"><img src="/images/Apple.png" class="img-fluid" loading="lazy"
                                            alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <!-- apps details part start here  -->
                        <div class="apps_details pt-0">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-12 px-0">
                                        <div class="v_title">
                                            <h2 class="lead">{{ product_name }}</h2>
                                            <a :href="download_link" target="_blank" class="btn_download">Download</a>
                                            <button type="button" class="_btn_share mt-3" data-bs-toggle="modal"
                                                data-bs-target="#share" @click="shareLink"><i
                                                    class="fa-solid fa-share-nodes"></i>Share</button>

                                            <div class="mt-2">
                                                <span class="me-3">Total Download: {{ counter }}</span>
                                                <span>Total View: 100k</span>
                                            </div>

                                            <!-- Modal -->
                                            <div class="modal fade" id="share" tabindex="-1"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">

                                                        <div class="modal-body">
                                                            <div class="share_options">
                                                                <div class="d-flex justify-content-end">
                                                                    <div>
                                                                        <button type="button" class="btn-close"
                                                                            data-bs-dismiss="modal"
                                                                            aria-label="Close"></button>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h6 style="color: #000;">Share this with your social
                                                                        Community</h6>
                                                                    <div class="socials">
                                                                        <a href="https:/web.whatsapp.com"
                                                                            target="_blank"><img
                                                                                src="/images/whatsapp-100.png"
                                                                                alt=""></a>
                                                                        <a href="https://www.messenger.com/"
                                                                            target="_blank"><img
                                                                                src="/images/facebook-messenger-100.png"
                                                                                alt=""></a>
                                                                        <a href="https://web.telegram.org/"
                                                                            target="_blank"><img
                                                                                src="/images/telegram.png" alt=""></a>
                                                                    </div>
                                                                </div>
                                                                <div class="copy_link">
                                                                    <h6 style="color: #000;">Or copy link : </h6>
                                                                    <div class="input_box">
                                                                        <center>
                                                                            <h3 id="copymsg"></h3>
                                                                        </center>
                                                                        <input type="text" v-model="downloadlink"
                                                                            id="linkInput">
                                                                        <button type="button" @click="copyLink()"><i
                                                                                class="fa-regular fa-copy me-2"></i>Copy
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 px-0">
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

                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- apps details part end here  -->

                        <!-- video suggestion  -->
                        <div class="apps_s_grid p-0 m-0 mt-3">
                            <div id="loader-main" v-show="showLoader">
                                <div id="loader">
                                </div>
                            </div>
                            <div class="apps_box_two" v-for="item in items" :key="item.id">
                                <a href="javascript:void(0);" @click="getVideo(item.pro_slug)">
                                    <div class="s_img_box">
                                        <img :src="item.thumnail_img" class="img-fluid img_banner" loading="lazy"
                                            alt="">
                                    </div>
                                    <div class="d_box">
                                        <h3>{{ item.product_name }}</h3>
                                        <div class="d-flex align-items-center">
                                            <!-- <nuxt-link :to="'/videos/watch?slug=' + item.pro_slug" class="btn_download">Download===</nuxt-link> -->
                                            <a href="javascript:void(0);" @click="getVideo(item.pro_slug)"
                                                class="btn_download">Download</a>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                        <center> <button @click="loadMore" :disabled="loading" class="load-more-btn mt-5">
                                <span v-if="!loading">Load More</span>
                                <span v-else>Loading...</span>
                            </button></center>

                    </div>

                </div>

            </div>
        </div>
        <!-- video section  end here  -->
        <!-- END -->

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
            currentPage: 1,
            hasMorePages: true,
            downloadlink: '',
            popularCategorys: [],
            showLoader: false,
            product_name: '',
            description: '',
            thumnail_img: '',
            download_link: '',
            counter: 0,
            fullUrl: '',
            loading: false,
            page: 1,
            items: [],
        };
    },

    async asyncData({ $axios }) {
        try {
            const response = await $axios.get('/meta-videos');
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
            title: this.product_name, // Dynamically set title
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    hid: "description",
                    name: meta.description,
                    content: meta.description || "",
                },
                { name: "format-detection", content: "telephone=no" },
            ],

        };
    },


    async mounted() {
        await this.fetchItems(this.currentPage);
        this.showLoader = true;
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        const paramSlug = this.$route.query.slug;
        console.log("paramSlug: " + paramSlug);
        // await this.loadMore();
        this.fetchData();

    },
    methods: {
        copyLink() {
            $("#copymsg").html();
            // Select the input field
            const linkInput = document.getElementById('linkInput');
            linkInput.select();
            try {
                document.execCommand('copy');
                $("#copymsg").html("Link copied!");
            } catch (err) {
                console.error('Unable to copy to clipboard:', err);
                $("#copymsg").html("Copy to clipboard failed. Please copy the link manually.");
            }
        },
        async fetchItems(page) {
            try {
                const response = await this.$axios.get(`/unauthenticate/defaultShowingMoviesHome`, {
                    params: {
                        page: page,
                    },
                });
                const newProducts = response.data;
                if (newProducts.length === 0) {
                    this.hasMorePages = false;
                }
                this.items = this.items.concat(newProducts);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        },
        async loadMore() {
            if (this.loading || !this.hasMorePages) return;

            this.loading = true;

            try {
                this.currentPage++;
                await this.fetchItems(this.currentPage);
            } catch (error) {
                console.error('Error loading more:', error);
            } finally {
                this.loading = false;
            }
        },

        async getVideo(slug) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            try {
                this.showLoader = true;
                const response = await this.$axios.get('/unauthenticate/filderProduct', {
                    params: {
                        slug: slug
                    },
                });
                //this.showLoader = false;
                this.categoryname = response.data.categoryname;
                this.product_name = response.data.product_name;
                this.thumnail_img = response.data.thumnail_img;
                this.download_link = response.data.download_link;
                this.counter = response.data.counter;
                $(".description").html(response.data.description);
            } catch (error) {
                console.error('Error loading more data', error);
            } finally {
                this.showLoader = false;
            }

        },
        shareLink() {
            const path = window.location.href;
            console.log("===" + path);
            this.downloadlink = path;

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
                this.counter = response.data.counter;
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
