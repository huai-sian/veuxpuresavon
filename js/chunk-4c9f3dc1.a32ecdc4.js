(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9f3dc1"],{6407:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center"},[a("ul",{staticClass:"pages"},[a("li",{staticClass:"page",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"pageNum",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changepage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("<")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"pageNum",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.changepage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"pageNum",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changepage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v(">")])])])],2)])},s=[],n={props:["pages"],methods:{changepage:function(t){this.$emit("switchpage",t)}}},i=n,l=a("2877"),c=Object(l["a"])(i,o,s,!1,null,null,null);e["a"]=c.exports},7576:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary mb-3",on:{click:function(e){return e.preventDefault(),t.openCouponModal(!0)}}},[t._v("建立新的優惠券")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.coupons,(function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent)+"%")]),a("td",[t._v(t._s(e.due_date))]),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-open btn-sm",on:{click:function(a){return a.preventDefault(),t.openCouponModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-delete btn-sm",on:{click:function(a){return a.preventDefault(),t.openDelModal(e)}}},[t._v("刪除")])])])})),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{switchpage:t.getCoupon}}),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"code"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼編號"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var n=null,i=t._i(a,n);o.checked?i<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([n])):i>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempCoupon,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v(" 是否啟用 ")])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-open",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.updateCoupon(e)}}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delCouponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempCoupon.title))]),t._v(" 優惠券(刪除後將無法恢復)。 ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.del(e)}}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),a("th",{attrs:{width:"150"}},[t._v("折扣百分比")]),a("th",{attrs:{width:"140"}},[t._v("到期日")]),a("th",{attrs:{width:"120"}},[t._v("是否啟用")]),a("th",{attrs:{width:"140"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleLabel"}},[a("span",[t._v("新增優惠券")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除優惠券")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(a("99af"),a("6407")),i=a("1157"),l=a.n(i),c={data:function(){return{coupons:[],pagination:{},isNew:!1,tempCoupon:{}}},components:{Pagination:n["a"]},methods:{getCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/admin/coupons?page=").concat(t),a=this;a.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(t){console.log(t.data),a.$store.dispatch("updateLoading",!1),a.coupons=t.data.coupons,a.pagination=t.data.pagination}))},openCouponModal:function(t,e){t?(this.tempCoupon={},this.isNew=!0):(this.tempCoupon=Object.assign({},e),this.isNew=!1),l()("#couponModal").modal("show")},openDelModal:function(t){this.tempCoupon=t,l()("#delCouponModal").modal("show")},del:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/admin/coupon/").concat(t.tempCoupon.id);this.$http.delete(e).then((function(e){l()("#delCouponModal").modal("hide"),t.getCoupon()}))},updateCoupon:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/admin/coupon"),e=this,a="post";e.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("exploreu","/admin/coupon/").concat(e.tempCoupon.id),a="put"),this.$http[a](t,{data:e.tempCoupon}).then((function(t){t.data.success?(l()("#couponModal").modal("hide"),e.getCoupon()):(console.log("新增失敗"),l()("#couponModal").modal("hide"))}))}},created:function(){this.getCoupon()}},p=c,r=a("2877"),d=Object(r["a"])(p,o,s,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4c9f3dc1.a32ecdc4.js.map