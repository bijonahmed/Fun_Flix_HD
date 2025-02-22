
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('/api/meta'); // Use $axios directly
      //console.log("response", response.data);
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
      title: meta.title || "", // Dynamically set title
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.png" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
        { rel: "stylesheet", href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" },
        { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
        { rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
        { rel: "stylesheet", href: "/css/root.css" },
        { rel: "stylesheet", href: "/css/styles.css" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=YourFontFamily&display=swap" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap" },
      ],
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-LQRCM2PL91" },
        { src: "https://code.jquery.com/jquery-3.7.1.js" },
        { src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js" },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },
        { src: "/js/owl.carousel.min.js" },
        { src: "/js/nav_Sidebar.js" },
        { src: "/js/backToTop.js" },
      ],
    };
  },



// Global CSS: https://go.nuxtjs.dev/config-css

// css: [
//   '@/node_modules/ionicons/dist/css/ionicons.min.css',
//   'owl.carousel/dist/assets/owl.theme.default.min.css'
// ],
// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
plugins: [
  "~/plugins/event-bus.js",
  // '~/plugins/ionicons.js',
  { src: "~plugins/jquery.js", ssr: false }, // Import jQuery
  { src: "~plugins/owl-carousel.js", ssr: false },
  { src: '~/plugins/google-analytics.js', mode: 'client' }
],
  env: {
  googleAnalyticsID: 'G-LQRCM2PL91'
},
// Auto import components: https://go.nuxtjs.dev/config-components
components: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxt/http"],
      auth: {
  // Options
  strategies: {
    local: {
      token: {
        property: "access_token",
        },
      user: {
        property: false,
        },
      endpoints: {
        login: { url: "/auth/login", method: "post" },
        logout: { url: "/auth/logout", method: "post" },
        user: { url: "/auth/me", method: "post" },
      },
    },
  },
  redirect: {
    login: "/login",
      logout: "/",
        callback: "/login",
          home: "/",
    },
},
// Axios module configuration: https://go.nuxtjs.dev/config-axios
axios: {
 // baseURL: "http://127.0.0.1:8000/api/",
  baseURL: "https://api.funflixhd.com/api/",
   




  },
// Build Configuration: https://go.nuxtjs.dev/config-build
build: {
  transpile: ["defu"],
    //vendor: ["jquery"],
    build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Add FriendlyErrorsWebpackPlugin
        const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
        config.plugins.push(new FriendlyErrorsWebpackPlugin());
      }
    },
  },
},
};
