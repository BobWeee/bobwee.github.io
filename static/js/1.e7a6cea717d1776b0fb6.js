webpackJsonp([1],{HS7g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Dd8w"),i=n.n(a),r=n("NYxO"),c=n("c/Tr"),s=n.n(c),o=n("0xDb"),h={props:{path:String,className:String},data:function(){return{toc:[],activeText:""}},created:function(){o.d.$on("content-ready",this.getTocList)},methods:{handleHashClick:function(t){this.activeText=t.text,this.$scrollTo("#"+t.text)},getTocList:function(){var t=document.querySelectorAll("#page-content-wrap h2");if(this.toc=s()(t).map(function(t){return{text:t.innerText}}),this.$route.hash){var e=decodeURIComponent(this.$route.hash);this.activeText=e.slice(1),this.$scrollTo(e)}var n=document.getElementById("scroll-container");n&&n.scrollTo({top:0,behavior:"smooth"})}},beforeDestroy:function(){o.d.$off("content-ready",this.getTocList)}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("ul",{staticClass:"menu-toc-list",class:t.className},t._l(t.toc,function(e,a){return n("li",{key:a,class:{"active-toc-menu":t.activeText===e.text}},[n("router-link",{attrs:{to:{path:t.$route.path,hash:"#"+e.text}},nativeOn:{click:function(n){return n.stopPropagation(),t.handleHashClick(e)}}},[t._v("\n        "+t._s(a+1+". "+e.text)+"\n      ")])],1)}),0):t._e()},staticRenderFns:[]};var l=n("VU/8")(h,u,!1,function(t){n("YvJc")},"data-v-c96662d4",null).exports,d=n("2uFj"),f={components:{TOC:l},data:function(){return{moduleConfig:null,show:!1,activePath:"",openMenuIndex:-1}},computed:i()({},Object(r.b)(["currentLang"]),{rootConfig:function(){return Object(d.getRootConfigByLang)(this.currentLang)},menus:function(){if(this.moduleConfig){var t=Object(o.f)(),e=[];return this.moduleConfig.forEach(function(n){var a=n.path;if(Array.isArray(n.children)){var i={path:a,name:t[a].name,children:[]};n.children.forEach(function(e){i.children.push({path:a+"/"+e.path,name:t[a+"/"+e.path].name})}),e.push(i)}else e.push({path:a,name:t[a].name})}),e}return[]}}),watch:{"$route.meta.module":{handler:function(t){this.moduleConfig=this.rootConfig[t],this.activePath="/"+t+"/changelog"},immediate:!0},rootConfig:{handler:function(t){this.moduleConfig=t[this.$route.meta.module]},deep:!0},"$route.path":function(){this.init()}},methods:{redirectByPath:function(t){this.activePath=t,this.$router.push(t)},handleMenuClick:function(t,e){this.activePath!==t.path&&(Array.isArray(t.children)?this.openMenuIndex=e:(this.openMenuIndex=-1,this.redirectByPath(t.path)))},handleSubMenuClick:function(t){this.activePath!==t.path&&this.redirectByPath(t.path)},init:function(){this.activePath=this.$route.path;for(var t=-1,e=0;e<this.menus.length;e++){var n=this.menus[e];if(this.activePath===n.path)break;if(Array.isArray(n.children))for(var a=0;a<n.children.length;a++)if(this.activePath===n.children[a].path){t=e;break}if(-1!==t)break}this.openMenuIndex=t}},created:function(){this.init()}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"calc(100% - 60px)","padding-top":"32px"}},[n("el-aside",{staticClass:"aside-section",attrs:{width:"230px"}},[n("ul",{staticClass:"aside-menus"},t._l(t.menus,function(e,a){return n("li",{key:a,attrs:{id:e.path},on:{click:function(n){return t.handleMenuClick(e,a)}}},[n("span",{class:["menu-item",{"menu-item-active":t.activePath===e.path}]},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),t.activePath===e.path?n("TOC",{key:t.activePath,attrs:{path:t.activePath}}):t._e(),t._v(" "),Array.isArray(e.children)&&t.openMenuIndex===a?n("ul",{staticClass:"aside-menus aside-sub-menus"},t._l(e.children,function(e,a){return n("li",{key:a,attrs:{id:e.path},on:{click:function(n){return n.stopPropagation(),t.handleSubMenuClick(e)}}},[n("span",{staticClass:"menu-item submenu-item",class:[{"menu-item-active":t.activePath===e.path}]},[t._v("\n                "+t._s(e.name)+"\n              ")]),t._v(" "),t.activePath===e.path?n("TOC",{key:t.activePath,attrs:{path:t.activePath,className:"submenu-toc-list"}}):t._e()],1)}),0):t._e()],1)}),0)]),t._v(" "),n("el-main",{attrs:{id:"scroll-container"}},[n("router-view",{attrs:{lang:t.currentLang}})],1)],1)},staticRenderFns:[]};var m=n("VU/8")(f,p,!1,function(t){n("SUlm")},"data-v-4394c441",null);e.default=m.exports},SUlm:function(t,e){},YvJc:function(t,e){}});
//# sourceMappingURL=1.e7a6cea717d1776b0fb6.js.map