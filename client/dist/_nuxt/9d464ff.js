(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{377:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("26ee9881",content,!0,{sourceMap:!1})},378:function(t,e,r){"use strict";var n=r(74),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("footer",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"term_condition"},[e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("About")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Privacy policy")])])])])]),t._v(" "),e("div",{staticClass:"col-md-6 wow fadeIn"},[e("div",{staticClass:"social"},[e("ul",{staticClass:"justify-content-end"},[e("li",[e("a",{attrs:{href:"https://www.facebook.com/funflixhd/",target:"_blank"}},[e("i",{staticClass:"fa-brands fa-facebook"})])])])])])])])]),t._v(" "),e("a",{staticStyle:{"text-decoration":"none"},attrs:{id:"button"}})])}],!1,null,null,null);e.a=component.exports},379:function(t,e,r){"use strict";r(44);var n=r(6),o=(r(76),r(75),r(51),{data:function(){return{categories:[],searchInput:[],parent:""}},mounted:function(){this.fetchCategories(),this.initAutocomplete()},methods:{searchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},forSearchurl:function(){var t=$(".parent").val(),e=$(".selected_slug").val();console.log("parentID "+t),console.log("Slug "+e),1!=t&&2!=t||this.$router.push("/category/download?slug="+e),3==t&&this.$router.push("/videos/watch?slug="+e),4==t&&this.$router.push("/course/download?slug="+e)},retrunUrl:function(){this.$router.push({name:"/videos/watch",params:{slug:ui.item.slug}})},fetchCategories:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/getCategoryList");case 3:r=e.sent,t.categories=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},initAutocomplete:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t,$("#search").autocomplete({source:function(e,o){return(r=r||Object(n.a)(regeneratorRuntime.mark((function e(r,n){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/unauthenticate/autocomplete?q=".concat(r.term));case 3:o=e.sent,c=o.data.map((function(t){return{label:t.label,value:t.id,slug:t.slug,parent_id:t.parent_id}})),n(c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)},minLength:3,select:function(t,e){var r="parent ID: ".concat(e.item.parent_id,"---- slug: ").concat(e.item.slug,"----id: ").concat(e.item.value);console.log(r);var n=e.item.parent_id;$(".parent").val(n),$(".selected_slug").val(e.item.slug),$(".clickbtn").click()}});case 2:case"end":return e.stop()}}),e)})))()}}}),c=o,l=(r(381),r(74)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"top_bar _nav",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"container-fluid",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"row",attrs:{bis_skin_checked:"1"}},[e("div",{staticClass:"col-md-12",attrs:{bis_skin_checked:"1"}},[e("nav",{staticClass:"navbar navbar-expand-sm bg-body-tertiary navbar bg-body-tertiary fixed-top"},[e("div",{staticClass:"container-fluid"},[e("nuxt-link",{staticClass:"navbar-brand navbar_brand",attrs:{to:"/"}},[e("h6",[t._v("FunFlix HD")])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"nav_oplin navbar-nav ms-auto mb-lg-0 navbar-nav me-auto mb-2 mb-lg-0"},t._l(t.categories,(function(r){return e("li",{key:r.id,staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link",attrs:{href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[e("div",[e("i",{class:r.file}),t._v("\r\n                                                "+t._s(r.name)+"\r\n                                            ")]),t._v(" "),e("i",{staticClass:"fa-solid fa-caret-down"})]),t._v(" "),r.children.length>0?e("ul",{staticClass:"dropdown-menu"},t._l(r.children,(function(r){return e("li",{key:r.id},[1===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/category/category-list?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),2===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/games/games-list?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),3===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/videos/videodetails?slug="+r.slug}},[t._v(t._s(r.name))]):t._e(),t._v(" "),4===r.parent_id?e("nuxt-link",{staticClass:"dropdown-item",attrs:{to:"/course/coursedetails?slug="+r.slug}},[t._v(t._s(r.name))]):t._e()],1)})),0):t._e()])})),0),t._v(" "),e("form",{staticClass:"d-flex s-form",on:{submit:function(e){return e.preventDefault(),t.searchurl()}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"form-control",attrs:{id:"search",placeholder:"Search Movies,Software,Games,Tutorial..."},domProps:{value:t.searchInput},on:{input:function(e){e.target.composing||(t.searchInput=e.target.value)}}}),t._v(" "),e("input",{staticClass:"parent",attrs:{type:"hidden"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"hidden"}}),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticStyle:{display:"none"}},[e("form",{staticClass:"forms-sample",attrs:{id:"formrest",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.forSearchurl()}}},[e("input",{staticClass:"parent",attrs:{type:"text"}}),t._v(" "),e("input",{staticClass:"selected_slug",attrs:{type:"text"}}),t._v(" "),t._m(2)])])])],1)])])])])])])}),[function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-outline-success d-flex align-items-center",attrs:{type:"submit"}},[t("i",{staticClass:"fa-solid fa-magnifying-glass"})])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-success px-5 w-100 clickbtn",attrs:{type:"submit"}},[t("i",{staticClass:"bx bx-check-circle mr-1"}),this._v(" Submit")])}],!1,null,"54de6b9c",null);e.a=component.exports},380:function(t,e,r){"use strict";var n=r(74),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"support pt-4"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-4"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"support_content wow fadeIn"},[e("h1",[t._v("FunFlixHD")]),t._v(" "),e("p",[t._v("Dive into the world of entertainment and education at FunFlixHD.com! \r\n      Explore the latest movies, cutting-edge software, thrilling games, \r\n      and enriching courses. Your gateway to endless possibilities for leisure and learning awaits!")])])])])])]),t._v(" "),e("section",{staticClass:"grow_business"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 m-auto text-center"},[e("div",{staticClass:"grow_content wow fadeIn"},[e("a",{attrs:{href:"https://fansgame.online",target:"_blank"}},[e("img",{staticClass:"img-fluid",attrs:{src:"/images/ads_banner.gif",loading:"lazy",alt:""}})])])])])])])])}],!1,null,null,null);e.a=component.exports},381:function(t,e,r){"use strict";r(377)},382:function(t,e,r){var n=r(169)((function(i){return i[1]}));n.push([t.i,"@media(min-width:991px){.s-form[data-v-54de6b9c]{width:40%}}",""]),n.locals={},t.exports=n},383:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("7920b52e",content,!0,{sourceMap:!1})},385:function(t,e,r){"use strict";r(383)},386:function(t,e,r){var n=r(169)((function(i){return i[1]}));n.push([t.i,".load-more-btn[data-v-f254cd2c]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-f254cd2c]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-f254cd2c]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-f254cd2c]:first-child{opacity:0}.load-more-btn:disabled span[data-v-f254cd2c]:last-child{opacity:1}",""]),n.locals={},t.exports=n},387:function(t,e,r){"use strict";var n=r(6),o=(r(51),r(75),{data:function(){return{loading:!1,currentPage:1,hasMorePages:!0,items:[]}},methods:{fetchItems:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/unauthenticate/defaultShowingMoviesHome",{params:{page:t}});case 3:n=r.sent,0===(o=n.data).length&&(e.hasMorePages=!1),e.items=e.items.concat(o),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error("Error fetching items:",r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},loadMore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading&&t.hasMorePages){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.prev=3,t.currentPage++,e.next=7,t.fetchItems(t.currentPage);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("Error loading more:",e.t0);case 12:return e.prev=12,t.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[3,9,12,15]])})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchItems(t.currentPage);case 2:case"end":return e.stop()}}),e)})))()}}),c=(r(385),r(74)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"apps_second"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("a",{staticClass:"t_link"},[t._v("Popular Movies ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"apps_s_grid"},t._l(t.items,(function(r){return e("div",{key:r.id,staticClass:"apps_box_two"},[e("nuxt-link",{attrs:{to:"/videos/watch?slug="+r.pro_slug}},[e("div",{staticClass:"s_img_box"},[e("img",{staticClass:"img-fluid img_banner",attrs:{src:r.thumnail_img,loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v(t._s(r.product_name))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("nuxt-link",{staticClass:"btn_download",attrs:{to:"/videos/watch?slug="+r.pro_slug}},[t._v("Download")])],1)])])],1)})),0),t._v(" "),e("center",[e("button",{staticClass:"load-more-btn",attrs:{disabled:t.loading||!t.hasMorePages},on:{click:t.loadMore}},[!t.loading&&t.hasMorePages?e("span",[t._v("Load More")]):t._e(),t._v(" "),t.loading?e("span",[t._v("Loading...")]):t._e(),t._v(" "),t.loading||t.hasMorePages?t._e():e("span",[t._v("No more")])])])],1),t._v(" "),t._m(0)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"ads_sec"},[t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])]),this._v(" "),t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])])])])}],!1,null,"f254cd2c",null);e.a=component.exports},395:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(170).default)("2b3caa07",content,!0,{sourceMap:!1})},406:function(t,e,r){"use strict";r(395)},407:function(t,e,r){var n=r(169)((function(i){return i[1]}));n.push([t.i,".load-more-btn[data-v-4db7cf4c]{background-color:#3498db;border:none;color:#fff;cursor:pointer;padding:10px 15px;transition:background-color .3s}.load-more-btn[data-v-4db7cf4c]:disabled{background-color:#95a5a6;cursor:not-allowed}.load-more-btn span[data-v-4db7cf4c]{display:inline-block;transition:opacity .3s}.load-more-btn:disabled span[data-v-4db7cf4c]:first-child{opacity:0}.load-more-btn:disabled span[data-v-4db7cf4c]:last-child{opacity:1}",""]),n.locals={},t.exports=n},426:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(92),r(75),r(51),r(379)),c=r(380),l=r(378),d=r(387),v={components:{TopBar:o.a,Support:c.a,Footer:l.a,Videos:d.a},data:function(){return{categoryname:"",popularCategorys:[],showLoader:!1,fullUrl:"",loading:!1,currentPage:1,hasMorePages:!0,items:[]}},head:{title:"Watch HD Movie"},watch:{$route:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.showLoader=!0,t.next=4,r.$axios.get("/unauthenticate/findCategorys",{params:{slug:r.$route.query.slug}});case 4:e=t.sent,r.showLoader=!1,r.items=e.data.result,r.categoryname=e.data.categoryname,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){t.showLoader=!1}),1e3),t.laadCategory(t.currentPage),t.fetchItems(t.currentPage);case 3:case"end":return e.stop()}}),e)})))()},methods:{laadCategory:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/unauthenticate/findCategorys",{params:{slug:e.$route.query.slug,page:t}});case 3:n=r.sent,e.categoryname=n.data.categoryname,r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()},fetchItems:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/unauthenticate/findCategorys",{params:{slug:e.$route.query.slug,page:t}});case 3:n=r.sent,e.categoryname=n.data.categoryname,0===(o=n.data.result).length&&(e.hasMorePages=!1),e.items=e.items.concat(o),r.next=12;break;case 10:r.prev=10,r.t0=r.catch(0);case 12:case"end":return r.stop()}}),r,null,[[0,10]])})))()},loadMore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:t.currentPage++,t.fetchItems(t.currentPage);case 4:case"end":return e.stop()}}),e)})))()},shareLink:function(){var path=window.location.href;this.fullUrl=path}}},f=(r(406),r(74)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("TopBar"),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"essential_ cat_banner"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"essential_box",staticStyle:{"min-height":"30vh",display:"block"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"row essential_d"},[e("div",{staticClass:"col-md-7 d-flex align-items-center"},[e("h1",{staticClass:"m-0 ms-3"},[t._v(t._s(t.categoryname))])]),t._v(" "),t._m(0)])])])])])])])]),t._v(" "),e("div",{staticClass:"apps_second cat_apps_view app_page cat_page"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-10"},[e("div",{staticClass:"apps_s_grid mt-0"},t._l(t.items,(function(r){return e("div",{key:r.id,staticClass:"apps_box_two"},[e("nuxt-link",{attrs:{to:"/videos/watch?slug="+r.pro_slug}},[e("div",{staticClass:"s_img_box"},[e("img",{staticClass:"img-fluid img_banner",attrs:{src:r.thumnail_img,loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"d_box"},[e("h3",[t._v(t._s(r.product_name))]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("nuxt-link",{staticClass:"btn_download",attrs:{to:"/videos/watch?slug="+r.pro_slug}},[t._v("Download")])],1)])])],1)})),0),t._v(" "),e("center",[e("button",{staticClass:"load-more-btn",attrs:{disabled:t.loading},on:{click:t.loadMore}},[!t.loading&&t.hasMorePages?e("span",[t._v("Load More")]):e("span",[t._v("Loading...")])]),t._v(" "),t.loading||t.hasMorePages?t._e():e("p",[t._v("No more ")])])],1),t._v(" "),t._m(1)])])]),t._v(" "),e("Support"),t._v(" "),e("Footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"essential_d_store_link text-center"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:"//images/Play.png",loading:"lazy",alt:""}})]),t._v(" "),e("a",{attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:"//images/Apple.png",loading:"lazy",alt:""}})])]),t._v(" "),e("p",{staticClass:"text-end me-3"},[t._v("Download FunFlix HD app for watching popular netflix movies and series for\r\n                                            free.")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-md-2"},[t("div",{staticClass:"ads_sec mt-0"},[t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])]),this._v(" "),t("div",{staticClass:"ads_img"},[t("a",{attrs:{href:"#"}},[t("img",{attrs:{src:"/images/Neutral_Modern Elegant_Watch_Instagram_Post.png",alt:""}})])])])])}],!1,null,"4db7cf4c",null);e.default=component.exports}}]);