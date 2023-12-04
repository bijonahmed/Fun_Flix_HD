exports.ids = [10];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(16).default
module.exports.__inject__ = function (context) {
  add("569b8f14", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_317bba16_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
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
  
  var style0 = __webpack_require__(43)
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy-alert.vue?vue&type=template&id=2382e120&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-circle-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"></div> "), _vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-circle-info"
  })])], 1)], 2)])])])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_part\">", "</section>", [_vm._ssrNode("<div class=\"privacy_box\">", "</div>", [_vm._ssrNode("<h5>Help us improve BRICS</h5> <p>BRICS would like to gather usage data to better understand how our users interact with BRICS. This data will be used to provide the service, which includes improving the service based on your use.\r\n\r\n                BRICS will...</p> <ul><li><div class=\"p_alert\"><span class=\"l_style_check\"></span> <p>Always allow you to opt-out via Settings</p></div></li> <li><div class=\"p_alert\"><span class=\"l_style_check\"></span> <p>Send anonymized click and pageview events</p></div></li> <li><div class=\"p_alert\"><span class=\"l_style\"></span> <p>Never collect information we don’t need to provide the service (such as keys, addresses, transaction hashes, or balances)</p></div></li> <li><div class=\"p_alert\"><span class=\"l_style\"></span> <p> Never collect your full IP address*</p></div></li> <li><div class=\"p_alert\"><span class=\"l_style\"></span> <p>Never sell data. Ever!</p></div></li></ul> <p>This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation (EU) 2016/679.</p> <p>* When you use Infura as your default RPC provider in BRICS, Infura will collect your IP address and your Ethereum wallet address when you send a transaction. We don’t store this information in a way that allows our systems to associate those two pieces of data. For more information on how BRICS and Infura interact from a data collection perspective, see our update here. For more information on our privacy practices in general, see our <a href=\"#\">Privacy Policy</a> here.</p> "), _c('nuxt-link', {
    staticClass: "btn_ok",
    attrs: {
      "to": "/create-identity"
    }
  }, [_vm._v("Agree")]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "btn_no",
    attrs: {
      "to": "/create-identity"
    }
  }, [_vm._v("No Thanks")])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/privacy-alert.vue?vue&type=template&id=2382e120&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy-alert.vue?vue&type=script&lang=js&

/* harmony default export */ var privacy_alertvue_type_script_lang_js_ = ({
  head: {
    title: 'Privacy alert'
  },
  components: {
    Loader: Loader["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/privacy-alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_privacy_alertvue_type_script_lang_js_ = (privacy_alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/privacy-alert.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_privacy_alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0808517a"
  
)

/* harmony default export */ var privacy_alert = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=privacy-alert.js.map