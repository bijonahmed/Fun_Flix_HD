// plugins/owl-carousel.js
import 'jquery';
import 'owl.carousel';

const owlCarousel = {
  install(Vue) {
    // Add jQuery and Owl Carousel to the window object
    Vue.prototype.$ = $;
    Vue.prototype.jQuery = $;
  }
};

// Export the plugin
export default owlCarousel;
