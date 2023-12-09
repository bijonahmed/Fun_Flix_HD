<template lang="en">
<div>
    <!-- top bar start here  -->
    <div class="top_bar _nav " bis_skin_checked="1">
        <div class="container-fluid" bis_skin_checked="1">
            <div class="row" bis_skin_checked="1">
                <div class="col-md-12" bis_skin_checked="1">
                    <nav class="navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top">
                        <div class="container-fluid">
                            <nuxt-link class="navbar-brand navbar_brand" to="/">

                                <h6>FunFlix HD</h6>
                            </nuxt-link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <!-- <ul class="nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0"> -->
                                <ul class="nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0">
                                    <li v-for="category in categories" :key="category.id" class="nav-item dropdown">
                                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div>
                                                <i :class="category.file"></i>
                                                {{ category.name }}
                                            </div>
                                            <i class="fa-solid fa-caret-down"></i>
                                        </a>
                                        <ul v-if="category.children.length > 0" class="dropdown-menu">
                                            <li v-for="childCategory in category.children" :key="childCategory.id">
                                                <!-- <nuxt-link class="dropdown-item" :to="'/category/category-list?slug=' + childCategory.slug" @click="navigateToCategoryList(childCategory.slug)">{{ childCategory.name }}</nuxt-link> -->
                                                <nuxt-link v-if="childCategory.parent_id === 1" class="dropdown-item" :to="'/category/category-list?slug=' + childCategory.slug">{{ childCategory.name }}</nuxt-link>
                                                <nuxt-link v-if="childCategory.parent_id === 2" class="dropdown-item" :to="'/games/games-list?slug=' + childCategory.slug">{{ childCategory.name }}</nuxt-link>
                                                <nuxt-link v-if="childCategory.parent_id === 3" class="dropdown-item" :to="'/videos/videodetails?slug=' + childCategory.slug">{{ childCategory.name }}</nuxt-link>
                                                <nuxt-link v-if="childCategory.parent_id === 4" class="dropdown-item" :to="'/course/coursedetails?slug=' + childCategory.slug">{{ childCategory.name }}</nuxt-link>
                                                <!-- <nuxt-link v-else class="dropdown-item" :to="'/category/category-list?slug=' + childCategory.slug">{{ childCategory.name }}</nuxt-link> -->
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex s-form" @submit.prevent="searchurl()">
                                    <input class="form-control" id="search" v-model="searchInput" placeholder="Search Movies,Software,Games,Tutorial...">
                                    <input type="hidden" class="parent" />
                                    <input type="hidden" class="selected_slug" />
                                    <button class="btn btn-outline-success d-flex align-items-center" type="submit"> <i class="fa-solid fa-magnifying-glass"></i></button>

                                </form>

                                <div style="display:none">
                                    <form @submit.prevent="forSearchurl()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                        <input type="text" class="parent" />
                                        <input type="text" class="selected_slug" />
                                        <button type="submit" class="btn btn-success px-5 w-100 clickbtn"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- top bar end here  -->
</div>
</template>

<script>
export default {

    data() {
        return {
            categories: [],
            searchInput: [],
            parent: '',
        };
    },
    mounted() {

        this.fetchCategories();
        this.initAutocomplete();
    },
    methods: {
        searchurl() {
            let parent_id = $(".parent").val();
            let selected_slug = $(".selected_slug").val();
            if (parent_id == 1 || parent_id == 2) {
              //  alert(selected_slug);
                 this.$router.push('/category/download?slug=' + selected_slug);
            }

            if (parent_id == 3) {
                //alert(parent_id);
                this.$router.push('/videos/watch?slug=' + selected_slug);

            }

            if (parent_id == 4) {
                this.$router.push('/course/download?slug=' + selected_slug);
            }
        },
        forSearchurl() {
            let parent_id = $(".parent").val();
            let selected_slug = $(".selected_slug").val();
            console.log("parentID " + parent_id);
            console.log("Slug " + selected_slug);
            if (parent_id == 1 || parent_id == 2) {
                this.$router.push('/category/download?slug=' + selected_slug);
            }

            if (parent_id == 3) {
                this.$router.push('/videos/watch?slug=' + selected_slug);
            }

            if (parent_id == 4) {
                this.$router.push('/course/download?slug=' + selected_slug);
            }

        },
        retrunUrl() {
            this.$router.push({
                name: '/videos/watch',
                params: {
                    slug: ui.item.slug
                }
            });
        },

        async fetchCategories() {
            try {
                const response = await this.$axios.get('/unauthenticate/getCategoryList');
                this.categories = response.data;
                //console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
        ///unauthenticate/autocomplete

        async initAutocomplete() {
            const vm = this; // Store a reference to the Vue instance
            $('#search').autocomplete({
                source: async (request, response) => {
                    try {
                        const apiResponse = await this.$axios.get(`/unauthenticate/autocomplete?q=${request.term}`);
                        const transformedData = apiResponse.data.map(item => ({
                            label: item.label,
                            value: item.id,
                            slug: item.slug,
                            parent_id: item.parent_id,
                        }));
                        response(transformedData);
                    } catch (error) {
                        console.error(error);
                    }
                },
                minLength: 3, // Set a minimum length for triggering autocomplete
                select: function (event, ui) {
                    const selectedId = `parent ID: ${ui.item.parent_id}---- slug: ${ui.item.slug}----id: ${ui.item.value}`;
                    console.log(selectedId);
                    const parentid = ui.item.parent_id;
                    $(".parent").val(parentid);
                    $(".selected_slug").val(ui.item.slug);
                    $(".clickbtn").click();
                },
            });
        },
    }
}
</script>

<style scoped>
@media(min-width: 991px) {
    .s-form {
        width: 40%;
    }
}
</style>
