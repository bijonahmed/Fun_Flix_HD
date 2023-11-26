<template>
<div>
    <!-- top menu bar start here  -->
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
                            <nuxt-link to="/" type="button">
                                <i class="fa-solid fa-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <!-- <h6>Create BRICS Wallet</h6> -->
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <ion-icon class="fa-solid fa-circle-question"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part">
        <div class="container-fluid">
            <div class="col-md-12">
                <div class="title_iden">
                    <h6>Recover identity</h6>
                    <p>You can open multichain wallets under this identity like ETH,BTC,COSMOS and EOS.</p>
                </div>
                <div class="form_part">
                    <form action="">
                        <div class="in_group">
                            <label> Mnemonic</label>
                            <textarea name="" id="" cols="30" placeholder="Enter mnemonic separated by space" rows="4"></textarea>
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
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- main part end here  -->

    <section class="footer py-3">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="f_buttons">
                        <div class="d-flex align-items-center my-2">
                            <input type="checkbox" name="" id="check"><label for="check" class="ms-2 mb-0" style="font-size: 12px; margin-bottom: 5px;">I have agreed to the terms of
                                service</label>
                        </div>
                        <button class="btn_backup" type="button">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
import Footer from '~/components/Footer.vue';
export default {
    head: {
        title: 'Recover Identity',
    },
    components: {
        Loader,
        Footer
    },

    mounted() {

    },

    methods: {

    }
};
</script>
