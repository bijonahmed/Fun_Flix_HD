exports.ids = [9];
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/phrase.vue?vue&type=template&id=b19486c8&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<section class=\"top_bar\">", "</section>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_c('center', [_c('Loader')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"top_bar_home\">", "</div>", [_vm._ssrNode("<div class=\"link_home\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/privacy-alert",
      "type": "button"
    }
  }, [_c('i', {
    staticClass: "fa-solid fa-circle-chevron-left"
  })])], 1), _vm._ssrNode(" <div class=\"t_b\"></div> <div class=\"link_home\"><a href=\"#\"><i class=\"fa-solid fa-circle-info\"></i></a></div>")], 2)])], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<section class=\"main_part sm_height\">", "</section>", [_vm._ssrNode("<div class=\"st_part\">", "</div>", [_vm._ssrNode("<div class=\"container-fluid\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-md-12\"><div class=\"create_step\"><div class=\"step_box active\"><h1>1</h1> <p>Create identity</p></div> <div class=\"step_box active\"><h1>2</h1> <p>Secure wallet</p> <span></span></div> <div class=\"step_box\"><h1>3</h1> <p>Confirm secret recovery phrase</p> <span></span></div></div></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-12\">", "</div>", [_vm._ssrNode("<div class=\"backUup_phrase\">", "</div>", [_vm._ssrNode("<h1>Secret Recovery Phrase </h1> <p>Write down the secreat recovery phrase on coorect order on a piece of paper.</p> "), _vm._ssrNode("<form action>", "</form>", [_vm._ssrNode("<div id=\"securityPhrasesContainer\" class=\"phrase_box\"><div class=\"code_box\"><h4 class=\"tag\"></h4> <p>1</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>2</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>3</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>4</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>5</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>6</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>7</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>8</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>9</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>10</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>11</p></div> <div class=\"code_box\"><h4 class=\"tag\"></h4> <p>12</p></div></div> <p class=\"text-center success_msg\">\r\n                                    Successfully Copied.\r\n                                </p> "), _vm._ssrNode("<div class=\"d-flex justify-content-center align-items-cente\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/confirm-phrase"
    }
  }, [_c('button', {
    staticClass: "btn_ok add_c_pa mt-2",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Next")])]), _vm._ssrNode(" <button type=\"button\" id=\"copyAllButton\" class=\"btn_ok mt-2\">Copy</button>")], 2)], 2), _vm._ssrNode(" <button id=\"generateSequence\" type=\"button\" class=\"btn_ok d-none\">Genarate</button> <ul><li>\r\n                                    Keep the secrect security phrase in a safe place that always stay offline.\r\n                                </li> <li>\r\n                                    Never share the security phrase online using emails, photos or social media.\r\n                                </li></ul>")], 2)])])], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/phrase.vue?vue&type=template&id=b19486c8&

// EXTERNAL MODULE: ./components/Loader.vue + 4 modules
var Loader = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/phrase.vue?vue&type=script&lang=js&

/* harmony default export */ var phrasevue_type_script_lang_js_ = ({
  head: {
    title: 'Phrase'
  },
  components: {
    Loader: Loader["a" /* default */]
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
});
// CONCATENATED MODULE: ./pages/phrase.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_phrasevue_type_script_lang_js_ = (phrasevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/phrase.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_phrasevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e3975fd"
  
)

/* harmony default export */ var phrase = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=phrase.js.map