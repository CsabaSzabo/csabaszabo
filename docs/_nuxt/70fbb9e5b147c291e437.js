(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(e,t,n){var content=n(307);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("5253a514",content,!0,{sourceMap:!1})},300:function(e,t,n){var content=n(315);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("57de9af4",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";var r=n(299);n.n(r).a},307:function(e,t,n){(t=n(11)(!1)).push([e.i,".CsabaszaboImage{width:300px}",""]),e.exports=t},314:function(e,t,n){"use strict";var r=n(300);n.n(r).a},315:function(e,t,n){(t=n(11)(!1)).push([e.i,".project-link{color:#fff!important}.project-link,.project-link:hover{text-decoration:none}",""]),e.exports=t},324:function(e,t,n){"use strict";n.r(t);n(306);var r=n(57),o=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"CsabaszaboImage",attrs:{alt:"Csaba Szabo",src:"/img/csaba_normal.jpg"}})}),[],!1,null,null,null).exports,l={props:{src:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},longDescription:{type:String,required:!0},link:{type:String,required:!0}},data:function(){return{show:!1}}},c=n(82),d=n.n(c),v=n(169),m=n(303),_=n(298),h=n(320),f=n(129),k=n(117),w=n(105),x=n(294),y=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}}),e._v(" "),n("v-card-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[e._v(e._s(e.description))])]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""}},[e.link?n("a",{staticClass:"project-link",attrs:{href:e.link,target:"_blank"}},[n("v-icon",[e._v("mdi-open-in-new")])],1):n("a",[n("v-icon",{attrs:{disabled:""}},[e._v("mdi-open-in-new")])],1)]),e._v(" "),e.longDescription?n("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[n("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1):e._e()],1),e._v(" "),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-divider"),e._v(" "),n("v-card-text",[e._v("\n        "+e._s(e.longDescription)+"\n      ")])],1)])],1)}),[],!1,null,null,null),C=y.exports;d()(y,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDivider:h.a,VExpandTransition:f.a,VIcon:k.a,VImg:w.a,VSpacer:x.a});var V={data:function(){return{cards:[{title:"Aroundsound website",description:"Aroundsound lets you record sound snippets quickly, store them safely, enrich them with notes, and share them.",longDescription:"I build the Aroundsound new website & web app with Vue.js and Nuxt.js (to support server-side rendering). We could easily integrate them with Firebase, our backend system. Many components are reused between our dynamic pages (inspiration, shared recording, my recordings and collections).",src:"/img/project-aroundsound_small@1x.png",flex:6,link:"https://aroundsound.com"},{title:"Aroundsound internal site",description:"",longDescription:null,src:"/img/project-aroundsound-internal_small@1x.png",flex:6},{title:"Villanyautok.com",description:"A hungarian electric car listing site.",longDescription:null,src:"/img/project-villanyautok_small@1x.png",flex:6,link:"https://villanyautok.com"},{title:"EVDB.io (under development)",description:"An international version of villanyautok.com, currently under development.",longDescription:null,src:"/img/project-evdb_small@1x.png",flex:6,link:"https://evdb.io"}]}},components:{Project:C}},j=(n(314),n(321)),D=n(291),S=n(322),A=Object(r.a)(V,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},this._l(this.cards,(function(e){return t("v-col",{key:e.title,attrs:{cols:e.flex}},[t("Project",{attrs:{src:e.src,title:e.title,description:e.description,longDescription:e.longDescription,link:e.link}})],1)})),1)],1)}),[],!1,null,null,null),P=A.exports;d()(A,{VCol:j.a,VContainer:D.a,VRow:S.a});var I={components:{CsabaImage:o,ProjectGrid:P}},T=n(304),W=n(305),z=Object(r.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[n("div",{staticClass:"text-center"},[n("CsabaImage")],1),e._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline"},[e._v("\n        Csaba Szabo, Frontend engineer\n      ")]),e._v(" "),n("v-card-text",[n("p",[e._v("\n          Young and happy IT guy with experience in App and Web Product Development.\n        ")]),e._v(" "),n("p",[e._v("\n          5+ years experience in App Product Development:\n          "),n("ul",[n("li",[e._v("Product management (Skyscanner)")]),e._v(" "),n("li",[e._v("Software engineering (Skyscanner)")]),e._v(" "),n("li",[e._v("App release engineering (Skyscanner)")]),e._v(" "),n("li",[e._v("Software testing (CocktailFlow, RedBullTV, Gneo, Skyscanner apps, ...)")])])]),e._v(" "),n("p",[e._v("\n          2+ years experience in Web Product Development:\n          "),n("ul",[n("li",[e._v("Web Development (villanyautok.com, aroundsound.com)")]),e._v(" "),n("li",[e._v("Product Management (bankracio.hu)")])])]),e._v(" "),n("p",[e._v("\n          In 2018 I started looking into Web Development and Web Product Management.\n          "),n("ul",[n("li",[e._v("started building my VillanyAutok.com site")]),e._v(" "),n("li",[e._v("worked on Bankracio.hu (part of ingatlan.com) as a Product Manager")]),e._v(" "),n("li",[e._v("worked on aroundsound.com as a Web Developer")])])]),e._v(" "),n("hr",{staticClass:"my-3"}),e._v(" "),n("a",{attrs:{href:"https://github.com/CsabaSzabo",target:"_blank"}},[e._v("\n          GitHub\n        ")]),e._v(" "),n("br"),e._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/csaba-sz/",target:"_blank"}},[e._v("\n          LinkedIn\n        ")])]),e._v(" "),n("v-card-actions",[n("v-spacer")],1)],1),e._v(" "),n("ProjectGrid")],1)],1)}),[],!1,null,null,null);t.default=z.exports;d()(z,{VCard:m.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VFlex:T.a,VLayout:W.a,VSpacer:x.a})}}]);