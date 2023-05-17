webpackJsonp([0],{aThc:function(e,t){},dPpd:function(e,t){},h0qe:function(e,t){},z6YW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,s,i,o,c=a("Dd8w"),l=a.n(c),p=a("Gu7T"),u=a.n(p),m=a("mvHQ"),d=a.n(m),h=a("OvRC"),v=a.n(h),b=a("bOdI"),y=a.n(b),f=a("0xDb"),g=(n={},y()(n,f.b.zh,{name:"参数名",type:"类型",required:"是否必填",description:"字段说明"}),y()(n,f.b.tw,{name:"參數名",type:"類型",required:"是否必填",description:"欄位說明"}),y()(n,f.b.en,{name:"Parameter Name",type:"Type",required:"Required",description:"Field Description"}),n),_={success:(r={},y()(r,f.b.zh,"复制成功"),y()(r,f.b.tw,"複製成功"),y()(r,f.b.en,"Copy Successfully"),r),error:(s={},y()(s,f.b.zh,"复制失败"),y()(s,f.b.tw,"複製失敗"),y()(s,f.b.en,"Copy Failed"),s)},C={code:(i={},y()(i,f.b.zh,"复制代码"),y()(i,f.b.tw,"複製代碼"),y()(i,f.b.en,"Copy Code"),i),params:(o={},y()(o,f.b.zh,"复制参数"),y()(o,f.b.tw,"複製參數"),y()(o,f.b.en,"Copy Parameters"),o)},T="request",x={name:"Demo",props:{lang:String,item:{type:Object,default:function(){}}},data:function(){return{parmasShowType:1,activeParamsTab:"",paramsTableColumn:[],codeLangConfig:f.c,activeCodeTab:f.c[0].value}},computed:{isTable:function(){return 1===this.parmasShowType},successMsg:function(){return _.success[this.lang]},errorMsg:function(){return _.error[this.lang]},copyCodeBtnText:function(){return C.code[this.lang]},copyParmsBtnText:function(){return C.params[this.lang]},currentMap:function(){return g[this.lang]},requestTableColumns:function(){return[{prop:"name",label:this.currentMap.name},{prop:"type",label:this.currentMap.type},{prop:"required",label:this.currentMap.required},{prop:"description",label:this.currentMap.description}]},responseTableColumns:function(){return[{prop:"name",label:this.currentMap.name},{prop:"type",label:this.currentMap.type},{prop:"description",label:this.currentMap.description}]},paramsTabs:function(){return Array.isArray(this.item.params)?this.item.params.map(function(e){return{type:e.type,key:e.key}}):[]},jsonParams:function(){var e=this,t=this.item.params.find(function(t){return t.key===e.activeParamsTab}),a=v()(null);return(t?t.data:[]).forEach(function(e){a[e.name]=e.type}),d()(a,null,2)},renderParamsData:function(){var e=this,t=this.item.params.find(function(t){return t.key===e.activeParamsTab});if(this.isTable)return t?t.data:[];var a=v()(null);return(t?t.data:[]).forEach(function(e){a[e.name]=e.type}),this.$hljs.highlight(d()(a,null,2),{language:"json"}).value},code:function(){return this.item.api?Object(f.e)(this.item.api,this.activeCodeTab,"pre-open-api.yunzhonghui.vip"):"No Code"},demoCode:function(){return this.$hljs.highlight(this.code,{language:this.activeCodeTab}).value}},watch:{activeParamsTab:function(e){this.paramsTableColumn=[].concat(e===T?u()(this.requestTableColumns):u()(this.responseTableColumns))}},methods:{onCopy:function(){this.$message.success(this.successMsg)},onError:function(){this.$message.success(this.errorMsg)}},created:function(){"demo"===this.item.type&&(this.activeParamsTab=this.paramsTabs[0].key)}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item-demo-content"},[a("div",[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{flex:"1"}},[a("el-radio",{attrs:{label:1},model:{value:e.parmasShowType,callback:function(t){e.parmasShowType=t},expression:"parmasShowType"}},[e._v("Table")]),e._v(" "),a("el-radio",{attrs:{label:2},model:{value:e.parmasShowType,callback:function(t){e.parmasShowType=t},expression:"parmasShowType"}},[e._v("JSON")])],1),e._v(" "),e.isTable?e._e():a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.jsonParams,expression:"jsonParams",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"small"}},[e._v(e._s(e.copyParmsBtnText))])],1),e._v(" "),a("div",{staticClass:"params-content"},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeParamsTab,callback:function(t){e.activeParamsTab=t},expression:"activeParamsTab"}},e._l(e.paramsTabs,function(t){return a("el-tab-pane",{key:t.key,attrs:{name:t.key,label:t.type}},[e.isTable?a("el-table",{attrs:{data:e.renderParamsData,stripe:"",border:""}},e._l(e.paramsTableColumn,function(e,t){return a("el-table-column",{key:t,attrs:{label:e.label,prop:e.prop,align:"center"}})}),1):a("div",{staticClass:"code-html"},[a("pre",[a("code",{staticClass:"hljs language-json",domProps:{innerHTML:e._s(e.renderParamsData)}})])])],1)}),1)],1)]),e._v(" "),a("div",[a("div",{staticStyle:{display:"flex","flex-direction":"row-reverse"}},[a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"small"}},[e._v(e._s(e.copyCodeBtnText))])],1),e._v(" "),a("div",{staticClass:"params-content",staticStyle:{"margin-top":"4px"}},[a("el-tabs",{attrs:{type:"card"},model:{value:e.activeCodeTab,callback:function(t){e.activeCodeTab=t},expression:"activeCodeTab"}},e._l(e.codeLangConfig,function(t){return a("el-tab-pane",{key:t.value,attrs:{name:t.value,label:t.label}},[a("div",{staticClass:"code-html demo-code"},[a("pre",[a("code",{class:["hljs","language-"+e.activeCodeTab],domProps:{innerHTML:e._s(e.demoCode)}})])])])}),1)],1)])])},staticRenderFns:[]};var P=a("VU/8")(x,w,!1,function(e){a("h0qe")},"data-v-35c12a5c",null).exports,k={name:"ContentItem",props:{lang:String,item:{type:Object,default:function(){}}},components:{Demo:P},data:function(){return{}}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return"hash"===e.item.type?a("h2",{staticClass:"item-hash",attrs:{id:e.item.text}},[a("router-link",{staticClass:"header-anchor",attrs:{to:{path:e.$route.path,hash:"#"+e.item.text}}},[e._v("\n      "+e._s(e.item.text)+"\n    ")])],1):a("div",{staticClass:"content-item"},["title"===e.item.type?a("p",{staticClass:"item-title"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),"normal"===e.item.type?a("div",{staticClass:"item-normal"},[e.item.text?a("p",{style:e.item.style||{}},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),Array.isArray(e.item.children)?a("ul",{staticStyle:{"margin-left":"-10px"}},e._l(e.item.children,function(t,n){return a("li",{key:n},["html"===t.type?a("span",{domProps:{innerHTML:e._s(t.text)}}):a("span",[e._v(e._s(t.text))]),e._v(" "),Array.isArray(t.children)?a("ul",{staticStyle:{"margin-left":"-15px","list-style-type":"disc"}},e._l(t.children,function(t,n){return a("li",{key:n},[e._v(e._s(t.text))])}),0):e._e()])}),0):e._e()]):e._e(),e._v(" "),"html"===e.item.type?a("p",{domProps:{innerHTML:e._s(e.item.text)}}):e._e(),e._v(" "),"warning"===e.item.type?a("p",{staticClass:"item-warning-content"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),"code"===e.item.type?a("p",{staticClass:"item-code-content"},[e._v(e._s(e.item.text))]):e._e(),e._v(" "),"demo"===e.item.type?a("Demo",{attrs:{lang:e.lang,item:e.item}}):e._e()],1)},staticRenderFns:[]};var M=a("VU/8")(k,S,!1,function(e){a("aThc")},"data-v-3fff74fe",null).exports,j={name:"Content Not Found",content:[]},$={props:{lang:String},components:{ContentItem:M},data:function(){return{appConfig:Object(f.f)(),pageContent:l()({},j)}},computed:{},watch:{"$route.path":{handler:function(e){this.pageContent=this.appConfig[e]||l()({},j)},immediate:!0},lang:function(){this.appConfig=Object(f.f)(),this.pageContent=this.appConfig[this.$route.path]||l()({},j)}},mounted:function(){f.d.$emit("content-ready")},updated:function(){f.d.$emit("content-ready")}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-content"},[a("h1",{staticClass:"page-content-title"},[e._v(e._s(e.pageContent.name))]),e._v(" "),a("div",{staticClass:"page-content-wrap",attrs:{id:"page-content-wrap"}},[Array.isArray(e.pageContent.content)?e._l(e.pageContent.content,function(t,n){return a("ContentItem",{key:n,attrs:{item:t,lang:e.lang}})}):a("p",[e._v(e._s(e.pageContent.content))])],2)])},staticRenderFns:[]};var E=a("VU/8")($,q,!1,function(e){a("dPpd")},"data-v-514494ef",null);t.default=E.exports}});
//# sourceMappingURL=0.9631fd62b57ff38f07e7.js.map