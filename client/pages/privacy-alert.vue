<template>
<div>
    <center>
        <Loader />
    </center>
    <!-- top menu bar start here  -->
    <section class="top_bar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="top_bar_home ">
                        <!-- choose wallet button  -->
                        <div class=" link_home ">
                            <nuxt-link to="/" type="button">
                                <i class="fa-solid fa-circle-chevron-left"></i>
                            </nuxt-link>

                        </div>
                        <!-- network wallet button  -->
                        <div class=" t_b">
                            <!-- <h6>Create BRICS Wallet</h6> -->
                        </div>
                        <!-- scan icon button part start here  -->
                        <div class=" link_home">
                            <nuxt-link to="/">
                                <i class="fa-solid fa-circle-info"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top menu bar end here  -->

    <!-- main part start here  -->
    <section class="main_part">

        <div class="privacy_box">
            <h5>Help us improve BRICS</h5>
            <p>BRICS would like to gather usage data to better understand how our users interact with BRICS. This data will be used to provide the service, which includes improving the service based on your use.

                BRICS will...</p>

            <ul>
                <li>
                    <div class="p_alert">
                        <span class="l_style_check"></span>
                        <p>Always allow you to opt-out via Settings</p>
                    </div>
                </li>
                <li>
                    <div class="p_alert">
                        <span class="l_style_check"></span>
                        <p>Send anonymized click and pageview events</p>
                    </div>
                </li>
                <li>
                    <div class="p_alert">
                        <span class="l_style"></span>
                        <p>Never collect information we don’t need to provide the service (such as keys, addresses, transaction hashes, or balances)</p>
                    </div>
                </li>
                <li>
                    <div class="p_alert">
                        <span class="l_style"></span>
                        <p> Never collect your full IP address*</p>
                    </div>
                </li>
                <li>
                    <div class="p_alert">
                        <span class="l_style"></span>
                        <p>Never sell data. Ever!</p>
                    </div>
                </li>
            </ul>
            <p>This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation (EU) 2016/679.</p>
            <p>* When you use Infura as your default RPC provider in BRICS, Infura will collect your IP address and your Ethereum wallet address when you send a transaction. We don’t store this information in a way that allows our systems to associate those two pieces of data. For more information on how BRICS and Infura interact from a data collection perspective, see our update here. For more information on our privacy practices in general, see our <a href="#">Privacy Policy</a> here.</p>
            <nuxt-link to="/create-identity" class="btn_ok">Agree</nuxt-link>
            <nuxt-link to="/create-identity" class="btn_no">No Thanks</nuxt-link>
        </div>

    </section>
    <!-- main part end here  -->
</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {
    head: {
        title: 'Privacy alert',
    },
    components: {
        Loader,
    },
};
</script>
