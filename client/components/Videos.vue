<template>
<div>
    <!-- videos part start here   -->
    <div class="apps_second">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <a class="t_link">Popular Movies </a>

                    <!-- end -->
                    <div class="row">
                        <div class="col-md-10">
                            <div class="apps_s_grid">

                                <div class="apps_box_two" v-for="item in items" :key="item.id">
                                    <nuxt-link :to="'/videos/watch?slug=' + item.pro_slug">
                                        <div class="s_img_box">
                                            <img :src="item.thumnail_img" class="img-fluid img_banner" loading="lazy" alt="">
                                        </div>
                                        <div class="d_box">
                                            <h3>{{ item.product_name }}</h3>
                                            <div class="d-flex align-items-center">
                                                <!--<p>9.99 GB</p>-->
                                                <nuxt-link :to="'/videos/watch?slug=' + item.pro_slug" class="btn_download">Download</nuxt-link>
                                            </div>
                                        </div>
                                    </nuxt-link>
                                </div>
                            </div>
                            <center> <button @click="loadMore" :disabled="loading" class="load-more-btn">
                                    <span v-if="!loading && hasMorePages">Load More</span>
                                    <span v-else>Loading...</span>
                                  
                                </button>
                                <p v-if="!loading && !hasMorePages">No more </p>
                            </center>
                        </div>
                        <div class="col-md-2">
                            <div class="ads_sec">
                                <div class="ads_img">
                                    <a href="#">
                                        <img src="/images/Neutral_Modern Elegant_Watch_Instagram_Post.png" alt="">
                                    </a>
                                </div>

                                <div class="ads_img">
                                    <a href="#">
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
    <!-- Videos part end here  -->
</div>
</template>

<!-- defaultShowingMovies -->

<script>
export default {

    data() {
        return {
            loading: false,
            currentPage: 1,
            hasMorePages: true,
            items: [],
        };
    },
    methods: {
        async fetchItems(page) {
            try {
                const response = await this.$axios.get(`/unauthenticate/defaultShowingMoviesHome`, {
                    params: {
                        page: page
                    },
                });
                const newProducts = response.data;
                if (newProducts.length === 0) {
                    this.hasMorePages = false;
                }
                this.items = this.items.concat(newProducts);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
        async loadMore() {
            if (this.loading) return;
            this.currentPage++;
            this.fetchItems(this.currentPage);
        },
    },
    async mounted() {
        this.fetchItems(this.currentPage);
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
