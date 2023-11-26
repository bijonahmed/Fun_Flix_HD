<template>
    <div class="loader" v-show="showLoader">
      <div class="load_box">
        <img src="/images/logo_loader.png" class="img-fluid" loading="lazy" alt="">
        <h6>BRICS</h6>
        <h6 style="font-weight: 300;">Loading...</h6>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showLoader: true,
      };
    },
    mounted() {
      // Hide the loader after 2 seconds
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
    },
  };
  </script>
  
  <style scoped>
  /* Your styling for the loader goes here */
  </style>
  