<template>
<!-- top menu bar start here  -->
<div>

    <section class="top_bar">
        <div class="container-fluid">
            <div class="row">
                <center>
                    <Loader />
                </center>
                <div class="col-md-12">
                    <div class="top_bar_home ">
                        <!-- choose wallet button  -->
                        <div class=" link_home ">
                            <nuxt-link to="/privacy-alert" type="button">
                                <i class="fa-solid fa-circle-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <!-- <h6>Create BRICS Wallet</h6> -->
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <a href="#">
                                <i class="fa-solid fa-circle-info"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part sm_height ">
        <div class="st_part">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="create_step">
                            <div class="step_box active">
                                <h1>1</h1>
                                <p>Create identity</p>
                                <!-- <span></span> -->
                            </div>
                            <div class="step_box">
                                <h1>2</h1>
                                <p>Secure wallet</p>
                                <span></span>
                            </div>
                            <div class="step_box ">
                                <h1>3</h1>
                                <p>Confirm secret recovery phrase</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="title_iden">
                            <h6>Create identity</h6>
                            <p>Give your identity a name and password</p>
                        </div>
                        <div class="form_part">
                            <form action="">
                                <div class="in_group">
                                    <label> Name Your identity</label>
                                    <input type="text" placeholder="Enter 5-12 characters">
                                </div>
                                <div class="in_group pb-0">
                                    <label> Set Passwrod</label>
                                    <input type="password" placeholder="Enter Password">
                                </div>
                                <div class="in_group pt-0">
                                    <input type="password" id="pass" placeholder="Confirm Password">
                                    <i toggle="#pass" class="fa-regular fa-eye toggle-password"></i>
                                </div>
                                <h6 class="mt-2" style="font-size: 12px;">Password hint </h6>
                                <div class="in_group pt-1">
                                    <input type="text" id="hint" placeholder="Password hint">
                                </div>
                                <div class="in_group">
                                    <label>Invite Id (optional)</label>
                                    <input type="text" placeholder="">
                                    <p>If you have invite please put the id here for get the reward of 10 BRICS.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- main part end here  -->

    <section class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons">
                        <div class="d-flex align-items-center my-2">
                            <input type="checkbox" name="" id="check"><label for="check" class="ms-2 mb-0" style="font-size: 12px; margin-bottom: 5px;">I have agreed to the terms of service</label>
                        </div>
                        <nuxt-link to="/phrase"><button class="btn_backup add_c_pa" type="button">Confirm</button></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Choose Network switch modal/Offcanvas -->
    <div id="networkOffcanvas" class="offcanvas offcanvas-bottom hide" style="border-top-right-radius: 10px; border-top-left-radius: 10px; min-height: 50vh;" tabindex="-1">
        <div class="offcanvas-body  py-4">
            <div class="war_status">
                <h6 class="mb-3">What's identity?</h6>
                <p>An identity enables you to create new multichain wallets like ETH, BTC, ATOM and more.</p>
                <p>Wallets created with the same identity can all be recovered with the mnemonic(a set of 12 English
                    words)
                    linked to the identity.</p>
            </div>

            <section class="footer -3" style="width: 90%;">
                <div class="f_buttons">
                    <button type="button" class="btn-clse btn_backup" data-bs-dismiss="offcanvas" aria-label="Close" @click="close">Ok</button>
                    <!-- <button  class="" type="button">OK</button> -->
                </div>
            </section>
        </div>
    </div>
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Create Identity',
    },
    components: {
        Loader,
    },
    methods: {
        close() {
            console.log("close.....");
            const offcanvas = new bootstrap.Offcanvas(document.getElementById('networkOffcanvas'));
            offcanvas.hide();
            //const offcanvas = new bootstrap.Offcanvas(this.$refs.networkOffcanvas);
            //offcanvas.hide();
        },

    },
    beforeDestroy() {
        // Ensure the offcanvas is hidden before the component is destroyed
        const offcanvas = new bootstrap.Offcanvas(document.getElementById('networkOffcanvas'));
        offcanvas.hide();
    }
};
</script>
