(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(t,e,n){"use strict";n.r(e);n(37);var d={components:{InView:n(208).default},data:function(){return{active:!1,target:void 0}},mounted:function(){this.target=this.$el},methods:{inView:function(){var t=this;setTimeout((function(){t.active=!0}),300)}}},r=(n(211),n(27)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-black",class:{active:t.active}},[n("in-view",{attrs:{target:t.target},on:{inview:t.inView}}),t._v(" "),n("div",{staticClass:"inner"},[n("div",{staticClass:"content"},[n("p",{staticClass:"label"},[t._t("label")],2),t._v(" "),n("h2",{staticClass:"title"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"body"},[t._t("desc")],2)])])],1)}),[],!1,null,"2ea734d2",null);e.default=component.exports;installComponents(component,{InView:n(208).default})},210:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("0e11dffc",content,!0,{sourceMap:!1})},211:function(t,e,n){"use strict";n(210)},212:function(t,e,n){(e=n(35)(!1)).push([t.i,'@media screen and (min-width:821px){.content[data-v-2ea734d2]{max-width:1140px;margin:auto;padding:0 20px}}@media screen and (min-width:821px)and (max-width:1100px){.content[data-v-2ea734d2]{max-width:915px}}.message-black[data-v-2ea734d2]{display:flex;justify-content:center;align-items:center;color:#fff;font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700}@media screen and (min-width:821px){.message-black[data-v-2ea734d2]{text-align:center;height:600px;background:url(/imgs/fa-system/message-bg-top.png) no-repeat top/auto 229px,url(/imgs/fa-system/message-bg-bottom.png) no-repeat bottom/auto 229px;background-color:#242526}}@media screen and (min-width:821px)and (max-width:1100px){.message-black[data-v-2ea734d2]{height:450px}}@media screen and (max-width:820px){.message-black[data-v-2ea734d2]{padding:88px 30px 85px;background:url(/imgs/sp/fa-system/message-bg-top.png) no-repeat top/auto 229px,url(/imgs/sp/fa-system/message-bg-bottom.png) no-repeat bottom/auto 166px;background-color:#242526}}.message-black.active .label[data-v-2ea734d2]{opacity:1;transform:translateY(0);transition:.6s cubic-bezier(.215,.61,.355,1)}.message-black.active .title[data-v-2ea734d2]{opacity:1;transform:translateY(0);transition:.6s cubic-bezier(.215,.61,.355,1) 80ms}.message-black.active .body[data-v-2ea734d2]{opacity:1;transform:translateY(0);transition:.6s cubic-bezier(.215,.61,.355,1) .16s}.message-black .label[data-v-2ea734d2]{opacity:0;transform:translateY(20px);font-size:12px;color:#888}.message-black .title[data-v-2ea734d2]{opacity:0;transform:translateY(20px);color:#fff;line-height:2}@media screen and (min-width:821px){.message-black .title[data-v-2ea734d2]{margin:30px 0 0;font-size:18px;letter-spacing:.08em}}@media screen and (min-width:821px)and (max-width:1100px){.message-black .title[data-v-2ea734d2]{font-size:16px;margin:25px 0 0}}@media screen and (max-width:820px){.message-black .title[data-v-2ea734d2]{margin:18px 0 0;font-size:16px}.message-black .title br[data-v-2ea734d2]{display:none}}.message-black .body[data-v-2ea734d2]{opacity:0;transform:translateY(20px);color:#fff;line-height:2;font-weight:400}@media screen and (min-width:821px){.message-black .body[data-v-2ea734d2]{font-size:15px;margin:27px 0 0;letter-spacing:.04em}}@media screen and (min-width:821px)and (max-width:1100px){.message-black .body[data-v-2ea734d2]{font-size:14px;margin:25px 0 0}}@media screen and (max-width:820px){.message-black .body[data-v-2ea734d2]{font-size:14px;margin:18px 0 0}.message-black .body br[data-v-2ea734d2]{display:none}}',""]),t.exports=e},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("5a031260",content,!0,{sourceMap:!1})},214:function(t,e,n){"use strict";n.r(e);n(37);var d={components:{InView:n(208).default},props:{ch:Boolean,href:String,imageSrc:String,imageRight:Boolean},data:function(){return{target:void 0,active:!1}},mounted:function(){this.target=this.$el},methods:{inView:function(){var t=this;setTimeout((function(){t.active=!0}),500)}}},r=(n(218),n(27)),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product",class:{active:t.active},attrs:{"data-layout":t.imageRight?"image-right":"image-left"}},[n("in-view",{attrs:{target:t.target},on:{inview:t.inView}}),t._v(" "),n("div",{staticClass:"image"},[n("div",{staticClass:"image-main",style:{backgroundImage:"url("+t.imageSrc+")"}})]),t._v(" "),n("div",{staticClass:"product-main"},[n("div",{staticClass:"product-inner"},[n("div",{staticClass:"texts"},[n("div",{staticClass:"no"},[t._t("no")],2),t._v(" "),n("div",{staticClass:"texts-inner"},[n("p",{staticClass:"en-name"},[t._t("en-name")],2),t._v(" "),n("h3",{staticClass:"title"},[t._t("title")],2),t._v(" "),n("p",{staticClass:"body"},[t._t("body")],2),t._v(" "),n("a",{ref:"button",staticClass:"button",class:{active:t.active},attrs:{href:t.href}},[t._v(t._s(t.ch?"详细请参阅":"詳しくはこちら"))])])])])])],1)}),[],!1,null,"392db354",null);e.default=component.exports;installComponents(component,{InView:n(208).default})},218:function(t,e,n){"use strict";n(213)},219:function(t,e,n){(e=n(35)(!1)).push([t.i,'.product[data-v-392db354]{position:relative}@media screen and (min-width:821px){.product[data-v-392db354]{margin:200px 0 0;height:700px;padding:225px 0 0;display:flex;align-items:stretch;justify-content:stretch}}@media screen and (min-width:821px)and (max-width:1100px){.product[data-v-392db354]{height:620px;padding:145px 0 0;margin:72px 0 0}}.product.active .en-name[data-v-392db354]{opacity:1;transform:translateY(0);transition:opacity .4s linear,.4s cubic-bezier(.215,.61,.355,1) 0ms}.product.active .title[data-v-392db354]{opacity:1;transform:translateY(0);transition:opacity .4s linear,.4s cubic-bezier(.215,.61,.355,1) 80ms}.product.active .body[data-v-392db354]{opacity:1;transform:translateY(0);transition:opacity .4s linear,.4s cubic-bezier(.215,.61,.355,1) .16s}.product.active .button[data-v-392db354]{opacity:1;transform:translateY(0);transition:opacity .4s linear,.4s cubic-bezier(.215,.61,.355,1) .24s}.product.active .button[data-v-392db354]:after{transition:.4s cubic-bezier(.645,.045,.355,1) .8s;transform:scaleX(1)}.product[data-v-392db354]:first-child{margin-top:0}.product .product-main[data-v-392db354]{flex:1}@media screen and (min-width:821px){.product .product-inner[data-v-392db354]{height:100%;max-width:1140px;margin:0 auto;padding:0 20px}}@media screen and (min-width:821px)and (max-width:1100px){.product .product-inner[data-v-392db354]{max-width:915px}}.product .image[data-v-392db354]{background:#252525;display:flex;box-sizing:border-box;justify-content:stretch;align-items:stretch}@media screen and (min-width:821px){.product .image[data-v-392db354]{width:53%;position:absolute;height:100%;left:0;top:0;padding:90px 80px}}@media screen and (min-width:821px)and (max-width:1100px){.product .image[data-v-392db354]{width:61%;height:500px;padding:78px 70px}}@media screen and (max-width:820px){.product .image[data-v-392db354]{padding:30px}}.product .image-main[data-v-392db354]{flex:1;background:no-repeat 50%/cover;height:100%}@media screen and (max-width:820px){.product .image-main[data-v-392db354]{padding:57% 0 0}}.product .texts[data-v-392db354]{position:relative}@media screen and (min-width:821px){.product .texts[data-v-392db354]{width:640px;height:100%;background:#fff}}@media screen and (min-width:821px)and (max-width:1100px){.product .texts[data-v-392db354]{width:475px;height:475px}}@media screen and (max-width:820px){.product .texts[data-v-392db354]{padding:30px 30px 87px}}@media screen and (min-width:821px){.product .texts-inner[data-v-392db354]{padding:15% 12.5% 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.product .texts-inner[data-v-392db354]{padding-right:75px 75px 0 0}}.product .no[data-v-392db354]{position:absolute;font-family:"Maison Neue Medium",sans-serif;font-weight:600;line-height:1}@media screen and (min-width:821px){.product .no[data-v-392db354]{top:calc(15% + 5px);right:12.5%;font-size:125px}}@media screen and (min-width:821px)and (max-width:1100px){.product .no[data-v-392db354]{top:74px;font-size:100px}}@media screen and (max-width:820px){.product .no[data-v-392db354]{font-size:70px;top:30px;right:30px}}.product .en-name[data-v-392db354]{opacity:0;transform:translateY(20px);font-family:"Maison Neue Medium",sans-serif;font-weight:600;color:#252525}@media screen and (min-width:821px){.product .en-name[data-v-392db354]{font-size:40px;line-height:1.125}}@media screen and (min-width:821px)and (max-width:1100px){.product .en-name[data-v-392db354]{font-size:35px}}@media screen and (max-width:820px){.product .en-name[data-v-392db354]{line-height:1;font-size:35px}}.product .title[data-v-392db354]{opacity:0;transform:translateY(20px);font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;line-height:2;color:#252525}@media screen and (min-width:821px){.product .title[data-v-392db354]{font-size:22px;margin:18px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.product .title[data-v-392db354]{font-size:18px;margin:20px 0 0}}@media screen and (max-width:820px){.product .title[data-v-392db354]{font-size:16px;margin:16px 0 0}}.product .body[data-v-392db354]{opacity:0;transform:translateY(20px);font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;font-weight:400;line-height:2;color:#252525}@media screen and (min-width:821px){.product .body[data-v-392db354]{margin:18px 0 0;font-size:18px}}@media screen and (min-width:821px)and (max-width:1100px){.product .body[data-v-392db354]{font-size:16px;margin:20px 0 0}}@media screen and (max-width:820px){.product .body[data-v-392db354]{margin:15px 0 0;font-size:14px}}.product .button[data-v-392db354]{opacity:0;transform:translateY(20px);font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;position:relative;display:inline-block;color:#252525;padding:0 0 5px}@media screen and (min-width:821px){.product .button[data-v-392db354]{margin:30px 0 0;font-size:20px}}@media screen and (min-width:821px)and (max-width:1100px){.product .button[data-v-392db354]{font-size:18px}}@media screen and (max-width:820px){.product .button[data-v-392db354]{margin:55px 0 0;font-size:18px}}.product .button[data-v-392db354]:after{content:"";display:block;width:100%;height:2px;position:absolute;left:0;bottom:0;background:#252525;transform-origin:left;transform:scaleX(0)}@media screen and (min-width:821px){.product[data-layout=image-right] .image[data-v-392db354]{left:auto;right:0}}@media screen and (min-width:821px)and (min-width:821px)and (max-width:1100px){.product[data-layout=image-right] .image[data-v-392db354]{padding-right:0}}@media screen and (min-width:821px){.product[data-layout=image-right] .texts[data-v-392db354]{margin:0 auto 0 0}}@media screen and (min-width:821px){.product[data-layout=image-left] .image[data-v-392db354]{left:0;right:auto}}@media screen and (min-width:821px)and (min-width:821px)and (max-width:1100px){.product[data-layout=image-left] .image[data-v-392db354]{padding-left:0}}@media screen and (min-width:821px){.product[data-layout=image-left] .texts[data-v-392db354]{margin:0 0 0 auto}}@media screen and (min-width:821px){.product[data-layout=image-left] .texts-inner[data-v-392db354]{padding:15% 0 0 12.5%}}@media screen and (min-width:821px)and (min-width:821px)and (max-width:1100px){.product[data-layout=image-left] .texts-inner[data-v-392db354]{padding:74px 0 0 74px}}@media screen and (min-width:821px){.product[data-layout=image-left] .no[data-v-392db354]{right:0}}',""]),t.exports=e},236:function(t,e,n){var content=n(295);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("9a778e20",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n(236)},295:function(t,e,n){(e=n(35)(!1)).push([t.i,'@media screen and (min-width:821px){.inner[data-v-24f0e710]{max-width:1140px;margin:0 auto;padding:0 20px}}@media screen and (min-width:821px)and (max-width:1100px){.inner[data-v-24f0e710]{max-width:915px}}.lines[data-v-24f0e710]{pointer-events:none;position:absolute;width:100%;height:100%;top:0;left:0;z-index:1}@media screen and (min-width:821px){.lines[data-v-24f0e710]{background:url(/imgs/fa-system/bg-line.png) calc(50% - 108px) 0/216px auto}}@media screen and (max-width:820px){.lines[data-v-24f0e710]{background:url(/imgs/sp/fa-system/bg-line.png) calc(50% - 31px) 0/62px auto}}.main-visual[data-v-24f0e710]{background:#fff;overflow-x:hidden;position:relative}@media screen and (min-width:821px){.main-visual .inner[data-v-24f0e710]{padding:0 20px;height:100vh;flex-direction:column;justify-content:center;display:flex;position:relative}}@media screen and (max-width:820px){.main-visual .inner[data-v-24f0e710]{padding:80px 0 60px}}.main-visual .texts[data-v-24f0e710]{position:relative}@media screen and (max-width:820px){.main-visual .texts[data-v-24f0e710]{margin:-30px 0 0;padding:0 28px}}.main-visual .title[data-v-24f0e710]{font-family:"Maison Neue Medium",sans-serif;font-weight:600}.main-visual .title .main[data-v-24f0e710],.main-visual .title .sub[data-v-24f0e710]{line-height:1;display:block}.main-visual .title .sub[data-v-24f0e710]{color:#06c}.main-visual .title .line-1[data-v-24f0e710],.main-visual .title .line-2[data-v-24f0e710],.main-visual .title .line-3[data-v-24f0e710]{opacity:0;transform:translateY(20px)}@media screen and (min-width:821px){.main-visual .title[data-v-24f0e710]{font-size:115px}.main-visual .title .sub[data-v-24f0e710]{font-size:75px}}@media screen and (min-width:821px)and (max-width:1100px){.main-visual .title[data-v-24f0e710]{font-size:85px}.main-visual .title .sub[data-v-24f0e710]{font-size:56px}}@media screen and (max-width:820px){.main-visual .title[data-v-24f0e710]{font-size:60px}.main-visual .title .sub[data-v-24f0e710]{font-size:40px}}.main-visual .body[data-v-24f0e710]{opacity:0;transform:translateY(20px);font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;line-height:2}@media screen and (min-width:821px){.main-visual .body[data-v-24f0e710]{font-size:18px;margin:35px 0 0;padding:0 0 0 4px}}@media screen and (min-width:821px)and (max-width:1100px){.main-visual .body[data-v-24f0e710]{font-size:16px;margin:25px 0 0;padding:0 0 0 2px}}@media screen and (max-width:820px){.main-visual .body[data-v-24f0e710]{font-size:16px;margin:15px 0 0;padding:0 0 0 2px}}.main-visual .note[data-v-24f0e710]{opacity:0;font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;font-size:12px;color:#888;font-weight:400}@media screen and (min-width:821px){.main-visual .note[data-v-24f0e710]{margin:35px 0 0}}@media screen and (max-width:820px){.main-visual .note[data-v-24f0e710]{margin:20px 0 0}}.main-visual .image[data-v-24f0e710]{opacity:0;background:url(/imgs/fa-system/mv.png) no-repeat 50%/contain;transform:translateX(-20px)}@media screen and (min-width:821px){.main-visual .image[data-v-24f0e710]{position:absolute;right:-80px;top:calc(50% - 390px);width:738px;height:738px}}@media screen and (min-width:821px)and (max-width:1100px){.main-visual .image[data-v-24f0e710]{right:-55px;top:calc(50% - 262px);width:525px;height:525px}}@media screen and (max-width:820px){.main-visual .image[data-v-24f0e710]{width:100%;height:420px;background:url(/imgs/fa-system/mv.png) no-repeat 50%/420px 420px;margin:-15px 0}}.main-visual .scrolldown[data-v-24f0e710]{opacity:0;position:absolute;bottom:40px;left:calc(50% - 50px);flex-direction:column;justify-content:center;align-items:center;width:100px;z-index:3}@media screen and (min-width:821px){.main-visual .scrolldown[data-v-24f0e710]{display:flex}}@media screen and (max-width:820px){.main-visual .scrolldown[data-v-24f0e710]{display:none}}.main-visual .scrolldown[data-v-24f0e710]:before{content:"";display:block;width:31px;height:52px;background:url(/imgs/common/scroll-down.png) no-repeat 50%/contain}@media screen and (min-width:821px)and (max-width:1100px){.main-visual .scrolldown[data-v-24f0e710]:before{width:23px;height:40px}}.main-visual .scrolldown-text[data-v-24f0e710]{font-size:12px;color:#252525;margin:10px 0 0;letter-spacing:.03em;font-family:"Maison Neue Medium",sans-serif;font-weight:600}@media screen and (min-width:821px)and (max-width:1100px){.main-visual .scrolldown-text[data-v-24f0e710]{font-size:10px;margin:8px 0 0}}.main-visual .scrolldown-blight[data-v-24f0e710]{width:31px;height:52px;position:absolute;left:35px;top:0;overflow:hidden;border-radius:15px;background:no-repeat linear-gradient(20deg,transparent 25%,hsla(0,0%,100%,.2) 65%,transparent 90%);background-size:31px 100px;background-position:0 -100px}.main-visual.active .image[data-v-24f0e710]{opacity:1;transform:translateX(0);transition:opacity .5s ease-in-out 0ms,1s cubic-bezier(.215,.61,.355,1) 0ms}.main-visual.active .title .line-1[data-v-24f0e710]{opacity:1;transform:translateY(0);transition:opacity .4s ease-in-out .5s,.6s cubic-bezier(.165,.84,.44,1) .5s}.main-visual.active .title .line-2[data-v-24f0e710]{opacity:1;transform:translateY(0);transition:opacity .4s ease-in-out .6s,.6s cubic-bezier(.165,.84,.44,1) .58s}.main-visual.active .title .line-3[data-v-24f0e710]{opacity:1;transform:translateY(0);transition:opacity .4s ease-in-out .7s,.6s cubic-bezier(.165,.84,.44,1) .66s}.main-visual.active .body[data-v-24f0e710]{opacity:1;transform:translateY(0);transition:opacity .4s ease-in-out 1s,.6s cubic-bezier(.165,.84,.44,1) .75s}.main-visual.active .contactus[data-v-24f0e710],.main-visual.active .scrolldown[data-v-24f0e710]{opacity:1;transition:opacity .4s ease-out 1.5s}@-webkit-keyframes blight-data-v-24f0e710{0%{background-position:0 100px}to{background-position:0 -100px}}@keyframes blight-data-v-24f0e710{0%{background-position:0 100px}to{background-position:0 -100px}}@media screen and (min-width:821px){.intro[data-v-24f0e710]{padding:200px 0}}@media screen and (min-width:821px)and (max-width:1100px){.intro[data-v-24f0e710]{padding:150px 0}}@media screen and (max-width:820px){.intro[data-v-24f0e710]{padding:90px 0 85px}}@media screen and (min-width:821px){.intro_main[data-v-24f0e710]{display:flex;flex-direction:row-reverse;align-items:center}}.intro_image img[data-v-24f0e710]{display:block;width:100%;height:auto}@media screen and (min-width:821px){.intro_image[data-v-24f0e710]{width:56%;flex:0 0 auto}}@media screen and (max-width:820px){.intro_image[data-v-24f0e710]{padding:0 30px}}.intro_texts[data-v-24f0e710]{font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700}@media screen and (min-width:821px){.intro_texts[data-v-24f0e710]{margin:0 4.5% 0 0}}@media screen and (max-width:820px){.intro_texts[data-v-24f0e710]{padding:55px 28px 0}}.intro_texts .label[data-v-24f0e710]{font-size:12px;color:#888}.intro_texts .title[data-v-24f0e710]{line-height:2}@media screen and (min-width:821px){.intro_texts .title[data-v-24f0e710]{font-size:18px;margin:30px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.intro_texts .title[data-v-24f0e710]{font-size:16px;margin:22px 0 0}}@media screen and (max-width:820px){.intro_texts .title[data-v-24f0e710]{font-size:16px;margin:20px 0 0}}.intro_texts .body[data-v-24f0e710]{font-weight:400;line-height:2}@media screen and (min-width:821px){.intro_texts .body[data-v-24f0e710]{font-size:15px;margin:23px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.intro_texts .body[data-v-24f0e710]{font-size:14px;margin:20px 0 0}}@media screen and (max-width:820px){.intro_texts .body[data-v-24f0e710]{font-size:14px;margin:14px 0 0}}@media screen and (min-width:821px){.features[data-v-24f0e710]{padding:170px 0}}@media screen and (min-width:821px)and (max-width:1100px){.features[data-v-24f0e710]{padding:150px 0}}@media screen and (max-width:820px){.features[data-v-24f0e710]{padding:90px 30px 85px}}.features.active .feature:first-child .icon[data-v-24f0e710]{opacity:1;transform:scale(1);transition:.7s cubic-bezier(.165,.84,.44,1)}.features.active .feature:nth-child(2) .icon[data-v-24f0e710]{opacity:1;transform:scale(1);transition:.7s cubic-bezier(.165,.84,.44,1) .3s}.features.active .feature:nth-child(3) .icon[data-v-24f0e710]{opacity:1;transform:scale(1);transition:.7s cubic-bezier(.165,.84,.44,1) .6s}@media screen and (min-width:821px){.features_main[data-v-24f0e710]{display:flex;justify-content:space-between}}@media screen and (min-width:821px){.feature[data-v-24f0e710]{flex:0 0 auto;width:28%}}@media screen and (min-width:821px)and (max-width:1100px){.feature[data-v-24f0e710]{width:29%}}@media screen and (max-width:820px){.feature[data-v-24f0e710]{margin:84px 0 0}.feature[data-v-24f0e710]:first-child{margin-top:0}}.feature img[data-v-24f0e710]{opacity:0;transform:scale(.8)}@media screen and (min-width:821px)and (max-width:1100px){.feature img[data-v-24f0e710]{width:64px;height:64px}}@media screen and (max-width:820px){.feature img[data-v-24f0e710]{width:95px;height:95px}}.feature .no[data-v-24f0e710]{color:#888;font-family:"Maison Neue Medium",sans-serif;font-weight:600}@media screen and (min-width:821px){.feature .no[data-v-24f0e710]{font-size:25px;margin:38px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.feature .no[data-v-24f0e710]{font-size:22px;margin:25px 0 0}}@media screen and (max-width:820px){.feature .no[data-v-24f0e710]{font-size:25px;margin:22px 0 0}}.feature .title[data-v-24f0e710]{font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;line-height:2;color:#252525}@media screen and (min-width:821px){.feature .title[data-v-24f0e710]{margin:25px 0 0;font-size:18px;letter-spacing:.04em}}@media screen and (min-width:821px)and (max-width:1100px){.feature .title[data-v-24f0e710]{font-size:16px;margin:20px 0 0}}@media screen and (max-width:820px){.feature .title[data-v-24f0e710]{margin:17px 0 0;font-size:16px}}.feature .body[data-v-24f0e710]{font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;font-weight:400;line-height:2;color:#252525}@media screen and (min-width:821px){.feature .body[data-v-24f0e710]{font-size:15px;margin:25px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.feature .body[data-v-24f0e710]{font-size:14px;margin:20px 0 0}}@media screen and (max-width:820px){.feature .body[data-v-24f0e710]{font-size:14px;margin:13px 0 0}}@media screen and (min-width:821px){.products[data-v-24f0e710]{padding:200px 0;background:#fff url(/imgs/fa-system/bg-line.png) calc(50% - 108px) 0/216px auto}}@media screen and (min-width:821px)and (max-width:1100px){.products[data-v-24f0e710]{padding:150px 0}}@media screen and (max-width:820px){.products[data-v-24f0e710]{padding:74px 0 0;background:#fff url(/imgs/sp/fa-system/bg-line.png) calc(50% - 31px) 0/62px auto}}.products>.title[data-v-24f0e710]{font-family:"Maison Neue Medium",sans-serif;font-weight:600;color:#252525}@media screen and (min-width:821px){.products>.title[data-v-24f0e710]{font-size:60px;text-align:center}}@media screen and (min-width:821px)and (max-width:1100px){.products>.title[data-v-24f0e710]{font-size:50px}}@media screen and (max-width:820px){.products>.title[data-v-24f0e710]{font-size:50px;padding:0 30px}}@media screen and (max-width:820px){.products>.title .sub[data-v-24f0e710]{font-size:35px;display:block;margin-top:5px}}.products>.title .desc[data-v-24f0e710]{font-family:"Yu Gothic","游ゴシック",YuGothic,"游ゴシック体","ヒラギノ角ゴ Pro W3","メイリオ",sans-serif;font-weight:700;color:#888;display:block;font-size:12px}@media screen and (min-width:821px){.products>.title .desc[data-v-24f0e710]{margin:3px 0 0}}@media screen and (max-width:820px){.products>.title .desc[data-v-24f0e710]{margin:8px 0 0}}@media screen and (min-width:821px){.products>.list[data-v-24f0e710]{margin:100px 0 0}}@media screen and (min-width:821px)and (max-width:1100px){.products>.list[data-v-24f0e710]{margin:70px 0 0}}@media screen and (max-width:820px){.products>.list[data-v-24f0e710]{margin:56px 0 0}}',""]),t.exports=e},339:function(t,e,n){"use strict";n.r(e);n(37);var d=n(145),r=n(201),o=n(214),c=n(202),m=n(216),l=n(215),x={components:{InView:n(208).default,FaLayout:r.default,OrderStepsBlock:l.default,TopProduct:o.default,MessageBlack:c.default,ContactBlock:m.default},head:function(){return Object(d.headMetas)({title:"SATAKE COMPACT FA SYSTEM | 協働・省人化に特化したコンパクトな佐竹のFA製品"},!1)},data:function(){return{active:!1,featureActive:!1,featureTarget:void 0}},mounted:function(){var t=this;setTimeout((function(){t.active=!0}),500),this.featureTarget=this.$refs.feature},methods:{inviewFeature:function(){var t=this;setTimeout((function(){t.featureActive=!0}),300)}}},f=(n(294),n(27)),component=Object(f.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fa-layout",{attrs:{current:"top"}},[n("div",{staticClass:"main-visual",class:{active:t.active}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"image"}),t._v(" "),n("div",{staticClass:"texts"},[n("h1",{staticClass:"title"},[n("span",{staticClass:"main"},[n("div",{staticClass:"line-1"},[t._v("SATAKE ")]),n("div",{staticClass:"line-2"},[t._v("COMPACT")])]),t._v(" "),n("span",{staticClass:"sub line-3"},[t._v("FA SYSTEM")])]),t._v(" "),n("p",{staticClass:"body"},[t._v("挑戦を続ける佐竹の次なる一歩。"),n("br"),t._v("\n          協働・省人化に特化した"),n("br",{staticClass:"sp-only"}),t._v("コンパクトな佐竹のFA製品シリーズ。")]),t._v(" "),n("p",{staticClass:"note"},[t._v("※画像はイメージです。")])])]),t._v(" "),n("div",{staticClass:"scrolldown"},[n("p",{staticClass:"scrolldown-text"},[t._v("Scroll Down")]),t._v(" "),n("div",{staticClass:"scrolldown-blight"})]),t._v(" "),n("div",{staticClass:"lines"})]),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"inner intro_main"},[n("div",{staticClass:"intro_image"},[n("img",{attrs:{src:"/imgs/fa-system/intro.jpg",width:"625",height:"416"}})]),t._v(" "),n("div",{staticClass:"intro_texts"},[n("p",{staticClass:"label"}),t._v(" "),n("h2",{staticClass:"title"},[t._v("中小企業による協働・省人化に特化した"),n("br"),t._v("\n          中小企業のためのFAシステム。")]),t._v(" "),n("p",{staticClass:"body"},[t._v("\n          大規模で全自動なFAシステムではなく、協働、省人化に特化したFAシステムを開発しました。各工程に最適な機能に絞り、低コストを重視した作りにすることで、規模の小さい中小企業に導入しやすいFAシステムです。")])])])]),t._v(" "),n("MessageBlack",{staticClass:"vision",scopedSlots:t._u([{key:"label",fn:function(){return[t._v("佐竹の挑戦")]},proxy:!0},{key:"title",fn:function(){return[t._v("製品開発はより激しい競争を求められるようになりました。"),n("br"),t._v("\n      私たちは「多品種・小ロット・短納期」を次に進めるためにFAを独自開発することを決めました。\n    ")]},proxy:!0},{key:"desc",fn:function(){return[t._v("なぜ私たち中小企業がFAシステムを開発したのか、"),n("br"),t._v("\n      それは一般的なFAシステムは規模が大きく、導入コストに見合わなかったからです。"),n("br"),t._v("\n      私たちの長年のノウハウでポイントを抑えた最適な製品開発をすることで"),n("br"),t._v("\n      低コストで無駄のないコンパクトなFAシステムを実現しました。\n    ")]},proxy:!0}])}),t._v(" "),n("div",{ref:"feature",staticClass:"features",class:{active:t.featureActive}},[n("in-view",{attrs:{target:t.featureTarget},on:{inview:t.inviewFeature}}),t._v(" "),n("div",{staticClass:"inner features_main"},[n("div",{staticClass:"feature"},[n("img",{staticClass:"icon",attrs:{src:"/imgs/fa-system/feature1.svg",alt:""}}),t._v(" "),n("p",{staticClass:"no"},[t._v("01")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("協働・省人化に注力することで"),n("br"),t._v("\n          低コストを実現。")]),t._v(" "),n("p",{staticClass:"body"},[t._v("\n          完全無人化が可能なFAロボットは作業範囲はせまく高額です。私たちは人をサポートする協働・省人化ロボットに注力します。シンプルかつ効果的な作業のみに絞り、複雑な作業は人が対応することで、低コストを実現しています。")])]),t._v(" "),n("div",{staticClass:"feature"},[n("img",{staticClass:"icon",attrs:{src:"/imgs/fa-system/feature2.svg",alt:""}}),t._v(" "),n("p",{staticClass:"no"},[t._v("02")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("発注から納品までを考慮した"),n("br"),t._v("\n          FAシステム。")]),t._v(" "),n("p",{staticClass:"body"},[t._v("\n          佐竹の特徴である「多品種・小ロット・短納期」を実現するために開発されたシステムです。工程ごとのFAロボットだけでなく、RPA・工程の見える化などを行い、工場全体で問題を考えることで、より効果的な改善を行います。")])]),t._v(" "),n("div",{staticClass:"feature"},[n("img",{staticClass:"icon",attrs:{src:"/imgs/fa-system/feature3.svg",alt:""}}),t._v(" "),n("p",{staticClass:"no"},[t._v("03")]),t._v(" "),n("h3",{staticClass:"title"},[t._v("山形の自社工場での"),n("br"),t._v("\n          テスト・運用・改善フロー。")]),t._v(" "),n("p",{staticClass:"body"},[t._v("全てのFAシステムは佐竹の自社工場を実践環境として運用されています。改善を繰り返し、より低コストで無駄のないシステムへと改善を行ない、高い成果を出した製品のみを販売します。")])])])],1),t._v(" "),n("div",{staticClass:"products"},[n("h2",{staticClass:"title"},[t._v("SATAKE COMPACT "),n("span",{staticClass:"sub"},[t._v("FA SYSTEM")]),n("span",{staticClass:"desc"},[t._v("佐竹のFA製品シリーズ")])]),t._v(" "),n("div",{staticClass:"list"},[n("TopProduct",{attrs:{href:"/jp/screw-tightening-robot","image-src":"/imgs/fa-system/1.jpg","image-right":!0},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("01")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("SCREW"),n("br"),t._v("TIGHTENING"),n("br"),t._v("ROBOT")]},proxy:!0},{key:"title",fn:function(){return[t._v("ネジ締めロボット")]},proxy:!0},{key:"body",fn:function(){return[t._v("今まで手作業で行っていた"),n("br"),t._v("\n          ネジ締め・ネジ外し作業を自動化します。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/judgment-function-micrometer","image-src":"/imgs/fa-system/2.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("02")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("JUDGMENT"),n("br"),t._v("\n          FUNCTION"),n("br"),t._v("\n          MICROMETER\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("公差判定機能付きマイクロメータ")]},proxy:!0},{key:"body",fn:function(){return[t._v("QRコードの型番を読み込むと、加工寸法や"),n("br"),t._v("\n          公差の情報をコンピュータへ読込み、"),n("br"),t._v("\n          マイクロメータの測定値を自動判定します。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/gripper-with-shockac-cube","image-right":!0,"image-src":"/imgs/fa-system/3.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("03")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("GRIPPER"),n("br",{staticClass:"sp-only"}),t._v(" WITH"),n("br"),t._v("\n          Shokac Cube\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("ショッカクキューブ付グリッパー")]},proxy:!0},{key:"body",fn:function(){return[t._v("協働ロボットのグリッパーの把持部に"),n("br"),t._v("\n          ショッカクキューブがついた優れものです。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/picking-indicator","image-src":"/imgs/fa-system/4.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("04")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("PICKING"),n("br"),t._v("\n          INDICATOR\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("ピッキング指示機")]},proxy:!0},{key:"body",fn:function(){return[t._v("QRコードの型番を読み込むと、原材料棚の"),n("br"),t._v("\n          LEDが点灯し、置き場所を指示します。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/dnc-equipment-online","image-right":!0,"image-src":"/imgs/fa-system/5.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("05")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("DIRECT"),n("br"),t._v("\n          NUMERICAL"),n("br"),t._v("\n          CONTROL\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("DNC（装置オンライン）")]},proxy:!0},{key:"body",fn:function(){return[t._v("QRコードの型番を読み込むと加工データを"),n("br"),t._v("\n          NC加工機にネットワークを通して設定できます。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/rpa-robot-construction","image-src":"/imgs/fa-system/6.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("06")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("ROBOTIC"),n("br"),t._v("\n          PROCESS"),n("br"),t._v("\n          AUTOMATION\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("RPA ロボット構築")]},proxy:!0},{key:"body",fn:function(){return[t._v("人によるPC作業の業務効率化を目的とし、"),n("br"),t._v("\n          ソフトウェアロボットによって"),n("br"),t._v("\n          業務の自動化・効率化を実現する。\n        ")]},proxy:!0}])}),t._v(" "),n("TopProduct",{attrs:{href:"/jp/satake-cloud-manager","image-right":!0,"image-src":"/imgs/fa-system/7.jpg"},scopedSlots:t._u([{key:"no",fn:function(){return[t._v("07")]},proxy:!0},{key:"en-name",fn:function(){return[t._v("SATAKE"),n("br"),t._v("\n          CLOUD"),n("br"),t._v("\n          MANAGER\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("SATAKE稼働管理システム")]},proxy:!0},{key:"body",fn:function(){return[t._v("自社工場での作業工数を一目で分かりやすく、"),n("br"),t._v("\n          手軽に管理できるようになります。\n        ")]},proxy:!0}])})],1)])],1)}),[],!1,null,"24f0e710",null);e.default=component.exports;installComponents(component,{MessageBlack:n(202).default,InView:n(208).default,TopProduct:n(214).default,FaLayout:n(201).default})}}]);