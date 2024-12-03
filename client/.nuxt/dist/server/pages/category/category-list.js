exports.ids = [2];
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

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(17).default
module.exports.__inject__ = function (context) {
  add("d2740fd6", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_20d9b718_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_20d9b718_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_20d9b718_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_20d9b718_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_list_vue_vue_type_style_index_0_id_20d9b718_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(16);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".eseheight[data-v-20d9b718]{display:block;min-height:30vh}.load-more-btn[data-v-20d9b718]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-20d9b718]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-20d9b718]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-20d9b718]:first-child{opacity:0}.load-more-btn:disabled span[data-v-20d9b718]:last-child{opacity:1}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/category-list.vue?vue&type=template&id=20d9b718&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('TopBar'), _vm._ssrNode(" <br data-v-20d9b718><br data-v-20d9b718> <div class=\"essential_ cat_banner\" data-v-20d9b718><div class=\"container-fluid\" data-v-20d9b718><div class=\"row\" data-v-20d9b718><div class=\"col-md-12\" data-v-20d9b718><div class=\"essential_box eseheight\" data-v-20d9b718><div class=\"row\" data-v-20d9b718><div class=\"col-md-12\" data-v-20d9b718><div class=\"row essential_d\" data-v-20d9b718><div class=\"col-md-7 d-flex align-items-center\" data-v-20d9b718><h1 class=\"m-0 ms-3\" data-v-20d9b718>" + _vm._ssrEscape(_vm._s(_vm.categoryname)) + "</h1></div> <div class=\"col-md-5\" data-v-20d9b718><div class=\"essential_d_store_link text-center\" data-v-20d9b718><a href=\"#\" data-v-20d9b718><img src=\"/images/Play.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-20d9b718></a> <a href=\"#\" data-v-20d9b718><img src=\"/images/Apple.png\" loading=\"lazy\" alt class=\"img-fluid\" data-v-20d9b718></a></div> <p class=\"text-end me-3\" data-v-20d9b718>Download FunFlix HD app for watching popular\n                                            Netflix movies and series for free.</p></div></div></div></div></div></div></div></div></div> "), _vm._ssrNode("<section class=\"n_apps\" data-v-20d9b718>", "</section>", [_vm._ssrNode("<div class=\"container-fluid\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"col-md-10\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div id=\"loader-main\"" + _vm._ssrStyle(null, null, {
    display: _vm.showLoader ? '' : 'none'
  }) + " data-v-20d9b718><div id=\"loader\" data-v-20d9b718></div></div> "), _vm._ssrNode("<div class=\"n_apps_grid\" data-v-20d9b718>", "</div>", _vm._l(_vm.items, function (item, index) {
    return _vm._ssrNode("<div class=\"n_apps_view\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", item.thumnail_img) + " loading=\"lazy\" alt class=\"img-fluid v_app_img\" data-v-20d9b718> "), _vm._ssrNode("<div class=\"n_view\" data-v-20d9b718>", "</div>", [_c('nuxt-link', {
      attrs: {
        "to": '/category/download?slug=' + item.pro_slug
      }
    }, [_vm._v(_vm._s(item.p_name))]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"m_apps_btns\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"btn-group\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div data-v-20d9b718>", "</div>", [_c('nuxt-link', {
      staticClass: "btn_download btn-sm",
      attrs: {
        "to": '/category/download?slug=' + item.pro_slug,
        "type": "button"
      }
    }, [_c('img', {
      attrs: {
        "src": "/images/btn_download.png",
        "alt": ""
      }
    })])], 1), _vm._ssrNode(" <div data-v-20d9b718><button type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#share\" class=\"btn_search btn-sm share_btns\" data-v-20d9b718><img src=\"/images/share-100.png\" alt data-v-20d9b718></button></div>")], 2)])], 2)], 2);
  }), 0), _vm._ssrNode(" <br data-v-20d9b718> <div class=\"text-center\" data-v-20d9b718><button" + _vm._ssrAttr("disabled", _vm.loading) + " class=\"load-more-btn text-center\" data-v-20d9b718>" + (!_vm.loading ? "<span data-v-20d9b718>Load More</span>" : "<span data-v-20d9b718>Loading...</span>") + "</button></div>")], 2), _vm._ssrNode(" <div class=\"col-md-2\" data-v-20d9b718><div class=\"ads_sec mt-0 cat_page_ads\" style=\"padding-right: 40px; position: relative;\" data-v-20d9b718><div class=\"ads_img\" data-v-20d9b718><a href=\"#\" data-v-20d9b718><img src=\"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png\" alt data-v-20d9b718></a></div> <div class=\"ads_img\" data-v-20d9b718><iframe src=\"//s0.2mdn.net/dfp/1754321/4628264607/1695719733125/300 x 250/index.html\" width=\"300\" height=\"250\" frameborder=\"0\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\" style=\"width: 300px; height: 250px;\" data-v-20d9b718></iframe></div></div></div>")], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"share\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" class=\"modal fade\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"modal-dialog modal-dialog-centered\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"modal-content\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"modal-body\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"share_options\" data-v-20d9b718>", "</div>", [_vm._ssrNode("<div class=\"d-flex justify-content-end\" data-v-20d9b718><div data-v-20d9b718><button type=\"button\" data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn-close\" data-v-20d9b718></button></div></div> "), _vm._ssrNode("<div data-v-20d9b718>", "</div>", [_c('center', [_c('h3', {
    attrs: {
      "id": "copymsg"
    }
  })]), _vm._ssrNode(" <h6 style=\"color: #000;\" data-v-20d9b718>Share this with your social Community</h6> <div class=\"socials\" data-v-20d9b718><a href=\"https:/web.whatsapp.com\" target=\"_blank\" data-v-20d9b718><img src=\"/images/whatsapp-100.png\" alt data-v-20d9b718></a> <a href=\"https://www.messenger.com/\" target=\"_blank\" data-v-20d9b718><img src=\"/images/facebook-messenger-100.png\" alt data-v-20d9b718></a> <a href=\"https://web.telegram.org/\" target=\"_blank\" data-v-20d9b718><img src=\"/images/telegram.png\" alt data-v-20d9b718></a></div>")], 2), _vm._ssrNode(" <div class=\"copy_link\" data-v-20d9b718><h6 style=\"color: #000;\" data-v-20d9b718>Or copy link : </h6> <div class=\"input_box\" data-v-20d9b718><input type=\"text\" id=\"linkInput\"" + _vm._ssrAttr("value", _vm.downloadlink) + " data-v-20d9b718> <button type=\"button\" data-v-20d9b718>Copy </button></div></div>")], 2)])])])]), _vm._ssrNode(" "), _c('Support'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/category/category-list.vue?vue&type=template&id=20d9b718&scoped=true&

// EXTERNAL MODULE: ./components/TopBar.vue + 4 modules
var TopBar = __webpack_require__(37);

// EXTERNAL MODULE: ./components/Support.vue + 2 modules
var Support = __webpack_require__(38);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category/category-list.vue?vue&type=script&lang=js&



/* harmony default export */ var category_listvue_type_script_lang_js_ = ({
  components: {
    TopBar: TopBar["a" /* default */],
    Support: Support["a" /* default */],
    Footer: Footer["a" /* default */]
  },
  data() {
    return {
      downloadlink: '',
      loading: false,
      showLoader: false,
      categoryname: '',
      page: 1,
      items: [],
      metaDescription: '',
      // For dynamic description
      metaKeywords: '' // For dynamic keywords
    };
  },

  watch: {
    async $route(to, from) {
      try {
        const slug = this.$route.query.slug;
        this.showLoader = true;
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug
          }
        });
        this.showLoader = false;
        this.items = response.data.result;
        this.categoryname = response.data.categoryname;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  async asyncData({
    $axios
  }) {
    try {
      const response = await $axios.get('/meta-category');
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
      title: this.categoryname,
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
    try {
      setTimeout(() => {
        this.showLoader = false;
      }, 1000);
      await this.loadMore();
      this.fetchcatData();
    } catch (error) {
      console.error('Error fetching meta data:', error);
    }
  },
  methods: {
    copyLink() {
      $("#copymsg").html();
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
    async fetchcatData() {
      try {
        const response = await this.$axios.get('/unauthenticate/findCategorys', {
          params: {
            slug: this.$route.query.slug
          }
        });
        this.items = response.data.result;
        this.categoryname = response.data.categoryname;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async loadMore() {
      if (this.loading) return;
      try {
        this.loading = true;
        const response = await this.$axios.get('/unauthenticate/catloadMorePagination', {
          params: {
            slug: this.$route.query.slug,
            page: this.page + 1
          }
        });
        this.items = this.items.concat(response.data.data);
        this.page++;
      } catch (error) {
        console.error('Error loading more data', error);
      } finally {
        this.loading = false;
      }
    },
    sharelink(download_link) {
      console.log("download_link: " + download_link);
      this.downloadlink = download_link;
    }
  }
});
// CONCATENATED MODULE: ./pages/category/category-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var category_category_listvue_type_script_lang_js_ = (category_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/category/category-list.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  category_category_listvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "20d9b718",
  "24f32893"
  
)

/* harmony default export */ var category_list = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=category-list.js.map