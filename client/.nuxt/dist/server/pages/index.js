exports.ids = [7];
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
  add("26ee9881", content, true, context)
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
  "acc9c476"
  
)

/* harmony default export */ var Footer = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TopBar.vue?vue&type=template&id=54de6b9c&scoped=true&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"top_bar _nav\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"container-fluid\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"row\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"col-md-12\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<nav class=\"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top\" data-v-54de6b9c>", "</nav>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-54de6b9c>", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand navbar_brand",
    attrs: {
      "to": "/"
    }
  }, [_c('h6', [_vm._v("FunFlix HD")])]), _vm._ssrNode(" <button type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\" data-v-54de6b9c><span class=\"navbar-toggler-icon\" data-v-54de6b9c></span></button> "), _vm._ssrNode("<div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\" data-v-54de6b9c>", "</div>", [_vm._ssrNode("<ul class=\"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0\" data-v-54de6b9c>", "</ul>", _vm._l(_vm.categories, function (category) {
    return _vm._ssrNode("<li class=\"nav-item dropdown\" data-v-54de6b9c>", "</li>", [_vm._ssrNode("<a href=\"#\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" class=\"nav-link\" data-v-54de6b9c><div data-v-54de6b9c><i" + _vm._ssrClass(null, category.file) + " data-v-54de6b9c></i>" + _vm._ssrEscape("\r\n                                                " + _vm._s(category.name) + "\r\n                                            ") + "</div> <i class=\"fa-solid fa-caret-down\" data-v-54de6b9c></i></a> "), category.children.length > 0 ? _vm._ssrNode("<ul class=\"dropdown-menu\" data-v-54de6b9c>", "</ul>", _vm._l(category.children, function (childCategory) {
      return _vm._ssrNode("<li data-v-54de6b9c>", "</li>", [childCategory.parent_id === 1 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/category/category-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 2 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/games/games-list?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 3 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/videos/videodetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e(), _vm._ssrNode(" "), childCategory.parent_id === 4 ? _c('nuxt-link', {
        staticClass: "dropdown-item",
        attrs: {
          "to": '/course/coursedetails?slug=' + childCategory.slug
        }
      }, [_vm._v(_vm._s(childCategory.name))]) : _vm._e()], 2);
    }), 0) : _vm._e()], 2);
  }), 0), _vm._ssrNode(" <form class=\"d-flex s-form\" data-v-54de6b9c><input id=\"search\" placeholder=\"Search Movies,Software,Games,Tutorial...\"" + _vm._ssrAttr("value", _vm.searchInput) + " class=\"form-control\" data-v-54de6b9c> <input type=\"hidden\" class=\"parent\" data-v-54de6b9c> <input type=\"hidden\" class=\"selected_slug\" data-v-54de6b9c> <button type=\"submit\" class=\"btn btn-outline-success d-flex align-items-center\" data-v-54de6b9c><i class=\"fa-solid fa-magnifying-glass\" data-v-54de6b9c></i></button></form> <div style=\"display:none\" data-v-54de6b9c><form id=\"formrest\" enctype=\"multipart/form-data\" class=\"forms-sample\" data-v-54de6b9c><input type=\"text\" class=\"parent\" data-v-54de6b9c> <input type=\"text\" class=\"selected_slug\" data-v-54de6b9c> <button type=\"submit\" class=\"btn btn-success px-5 w-100 clickbtn\" data-v-54de6b9c><i class=\"bx bx-check-circle mr-1\" data-v-54de6b9c></i> Submit</button></form></div>")], 2)], 2)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopBar.vue?vue&type=template&id=54de6b9c&scoped=true&lang=en&

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
  "54de6b9c",
  "11b58528"
  
)

/* harmony default export */ var TopBar = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Support.vue?vue&type=template&id=34ae9877&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"support pt-4\"><div class=\"container\"><div class=\"row py-4\"><div class=\"col-md-12\"><div class=\"support_content wow fadeIn\"><h1>FunFlixHD</h1> <p>Dive into the world of entertainment and education at FunFlixHD.com! \r\n      Explore the latest movies, cutting-edge software, thrilling games, \r\n      and enriching courses. Your gateway to endless possibilities for leisure and learning awaits!</p></div></div></div></div></section> <section class=\"grow_business\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 m-auto text-center\"><div class=\"grow_content wow fadeIn\"><a href=\"https://fansgame.online\" target=\"_blank\"><img src=\"/images/ads_banner.gif\" loading=\"lazy\" alt class=\"img-fluid\"></a></div></div></div></div></section>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Support.vue?vue&type=template&id=34ae9877&

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
  "46d3cbd6"
  
)

/* harmony default export */ var Support = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBar_vue_vue_type_style_index_0_id_54de6b9c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}", ""]);
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

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("569b8f14", content, true, context)
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
  "14e885fc"
  
)

/* harmony default export */ var Videos = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=template&id=317bba16&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showLoader,
      expression: "showLoader"
    }],
    staticClass: "loader"
  }, [_vm._ssrNode("<div class=\"load_box\" data-v-317bba16><img src=\"/images/logo_loader.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-317bba16> <h6 data-v-317bba16>BRICS</h6> <h6 style=\"font-weight: 300;\" data-v-317bba16>Loading...</h6></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Loader.vue?vue&type=template&id=317bba16&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Loader.vue?vue&type=script&lang=js&
/* harmony default export */ var Loadervue_type_script_lang_js_ = ({
  data() {
    return {
      showLoader: true
    };
  },
  mounted() {
    // Hide the loader after 2 seconds
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
});
// CONCATENATED MODULE: ./components/Loader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loadervue_type_script_lang_js_ = (Loadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Loader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "317bba16",
  "669f9c3d"
  
)

/* harmony default export */ var Loader = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(17).default("177712ff", content, true)

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(66);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(67);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".owl-carousel{-webkit-tap-highlight-color:transparent;display:none;position:relative;width:100%;z-index:1}.owl-carousel .owl-stage{-moz-backface-visibility:hidden;position:relative;touch-action:manipulation}.owl-carousel .owl-stage:after{clear:both;content:\".\";display:block;height:0;line-height:0;visibility:hidden}.owl-carousel .owl-stage-outer{overflow:hidden;position:relative;-webkit-transform:translateZ(0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0)}.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-backface-visibility:hidden;float:left;min-height:1px;position:relative}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:none;border:none;color:inherit;font:inherit;padding:0!important}.owl-carousel.owl-loaded{display:block}.owl-carousel.owl-loading{display:block;opacity:0}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.no-js .owl-carousel{display:block}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=\"\"]{max-height:0}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{background:#000;height:100%;position:relative}.owl-carousel .owl-video-play-icon{-webkit-backface-visibility:hidden;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;cursor:pointer;height:80px;left:50%;margin-left:-40px;margin-top:-40px;position:absolute;top:50%;transition:transform .1s ease;width:80px;z-index:1}.owl-carousel .owl-video-play-icon:hover{transform:scale(1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;opacity:0;transition:opacity .4s ease}.owl-carousel .owl-video-frame{height:100%;position:relative;width:100%;z-index:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/owl.video.play.4a37f80.png";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=f9f96024&lang=en&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('TopBar'), _vm._ssrNode(" "), _c('Slider'), _vm._ssrNode(" "), _c('Videos'), _vm._ssrNode(" "), _c('Support'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=f9f96024&lang=en&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=template&id=1b6f2208&
var Slidervue_type_template_id_1b6f2208_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div id=\"loader-main\"" + _vm._ssrStyle(null, null, {
    display: _vm.showLoader ? '' : 'none'
  }) + "><div id=\"loader\"></div></div> "), _vm._ssrNode("<div class=\"container-fluid mt-5\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"carousel_slider\">", "</div>", [_vm._ssrNode("<div class=\"owl-carousel _slide\">", "</div>", _vm._l(_vm.slides, function (slide, index) {
    return _vm._ssrNode("<div class=\"img_slide\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/videos/watch?slug=' + slide.redirect_url
      }
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": slide.images,
        "alt": slide.id
      }
    })])], 1);
  }), 0)])])])])], 2);
};
var Slidervue_type_template_id_1b6f2208_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Slider.vue?vue&type=template&id=1b6f2208&

// EXTERNAL MODULE: ./node_modules/owl.carousel/dist/assets/owl.carousel.css
var owl_carousel = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Slider.vue?vue&type=script&lang=js&

/* harmony default export */ var Slidervue_type_script_lang_js_ = ({
  data() {
    return {
      showLoader: false,
      slides: [],
      owlCarouselInstance: null
    };
  },
  async mounted() {
    await this.getSlides();
    if (false) {}
  },
  methods: {
    async getSlides() {
      this.showLoader = true;
      try {
        const response = await this.$axios.get('/unauthenticate/sliders');
        this.slides = response.data;
      } catch (error) {
        console.error('Error fetching slides:', error);
      } finally {
        this.showLoader = false; // Hide loader after response or error
      }
    },

    initOwlCarousel() {
      this.$nextTick(() => {
        this.owlCarouselInstance = $(this.$refs.owlCarousel).owlCarousel({
          items: 3,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }
        });
      });
    }
  },
  beforeDestroy() {
    if (this.owlCarouselInstance) {
      this.owlCarouselInstance.trigger('destroy.owl.carousel').removeClass('owl-loaded');
      this.owlCarouselInstance.find('.owl-stage-outer').children().unwrap();
    }
  }
});
// CONCATENATED MODULE: ./components/Slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Slidervue_type_script_lang_js_ = (Slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Slider.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Slidervue_type_script_lang_js_,
  Slidervue_type_template_id_1b6f2208_render,
  Slidervue_type_template_id_1b6f2208_staticRenderFns,
  false,
  null,
  null,
  "d24463ea"
  
)

/* harmony default export */ var Slider = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsSlider.vue?vue&type=template&id=79f222ca&
var NewsSlidervue_type_template_id_79f222ca_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div bis_skin_checked=\"1\" class=\"slider\"><div bis_skin_checked=\"1\" class=\"slide-track\"><div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div> <div bis_skin_checked=\"1\" class=\"slide\"><h6><span style=\"color: gold;\"> ☆ <span></span></span> Free Download </h6></div></div></div>")]);
};
var NewsSlidervue_type_template_id_79f222ca_staticRenderFns = [];

// CONCATENATED MODULE: ./components/NewsSlider.vue?vue&type=template&id=79f222ca&

// CONCATENATED MODULE: ./components/NewsSlider.vue

var script = {}


/* normalize component */

var NewsSlider_component = Object(componentNormalizer["a" /* default */])(
  script,
  NewsSlidervue_type_template_id_79f222ca_render,
  NewsSlidervue_type_template_id_79f222ca_staticRenderFns,
  false,
  null,
  null,
  "34f39f84"
  
)

/* harmony default export */ var NewsSlider = (NewsSlider_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/TopFreeApps.vue?vue&type=template&id=9df88d9a&
var TopFreeAppsvue_type_template_id_9df88d9a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"apps_first\">", "</div>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<a href=\"category.html\" class=\"t_link\">Top Free Apps <i class=\"fa-solid fa-angle-right\"></i></a> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-10\">", "</div>", [_vm._ssrNode("<div class=\"apps_f_grid\">", "</div>", _vm._l(_vm.products, function (product) {
    return _vm._ssrNode("<div class=\"apps_box_one\">", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/category/download?slug=' + product.pro_slug
      }
    }, [_c('div', {
      staticClass: "aap_fst_tle"
    }, [_c('div', {
      staticClass: "img_box"
    }, [_c('img', {
      staticClass: "img-fluid",
      attrs: {
        "src": product.thumnail_img,
        "loading": "lazy",
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "m_align"
    }, [_c('h3', [_vm._v(_vm._s(product.product_name))]), _vm._v(" "), _c('p', [_c('span', [_vm._v(_vm._s(product.category_name))])])]), _vm._v(" "), _c('div')])])], 1);
  }), 0)]), _vm._ssrNode(" <div class=\"col-md-2\"><div class=\"ads_sec\"><div class=\"ads_img_long\"><a href=\"https://pec-shopping.com\"><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt></a></div></div></div>")], 2)], 2)])])])]);
};
var TopFreeAppsvue_type_template_id_9df88d9a_staticRenderFns = [];

// CONCATENATED MODULE: ./components/TopFreeApps.vue?vue&type=template&id=9df88d9a&

// EXTERNAL MODULE: ./components/TopBar.vue + 4 modules
var TopBar = __webpack_require__(37);

// EXTERNAL MODULE: ./components/Support.vue + 2 modules
var Support = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopFreeApps.vue?vue&type=script&lang=js&



/* harmony default export */ var TopFreeAppsvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar["a" /* default */],
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */]
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.get('/unauthenticate/defaultShowingProduct');
        this.products = response.data;
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    }
    //end 
  },

  computed: {}
});
// CONCATENATED MODULE: ./components/TopFreeApps.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopFreeAppsvue_type_script_lang_js_ = (TopFreeAppsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/TopFreeApps.vue





/* normalize component */

var TopFreeApps_component = Object(componentNormalizer["a" /* default */])(
  components_TopFreeAppsvue_type_script_lang_js_,
  TopFreeAppsvue_type_template_id_9df88d9a_render,
  TopFreeAppsvue_type_template_id_9df88d9a_staticRenderFns,
  false,
  null,
  null,
  "178bbe8e"
  
)

/* harmony default export */ var TopFreeApps = (TopFreeApps_component.exports);
// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/EssentialApps.vue?vue&type=template&id=c60e4fcc&
var EssentialAppsvue_type_template_id_c60e4fcc_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"essential_\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><div class=\"essential_box\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"essential_d\"><h1>Essentail apps</h1> <p>Turn your favorite photos and videos into works of art with these great apps</p> <a href=\"category.html\">See all </a> <img src=\"/images/ads_size/long_ads.gif\" loading=\"lazy\" alt class=\"img-fluid\"></div></div> <div class=\"col-md-8\"><div class=\"essential_grid _apps\"><div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/media encoder.jpg);\"></div> <img src=\"/images/software_images/media encoder.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>!Telegram Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quibusdam.</h3> <div class=\"d-flex align-items-center\"><a href=\"javascript:\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/centos7.jpg);\"></div> <img src=\"/images/software_images/centos7.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"app_details.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/download-adobe-photoshop-cs-8-0.jpg);\"></div> <img src=\"/images/software_images/download-adobe-photoshop-cs-8-0.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"app_details.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/rons-water-bundle-large.jpg);\"></div> <img src=\"/images/software_images/rons-water-bundle-large.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"app_details.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/download-adobe-photoshop-cs-8-0.jpg);\"></div> <img src=\"/images/software_images/download-adobe-photoshop-cs-8-0.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"app_details.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"app_details.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(/images/software_images/rons-water-bundle-large.jpg);\"></div> <img src=\"/images/software_images/rons-water-bundle-large.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"app_details.html\" class=\"btn_download\">Download</a></div></div></a></div></div></div></div></div></div></div></div></div>")]);
};
var EssentialAppsvue_type_template_id_c60e4fcc_staticRenderFns = [];

// CONCATENATED MODULE: ./components/EssentialApps.vue?vue&type=template&id=c60e4fcc&

// CONCATENATED MODULE: ./components/EssentialApps.vue

var EssentialApps_script = {}


/* normalize component */

var EssentialApps_component = Object(componentNormalizer["a" /* default */])(
  EssentialApps_script,
  EssentialAppsvue_type_template_id_c60e4fcc_render,
  EssentialAppsvue_type_template_id_c60e4fcc_staticRenderFns,
  false,
  null,
  null,
  "064d6a26"
  
)

/* harmony default export */ var EssentialApps = (EssentialApps_component.exports);
// EXTERNAL MODULE: ./components/Videos.vue + 4 modules
var Videos = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/Courses.vue?vue&type=template&id=b2a63c10&
var Coursesvue_type_template_id_b2a63c10_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"apps_second\"><div class=\"container-fluid\"><div class=\"row\"><div class=\"col-md-12\"><a href=\"category.html\" class=\"t_link\">Popular Courses <i class=\"fa-solid fa-angle-right\"></i></a> <div class=\"apps_s_grid _apps\"><div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/media encoder.jpg);\"></div> <img src=\"/images/software_images/media encoder.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/centos7.jpg);\"></div> <img src=\"/images/software_images/centos7.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/download-adobe-photoshop-cs-8-0.jpg);\"></div> <img src=\"/images/software_images/download-adobe-photoshop-cs-8-0.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/rons-water-bundle-large.jpg);\"></div> <img src=\"/images/software_images/rons-water-bundle-large.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png);\"></div> <img src=\"/images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/speed_Adobe-Photoshop-CS6.jpg);\"></div> <img src=\"/images/software_images/speed_Adobe-Photoshop-CS6.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png);\"></div> <img src=\"/images/software_images/th_Ene76PNllk6ODlJsM9lJ6Nch7VMCuST8.png\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>Telegram</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div> <div class=\"apps_box_two\"><a href=\"course_list.html\"><div class=\"s_img_box\"><div class=\"blur_box\" style=\" background-image: var(--theme-noise-image-to-linear-gradient), linear-gradient(transparent, transparent), url(..//images/software_images/speed_Adobe-Photoshop-CS6.jpg);\"></div> <img src=\"/images/software_images/speed_Adobe-Photoshop-CS6.jpg\" loading=\"lazy\" alt class=\"img-fluid\"></div> <div class=\"d_box\"><h3>YouTube</h3> <div class=\"d-flex align-items-center\"><a href=\"course_list.html\" class=\"btn_download\">Download</a></div></div></a></div></div></div></div></div></div>")]);
};
var Coursesvue_type_template_id_b2a63c10_staticRenderFns = [];

// CONCATENATED MODULE: ./components/Courses.vue?vue&type=template&id=b2a63c10&

// CONCATENATED MODULE: ./components/Courses.vue

var Courses_script = {}


/* normalize component */

var Courses_component = Object(componentNormalizer["a" /* default */])(
  Courses_script,
  Coursesvue_type_template_id_b2a63c10_render,
  Coursesvue_type_template_id_b2a63c10_staticRenderFns,
  false,
  null,
  null,
  "4706a17e"
  
)

/* harmony default export */ var Courses = (Courses_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&










/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    Slider: Slider,
    Loader: Loader["a" /* default */],
    NewsSlider: NewsSlider,
    TopFreeApps: TopFreeApps,
    TopBar: TopBar["a" /* default */],
    EssentialApps: EssentialApps,
    Videos: Videos["a" /* default */],
    Courses: Courses,
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f76fb884"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map