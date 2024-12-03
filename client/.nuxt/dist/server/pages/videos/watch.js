exports.ids = [14];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("0500d8f0", content, true, context)
};

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=128d3676&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<footer><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-6 wow fadeIn\"><div class=\"term_condition\"><ul><li><a href=\"#\">About</a></li> <li><a href=\"#\">Privacy policy</a></li></ul></div></div> <div class=\"col-md-6 wow fadeIn\"><div class=\"social\"><ul class=\"justify-content-end\"><li><a href=\"https://www.facebook.com/funflixhd/\" target=\"_blank\"><i class=\"fa-brands fa-facebook\"></i></a></li></ul></div></div></div></div></footer> <a id=\"button\" style=\"text-decoration: none;\"></a>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=128d3676&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "525b0f25"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=template&id=e9305a1c&scoped=true&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"top_bar _nav\" data-v-e9305a1c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"container-fluid\" data-v-e9305a1c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"row\" data-v-e9305a1c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"col-md-12\" data-v-e9305a1c>", "</div>", [_vm._ssrNode("<nav class=\"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top\" data-v-e9305a1c>", "</nav>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-e9305a1c>", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand navbar_brand",
    attrs: {
      "to": "/"
    }
  }, [_c('h6', [_vm._v("FunFlix HD")])]), _vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-e9305a1c><span class=\"navbar-toggler-icon\" data-v-e9305a1c></span></button> "), _vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-e9305a1c>", "</div>", [_vm._ssrNode("<ul class=\"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0\" data-v-e9305a1c>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-e9305a1c>", "</li>", [_vm._ssrNode("<a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link\" data-v-e9305a1c><div data-v-e9305a1c><i" + _vm._ssrClass(null, category.file) + " data-v-e9305a1c></i>" + _vm._ssrEscape("\n                                                " + _vm._s(category.name) + "\n                                            ") + "</div> <i class=\"fa-solid fa-caret-down\" data-v-e9305a1c></i></a> "), category.children.length > 0 ? _vm._ssrNode("<ul class=\"dropdown-menu\" data-v-e9305a1c>", "</ul>", _vm._l(category.children, function (childCategory) {
      return _vm._ssrNode("<li data-v-e9305a1c>", "</li>", [childCategory.parent_id == 1 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/category/category-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id == 2 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/games/games-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id == 3 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/videos/videodetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id == 4 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/course/coursedetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e()], 2);
    }), 0) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" <form class=\"d-flex s-form\" data-v-e9305a1c><input id=\"search\" placeholder=\"Search Movies,Software,Games,Tutorial...\"" + _vm._ssrAttr("value", _vm.searchInput) + " class=\"form-control\" data-v-e9305a1c> <input type=\"hidden\" class=\"parent\" data-v-e9305a1c> <input type=\"hidden\" class=\"selected_slug\" data-v-e9305a1c> <button type=\"submit\" class=\"btn btn-outline-success d-flex align-items-center\" data-v-e9305a1c><i class=\"fa-solid fa-magnifying-glass\" data-v-e9305a1c></i></button></form> <div style=\"display:none\" data-v-e9305a1c><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-e9305a1c><input type=\"text\" class=\"parent\" data-v-e9305a1c> <input type=\"text\" class=\"selected_slug\" data-v-e9305a1c> <button type=\"submit\" class=\"btn btn-success px-5 w-100 clickbtn\" data-v-e9305a1c><i class=\"bx bx-check-circle mr-1\" data-v-e9305a1c></i> Submit</button></form></div>")], 2)], 2)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=e9305a1c&scoped=true&lang=en&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=script&lang=js&
/* harmony default export */ var TopBarvue_type_script_lang_js_ = ({
  data() {
    return {
      categories: [],
      searchInput: [],
      parent: ''
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
              parent_id: item.parent_id
            }));
            response(transformedData);
          } catch (error) {
            console.error(error);
          }
        },
        minLength: 3,
        // Set a minimum length for triggering autocomplete
        select: function (event, ui) {
          const selectedId = `parent ID: ${ui.item.parent_id}---- slug: ${ui.item.slug}----id: ${ui.item.value}`;
          console.log(selectedId);
          const parentid = ui.item.parent_id;
          $(".parent").val(parentid);
          $(".selected_slug").val(ui.item.slug);
          $(".clickbtn").click();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopBarvue_type_script_lang_js_ = (TopBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/TopBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e9305a1c",
  "8b1512f0"
  
)

/* harmony default export */ var TopBar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Support.vue?vue&type=template&id=5b5844d2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"support pt-4\"><div class=\"container\"><div class=\"row py-4\"><div class=\"col-md-12\"><div class=\"support_content wow fadeIn\"><h1>FunFlixHD</h1> <p>Dive into the world of entertainment and education at FunFlixHD.com! \n      Explore the latest movies, cutting-edge software, thrilling games, \n      and enriching courses. Your gateway to endless possibilities for leisure and learning awaits!</p></div></div></div></div></section> <section class=\"grow_business d-none\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 m-auto text-center\"><div class=\"grow_content wow fadeIn\"><a href=\"https://fansgame.online\" target=\"_blank\"><img src=\"/images/ads_banner.gif\" loading=\"lazy\" alt class=\"img-fluid\"></a></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Support.vue?vue&type=template&id=5b5844d2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Support.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4bd454b5"
  
)

/* harmony default export */ var Support = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_e9305a1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_e9305a1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_e9305a1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_e9305a1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_e9305a1c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width:991px){.s-form[data-v-e9305a1c]{width:40%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("7920b52e", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_f254cd2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_f254cd2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_f254cd2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_f254cd2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_f254cd2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".load-more-btn[data-v-f254cd2c]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-f254cd2c]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-f254cd2c]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-f254cd2c]:first-child{opacity:0}.load-more-btn:disabled span[data-v-f254cd2c]:last-child{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=template&id=f254cd2c&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"apps_second\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<div class=\"col-md-12\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<a class=\"t_link\" data-v-f254cd2c>Popular Movies </a> "), _vm._ssrNode("<div class=\"row\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<div class=\"col-md-10\" data-v-f254cd2c>", "</div>", [_vm._ssrNode("<div class=\"apps_s_grid\" data-v-f254cd2c>", "</div>", _vm._l(_vm.items, function (item) {
    return _vm._ssrNode("<div class=\"apps_box_two\" data-v-f254cd2c>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_c('div', {
      staticClass: "s_img_box"
    }, [_c('img', {
      staticClass: "img-fluid img_banner",
      attrs: {
        "src": item.thumnail_img,
        "loading": "lazy",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "d_box"
    }, [_c('h3', [_vm._v(_vm._s(item.product_name))]), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_c('nuxt-link', {
      staticClass: "btn_download",
      attrs: {
        "to": '/videos/watch?slug=' + item.pro_slug
      }
    }, [_vm._v("Download")])], 1)])])], 1);
  }), 0), _vm._ssrNode(" "), _c('center', [_c('button', {
    staticClass: "load-more-btn",
    attrs: {
      "disabled": _vm.loading || !_vm.hasMorePages
    },
    on: {
      "click": _vm.loadMore
    }
  }, [!_vm.loading && _vm.hasMorePages ? _c('span', [_vm._v("Load More")]) : _vm._e(), _vm._v(" "), _vm.loading ? _c('span', [_vm._v("Loading...")]) : _vm._e(), _vm._v(" "), !_vm.loading && !_vm.hasMorePages ? _c('span', [_vm._v("No more")]) : _vm._e()])])], 2), _vm._ssrNode(" <div class=\"col-md-2\" data-v-f254cd2c><div class=\"ads_sec\" data-v-f254cd2c><div class=\"ads_img\" data-v-f254cd2c><a href=\"#\" data-v-f254cd2c><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-f254cd2c></a></div> <div class=\"ads_img\" data-v-f254cd2c><a href=\"#\" data-v-f254cd2c><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-f254cd2c></a></div></div></div>")], 2)], 2)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Videos.vue?vue&type=template&id=f254cd2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Videos.vue?vue&type=script&lang=js&
/* harmony default export */ var Videosvue_type_script_lang_js_ = ({
  data() {
    return {
      loading: false,
      currentPage: 1,
      hasMorePages: true,
      items: []
    };
  },
  methods: {
    async fetchItems(page) {
      try {
        const response = await this.$axios.get(`/unauthenticate/defaultShowingMoviesHome`, {
          params: {
            page: page
          }
        });
        const newProducts = response.data;
        if (newProducts.length === 0) {
          this.hasMorePages = false;
        }
        this.items = this.items.concat(newProducts);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async loadMore() {
      if (this.loading || !this.hasMorePages) return;
      this.loading = true;
      try {
        this.currentPage++;
        await this.fetchItems(this.currentPage);
      } catch (error) {
        console.error('Error loading more:', error);
      } finally {
        this.loading = false;
      }
    }
  },
  async mounted() {
    await this.fetchItems(this.currentPage);
  }
});
// CONCATENATED MODULE: ./components/Videos.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Videosvue_type_script_lang_js_ = (Videosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Videos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(43)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Videosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f254cd2c",
  "c368a33c"
  
)

/* harmony default export */ var Videos = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("30fddd0c", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_watch_vue_vue_type_style_index_0_id_69193d97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_watch_vue_vue_type_style_index_0_id_69193d97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_watch_vue_vue_type_style_index_0_id_69193d97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_watch_vue_vue_type_style_index_0_id_69193d97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_watch_vue_vue_type_style_index_0_id_69193d97_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".load-more-btn[data-v-69193d97]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-69193d97]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-69193d97]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-69193d97]:first-child{opacity:0}.load-more-btn:disabled span[data-v-69193d97]:last-child{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/watch.vue?vue&type=template&id=69193d97&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('TopBar'), _vm._ssrNode(" <br data-v-69193d97> <br data-v-69193d97> <div class=\"essential_ cat_banner\" data-v-69193d97><div class=\"container-fluid\" data-v-69193d97><div class=\"row\" data-v-69193d97><div class=\"col-md-12\" data-v-69193d97><div class=\"essential_box\" style=\"min-height: 30vh;display: block;\" data-v-69193d97><div class=\"row\" data-v-69193d97><div class=\"col-md-12\" data-v-69193d97><div class=\"row essential_d\" data-v-69193d97><div class=\"col-md-7 d-flex align-items-center\" data-v-69193d97><h1 class=\"m-0 ms-3\" data-v-69193d97>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</h1></div> <div class=\"col-md-5\" data-v-69193d97><div class=\"essential_d_store_link text-center\" data-v-69193d97><a href=\"#\" data-v-69193d97><img src=\"//images/Play.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-69193d97></a> <a href=\"#\" data-v-69193d97><img src=\"//images/Apple.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-69193d97></a></div> <p class=\"text-end me-3\" data-v-69193d97>Download FunFlix HD app for watching popular\n                                            netflix\n                                            movies and series for free.</p></div></div></div></div></div></div></div></div></div> "), _vm._ssrNode("<div class=\"apps_second cat_apps_view apps_view_box app_page mt-0\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-69193d97><div class=\"col-md-8\" data-v-69193d97><div class=\"video_player\" data-v-69193d97><iframe width=\"640\" height=\"360\" frameborder=\"0\"" + _vm._ssrAttr("src", _vm.download_link) + " allowfullscreen=\"allowfullscreen\" data-v-69193d97></iframe></div></div> <div class=\"col-md-4\" data-v-69193d97><div class=\"ads_sec m-0 p-0\" data-v-69193d97><div class=\"v_slide\" data-v-69193d97><div class=\"ads_img\" data-v-69193d97><img" + _vm._ssrAttr("src", _vm.thumnail_img) + " alt=\"Loading...\" data-v-69193d97></div> <div class=\"d-flex my-3\" data-v-69193d97><a href=\"#\" data-v-69193d97><img src=\"/images/Play.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-69193d97></a> <a href=\"#\" data-v-69193d97><img src=\"/images/Apple.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-69193d97></a></div></div></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"col-md-10\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"apps_details pt-0\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"col-md-12 px-0\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"v_title\" data-v-69193d97>", "</div>", [_vm._ssrNode("<h2 class=\"lead\" data-v-69193d97>" + _vm._ssrEscape(_vm._s(_vm.product_name)) + "</h2> <a" + _vm._ssrAttr("href", _vm.download_link) + " target=\"_blank\" class=\"btn_download\" data-v-69193d97>Download</a> <button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#share\" class=\"_btn_share mt-3\" data-v-69193d97><i class=\"fa-solid fa-share-nodes\" data-v-69193d97></i>Share</button> <div class=\"mt-2\" data-v-69193d97><span class=\"me-3\" data-v-69193d97>" + _vm._ssrEscape("Total Download: " + _vm._s(_vm.counter)) + "</span> <span data-v-69193d97>Total View: 100k</span></div> "), _vm._ssrNode("<div id=\"share\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" class=\"modal fade\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog modal-dialog-centered\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"modal-body\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"share_options\" data-v-69193d97>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-end\" data-v-69193d97><div data-v-69193d97><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\" data-v-69193d97></button></div></div> <div data-v-69193d97><h6 style=\"color: #000;\" data-v-69193d97>Share this with your social\n                                                                    Community</h6> <div class=\"socials\" data-v-69193d97><a href=\"https:/web.whatsapp.com\" target=\"_blank\" data-v-69193d97><img src=\"/images/whatsapp-100.png\" alt data-v-69193d97></a> <a href=\"https://www.messenger.com/\" target=\"_blank\" data-v-69193d97><img src=\"/images/facebook-messenger-100.png\" alt data-v-69193d97></a> <a href=\"https://web.telegram.org/\" target=\"_blank\" data-v-69193d97><img src=\"/images/telegram.png\" alt data-v-69193d97></a></div></div> "), _vm._ssrNode("<div class=\"copy_link\" data-v-69193d97>", "</div>", [_vm._ssrNode("<h6 style=\"color: #000;\" data-v-69193d97>Or copy link : </h6> "), _vm._ssrNode("<div class=\"input_box\" data-v-69193d97>", "</div>", [_c('center', [_c('h3', {
    attrs: {
      "id": "copymsg"
    }
  })]), _vm._ssrNode(" <input type=\"text\" id=\"linkInput\"" + _vm._ssrAttr("value", _vm.downloadlink) + " data-v-69193d97> <button type=\"button\" data-v-69193d97><i class=\"fa-regular fa-copy me-2\" data-v-69193d97></i>Copy\n                                                                    </button>")], 2)], 2)], 2)])])])])], 2)]), _vm._ssrNode(" <div class=\"col-md-12 px-0\" data-v-69193d97><div class=\"app_de\" data-v-69193d97><div class=\"card\" data-v-69193d97><div class=\"card-header\" data-v-69193d97><h5 data-v-69193d97>Description</h5></div> <div class=\"card-body\" data-v-69193d97><p class=\"description\" data-v-69193d97></p></div></div></div></div>")], 2)])]), _vm._ssrNode(" <div class=\"apps_s_grid p-0 m-0 mt-3\" data-v-69193d97><div id=\"loader-main\"" + _vm._ssrStyle(null, null, {
    display: _vm.showLoader ? '' : 'none'
  }) + " data-v-69193d97><div id=\"loader\" data-v-69193d97></div></div> " + _vm._ssrList(_vm.items, function (item) {
    return "<div class=\"apps_box_two\" data-v-69193d97><a href=\"javascript:void(0);\" data-v-69193d97><div class=\"s_img_box\" data-v-69193d97><img" + _vm._ssrAttr("src", item.thumnail_img) + " loading=\"lazy\" alt class=\"img-fluid img_banner\" data-v-69193d97></div> <div class=\"d_box\" data-v-69193d97><h3 data-v-69193d97>" + _vm._ssrEscape(_vm._s(item.product_name)) + "</h3> <div class=\"d-flex align-items-center\" data-v-69193d97><a href=\"javascript:void(0);\" class=\"btn_download\" data-v-69193d97>Download</a></div></div></a></div>";
  }) + "</div> "), _c('center', [_c('button', {
    staticClass: "load-more-btn mt-5",
    attrs: {
      "disabled": _vm.loading
    },
    on: {
      "click": _vm.loadMore
    }
  }, [!_vm.loading ? _c('span', [_vm._v("Load More")]) : _c('span', [_vm._v("Loading...")])])])], 2)])], 2)]), _vm._ssrNode(" "), _c('Support'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/videos/watch.vue?vue&type=template&id=69193d97&scoped=true&

// EXTERNAL MODULE: ./components/TopBar.vue + 4 modules
var TopBar = __webpack_require__(37);

// EXTERNAL MODULE: ./components/Support.vue + 2 modules
var Support = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(36);

// EXTERNAL MODULE: ./components/Videos.vue + 4 modules
var Videos = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/watch.vue?vue&type=script&lang=js&




/* harmony default export */ var watchvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar["a" /* default */],
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */],
    Videos: Videos["a" /* default */]
  },
  data() {
    return {
      currentPage: 1,
      hasMorePages: true,
      downloadlink: '',
      popularCategorys: [],
      showLoader: false,
      product_name: '',
      description: '',
      thumnail_img: '',
      download_link: '',
      counter: 0,
      fullUrl: '',
      loading: false,
      page: 1,
      items: []
    };
  },
  async asyncData({
    $axios
  }) {
    try {
      const response = await $axios.get('/meta-videos');
      console.log("response", response.data);
      return {
        meta: response.data // Save API response
      };
    } catch (error) {
      console.error('Error fetching meta data:', error);
      return {
        meta: {} // Provide a default value if the API call fails
      };
    }
  },

  head() {
    const meta = this.meta || {}; // Ensure `this.meta` is not undefined
    return {
      title: this.product_name,
      // Dynamically set title
      htmlAttrs: {
        lang: "en"
      },
      meta: [{
        charset: "utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        hid: "description",
        name: meta.description,
        content: meta.description || ""
      }, {
        name: "format-detection",
        content: "telephone=no"
      }]
    };
  },
  async mounted() {
    await this.fetchItems(this.currentPage);
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
    const paramSlug = this.$route.query.slug;
    console.log("paramSlug: " + paramSlug);
    // await this.loadMore();
    this.fetchData();
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
    async fetchItems(page) {
      try {
        const response = await this.$axios.get(`/unauthenticate/defaultShowingMoviesHome`, {
          params: {
            page: page
          }
        });
        const newProducts = response.data;
        if (newProducts.length === 0) {
          this.hasMorePages = false;
        }
        this.items = this.items.concat(newProducts);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    },
    async loadMore() {
      if (this.loading || !this.hasMorePages) return;
      this.loading = true;
      try {
        this.currentPage++;
        await this.fetchItems(this.currentPage);
      } catch (error) {
        console.error('Error loading more:', error);
      } finally {
        this.loading = false;
      }
    },
    async getVideo(slug) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      try {
        this.showLoader = true;
        const response = await this.$axios.get('/unauthenticate/filderProduct', {
          params: {
            slug: slug
          }
        });
        //this.showLoader = false;
        this.categoryname = response.data.categoryname;
        this.product_name = response.data.product_name;
        this.thumnail_img = response.data.thumnail_img;
        this.download_link = response.data.download_link;
        this.counter = response.data.counter;
        $(".description").html(response.data.description);
      } catch (error) {
        console.error('Error loading more data', error);
      } finally {
        this.showLoader = false;
      }
    },
    shareLink() {
      const path = window.location.href;
      console.log("===" + path);
      this.downloadlink = path;
    },
    async fetchData() {
      try {
        const response = await this.$axios.get('/unauthenticate/getProductrow', {
          params: {
            slug: this.$route.query.slug
          }
        });
        this.product_name = response.data.product_name;
        this.thumnail_img = response.data.thumnail_img;
        this.download_link = response.data.download_link;
        this.counter = response.data.counter;
        $(".description").html(response.data.description);
        this.popularProduct(response.data.category_slug);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    },
    async popularProduct(category_slug) {
      console.log("caregory slug: " + category_slug);
      try {
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: category_slug
          }
        });
        this.popularCategorys = response.data.result;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }

    //end 
  }
});
// CONCATENATED MODULE: ./pages/videos/watch.vue?vue&type=script&lang=js&
 /* harmony default export */ var videos_watchvue_type_script_lang_js_ = (watchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/videos/watch.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  videos_watchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "69193d97",
  "4743c1a2"
  
)

/* harmony default export */ var watch = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=watch.js.map