(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f43404"],{"7db0":function(t,a,i){"use strict";var r=i("23e7"),c=i("b727").find,e=i("44d2"),s=i("ae40"),n="find",o=!0,u=s(n);n in[]&&Array(1)[n]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!u},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),e(n)},faba:function(t,a,i){"use strict";var r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"container-fluid bannerimg"},[t._t("default")],2)])},c=[],e={name:"Bannerimg"},s=e,n=i("2877"),o=Object(n["a"])(s,r,c,!1,null,null,null);a["a"]=o.exports},ff07:function(t,a,i){"use strict";i.r(a);var r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"product_detail"},[i("Bannerimg",[i("nav",{staticClass:"breadmark",attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb"},[i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push("/")}}},[t._v(t._s(t.$t("Product_detail.bread_home")))])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push("/productlist")}}},[t._v(t._s(t.$t("Product_detail.bread_store")))])]),i("li",{staticClass:"breadcrumb-item"},[i("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$router.push({name:"Productlist",params:{series:t.currentProduct.category}})}}},[t._v(t._s(t.$t("Product_detail.series")))])]),i("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.currentProduct.title))])])])]),i("div",{staticClass:"container"},[t.currentProduct.imageUrl?i("div",{staticClass:"row product_info"},[i("div",{staticClass:"col-lg-6 col-md-7"},[i("div",{staticClass:"product_pic"},[i("img",{attrs:{src:t.currentProduct.imageUrl,alt:""}})])]),i("div",{staticClass:"col-lg-6 col-md-5"},[i("ul",{staticClass:"product_meta"},[i("li",[i("h3",[t._v(t._s(t.currentProduct.title))])]),i("li",[t.currentProduct.price?t._e():i("p",{staticClass:"origin_pricesolo"},[t._v("NT"+t._s(t._f("currency")(t.currentProduct.origin_price)))]),t.currentProduct.price?i("del",{staticClass:"origin_price"},[t._v("NT"+t._s(t._f("currency")(t.currentProduct.origin_price)))]):t._e()]),i("li",[t.currentProduct.price?i("p",{staticClass:"salesprice"},[t._v("NT"+t._s(t._f("currency")(t.currentProduct.price)))]):t._e()]),i("li",[i("div",{staticClass:"numControl"},[i("button",{staticClass:" btn-minus",attrs:{type:"button","data-quantity":"minus","data-field":"quantity"},on:{click:function(a){return a.preventDefault(),t.changeNum(-1)}}},[i("i",{staticClass:"fa fa-minus",attrs:{"aria-hidden":"true"}})]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.productnum,expression:"productnum"}],staticClass:"amount",attrs:{type:"number",max:"10",min:"1"},domProps:{value:t.productnum},on:{change:function(a){return t.changeAmount(t.productnum)},input:function(a){a.target.composing||(t.productnum=a.target.value)}}}),i("button",{staticClass:" btn-plus",attrs:{type:"button","data-quantity":"plus","data-field":"quantity"},on:{click:function(a){return a.preventDefault(),t.changeNum(1)}}},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),i("button",{staticClass:"btn btn-cart",on:{click:function(a){return a.preventDefault(),t.addToCart(t.currentProduct,t.productnum)}}},[i("i",{staticClass:"fas fa-shopping-cart"}),t._v("加入購物車")])]),i("li",[i("p",{staticClass:"product_des"},[t._v(t._s(t.currentProduct.description))])]),i("li",[i("p",{staticClass:"product_con"},[t._v(t._s(t.currentProduct.content))])])])])]):t._e(),i("div",{staticClass:"product_intro"},[i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.howtouse_title")))]),i("p",{staticClass:"mb-4"},[t._v(t._s(t.$t("Product_detail.howtouse")))]),i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.warning_title")))]),i("p",{staticClass:"mb-4"},[t._v(t._s(t.$t("Product_detail.warning")))]),i("h4",{staticClass:"mb-4 h4"},[t._v(t._s(t.$t("Product_detail.notice_title")))]),i("div",{staticClass:"notice"},[i("div",{staticClass:"return"},[i("h4",{staticClass:"notice_title",on:{click:function(a){return a.preventDefault(),t.accordion(a)}}},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub1"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub1_con")))])]),i("div",{staticClass:"aware"},[i("h4",{staticClass:"notice_title",on:{click:function(a){return a.preventDefault(),t.accordion(a)}}},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub2"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub2_con")))])]),i("div",{staticClass:"ship"},[i("h4",{staticClass:"notice_title",on:{click:function(a){return a.preventDefault(),t.accordion(a)}}},[i("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(t._s(t.$t("Product_detail.noticesub3"))),i("i",{staticClass:"fas fa-exclamation-triangle"})]),i("p",{staticClass:"notice_txt"},[t._v(t._s(t.$t("Product_detail.noticesub3_con")))])])])]),i("div",{staticClass:"related"},[i("h3",[t._v(t._s(t.$t("Product_detail.related")))]),i("hr"),i("div",{staticClass:"related_content row"},t._l(t.filterSimilars,(function(a){return i("div",{key:a.id,staticClass:"col-md-4 col-sm-6 col-12 d-flex justify-content-start align-item-center"},[i("div",{staticClass:"productCard",on:{click:function(i){return i.preventDefault(),t.goRelated(a.id)}}},[i("div",{staticClass:"top"},[i("img",{attrs:{src:a.imageUrl,alt:""}}),i("div",{staticClass:"tag"},[t._v("特價中")])]),i("div",{staticClass:"bottom"},[i("h3",[t._v(t._s(a.title))]),i("div",{staticClass:"price"},[t._v("NT$"+t._s(a.origin_price))])])])])})),0)])])],1)},c=[],e=(i("4de4"),i("7db0"),i("5530")),s=i("faba"),n=i("1157"),o=i.n(n),u=i("2f62"),l={name:"ProductDetail",components:{Bannerimg:s["a"]},data:function(){return{productId:"",productnum:1}},methods:Object(e["a"])({getProduct:function(){var t=this;t.productId=t.$route.params.product_id,this.$store.dispatch("productModule/getCurrentProduct",t.productId),t.productnum=1},getCart:function(){this.$store.commit("cartModules/CART"),this.$store.dispatch("cartModules/getCartinfo")},addToCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.getCart(),this.$store.dispatch("cartModules/addTocart",{product:t,qty:a}),this.getCart()},changeNum:function(t){var a=this.productnum+t;this.changeAmount(a)},changeAmount:function(t){var a=t;this.productnum=a>=10?10:a<=1?1:a},goRelated:function(t){this.$router.push("/product_detail/".concat(t)),this.getProduct()},accordion:function(t){var a=t.currentTarget;o()(a).toggleClass("active"),o()(a).parent().find(".notice_txt").slideToggle(),o()(a).parent().siblings().find(".notice_txt").slideUp(),o()(a).parent().siblings().find(".notice_title").removeClass("active")}},Object(u["b"])("productModule",["getAllProducts"])),computed:Object(e["a"])(Object(e["a"])({filterSimilars:function(){var t=this;return t.allProducts.filter((function(a){return a.id!==t.productId&&a.category===t.currentProduct.category&&a.is_enabled}))}},Object(u["c"])("cartModules",["cart"])),Object(u["d"])("productModule",["allProducts","currentProduct"])),created:function(){this.getProduct(),this.getAllProducts(),this.getCart()}},d=l,_=i("2877"),p=Object(_["a"])(d,r,c,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-03f43404.91a48082.js.map