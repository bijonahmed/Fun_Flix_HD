<template>
    <div>
        <TopBar />
        <br><br>
        <!-- banner part start here  -->
        <div class="essential_ cat_banner">
            <div class="container-fluid">
                <div class="row">
                    <div class="loader" v-show="showLoader">
                        <div class="load_box">
                            <h6 style="font-weight: 300;">Loading...</h6>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="essential_box eseheight">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row essential_d ">
                                        <!-- <div class=""> -->
                                        <div class="col-md-7 d-flex align-items-center">
                                            <h1 class="m-0 ms-3">{{ categoryname }}</h1>
                                        </div>
                                        <div class="col-md-5 ">
                                            <div class="essential_d_store_link text-center">
                                                <a href="#"><img src="///images//Play.png" class="img-fluid"
                                                        loading="lazy" alt=""></a>
                                                <a href="#"><img src="///images//Apple.png" class="img-fluid"
                                                        loading="lazy" alt=""></a>
                                            </div>
                                            <p class="text-end me-3">There are more than 1000 torrents and tutorials.
                                            </p>
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
                                        <th scope="col">SL</th>
                                        <th scope="col">Title</th>
                                        <!-- <th scope="col">Category</th>
                                    <th scope="col">Size</th> -->
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in items" :key="item.id">

                                        <td>{{ index + 1 }}</td>
                                        <th scope="row"><img src="/images/file-explorer-new-100.png"
                                                class="img-fluid me-2" loading="lazy" width="20px" alt="">
                                            {{ item.p_name }}</th>
                                        <td>
                                            <div class="btn-group ">
                                                <div class=""><a :href="item.download_link" target="_blank"
                                                        type="button" class="btn_download btn-sm"><img
                                                            src="/images/rom-cloud-100(3).png" alt=""> </a></div>
                                                <div class=""><button type="button" data-bs-toggle="modal"
                                                        data-bs-target="#share" class="btn_search btn-sm"
                                                        @click="sharelink(item.download_link)"><img
                                                            src="/images//share-100.png" alt=""> </button></div>
                                            </div>

                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                            <center>
                                <button @click="loadMore" :disabled="loading" class="load-more-btn">
                                    <span v-if="!loading && hasMorePages">Load More</span>
                                    <span v-else>Loading...</span>
                                </button>
                                <p v-if="!loading && !hasMorePages">No more </p>
                            </center>
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
                                <!-- <iframe src="//s0.2mdn.net/dfp/1754321/4628264607/1695719733125/300 x 250/index.html" width="300" height="250" frameborder="0" scrolling="no" allowfullscreen="true" style="width: 300px; height: 250px;" bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:300,&quot;h&quot;:250,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1125}" bis_id="fr_zj07gcw0csd6ebqbqx5b59" bis_depth="1" bis_chainid="10"></iframe> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ===================== Modal List  ======================  -->
        <div class="modal fade" id="share" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="share_options">
                            <div class="d-flex justify-content-end">
                                <div>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                            </div>
                            <div>
                                <center>
                                    <h3 id="copymsg"></h3>
                                </center>
                                <h6 style="color: #000;">Share this with your social Community</h6>
                                <div class="socials">
                                    <a href="https:/web.whatsapp.com" target="_blank"><img
                                            src="/images/whatsapp-100.png" alt=""></a>
                                    <a href="https://www.messenger.com/" target="_blank"><img
                                            src="/images/facebook-messenger-100.png" alt=""></a>
                                    <a href="https://web.telegram.org/" target="_blank"><img src="/images/telegram.png"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="copy_link">
                                <h6 style="color: #000;">Or copy link : </h6>

                                <div class="input_box">
                                    <input type="text" v-model="downloadlink" id="linkInput">
                                    <button type="button" @click="copyLink()">Copy </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
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
            downloadlink: '',
            loading: false,
            currentPage: 1,
            hasMorePages: true,
            items: [],
        };
    },

    head: {
        title: 'Popular Torrent Course',
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



    async asyncData({ $axios }) {
        try {
            const response = await $axios.get('/meta-courses');
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
            title: this.categoryname, // Dynamically set title
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
        setTimeout(() => {
            this.showLoader = false;
        }, 1000);
        this.laadCategory(this.currentPage);
        this.fetchItems(this.currentPage);
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
        sharelink(download_link) {
            console.log("download_link: " + download_link);
            this.downloadlink = download_link;
        },
        shareLink() {
            const path = window.location.href;
            // console.log(path);
            this.fullUrl = path;

        },
        async laadCategory(page) {
            try {
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: this.$route.query.slug,
                        page: page,
                    },
                });
                this.categoryname = response.data.categoryname;

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },

        async fetchItems(page) {
            try {
                const response = await this.$axios.get('/unauthenticate/findCategorys', {
                    params: {
                        slug: this.$route.query.slug,
                        page: page,
                    },
                });
                this.categoryname = response.data.categoryname;
                const newProducts = response.data.result;
                if (newProducts.length === 0) {
                    this.hasMorePages = false;
                }
                this.items = this.items.concat(newProducts);

            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
        async loadMore() {

            if (this.loading) return;
            this.currentPage++;
            this.fetchItems(this.currentPage);
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
