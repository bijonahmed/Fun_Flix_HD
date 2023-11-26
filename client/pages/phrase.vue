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
                            <div class="step_box active">
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
                        <div class="backUup_phrase">
                            <h1>Secret Recovery Phrase </h1>
                            <p>Write down the secreat recovery phrase on coorect order on a piece of paper.</p>
                            <form action="">
                                <div class="phrase_box" id="securityPhrasesContainer">
                                    <div class="code_box">
                                        <h4 class="tag"></h4>
                                        <p>1</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"></h4>
                                        <p>2</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>3</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>4</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>5</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>6</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>7</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>8</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>9</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>10</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>11</p>
                                    </div>
                                    <div class="code_box">
                                        <h4 class="tag"> </h4>
                                        <p>12</p>
                                    </div>
                                </div>
                                <p class="text-center success_msg">
                                    Successfully Copied.
                                </p>
                                <div class="d-flex justify-content-center align-items-cente">
                                    <nuxt-link to="/confirm-phrase"><button type="button" class="btn_ok add_c_pa mt-2">Next</button></nuxt-link>
                                    <button type="button" class="btn_ok  mt-2" id="copyAllButton" @click="copypharse">Copy</button>

                                </div>
                            </form>
                            <!-- button -->
                            <button id="generateSequence" type="button" class="btn_ok d-none">Genarate</button>
                            <ul>
                                <li>
                                    Keep the secrect security phrase in a safe place that always stay offline.
                                </li>
                                <li>
                                    Never share the security phrase online using emails, photos or social media.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- main part end here  -->

</div>
</template>

<script>
import Loader from '~/components/Loader.vue';
export default {

    head: {
        title: 'Phrase',
    },
    components: {
        Loader,
    },

    mounted() {
        this.generateRandomSequence();
    },

    methods: {
        copypharse() {
            var allPhrases = ''; // Initialize an empty string to store all phrases
            $('#securityPhrasesContainer').find('h4').each(function () {
                allPhrases += $(this).text() + '\n'; // Concatenate each phrase with a line break
            });
            // Create a temporary textarea to copy all phrases
            var tempInput = $('<textarea>');
            $('body').append(tempInput);
            tempInput.val(allPhrases.trim()).select();

            // Copy all phrases to the clipboard
            document.execCommand('copy');

            // Remove the temporary textarea
            tempInput.remove();
            $(".success_msg").css({
                "opacity": "1"
            });
            setTimeout(function () {
                $(".success_msg").css({
                    "opacity": "0"
                });
            }, 1000);
            // alert('All security phrases copied!');
        },
        generateRandomSequence() {
            // Replace this array with your own list of words
            var wordList = [" apple", " banana", " orange", " grape", " kiwi", "pineapple", "mango", "strawberry", "blueberry", "raspberry", "peach", "pear"];
            // Shuffle the array to get a random order
            wordList = wordList.sort(() => Math.random() - 0.5);
            // Get the first 12 words from the shuffled array
            var randomSequence = wordList.slice(0, 12);

            // Display the random sequence in H1 tags
            $(".tag").each(function (index) {
                $(this).text(randomSequence[index]);
            });

        }
    }
};
</script>
